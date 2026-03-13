import { NextResponse } from 'next/server'
import { stripe, PRODUCTS } from '../../../lib/stripe'
import { createServerClient } from '../../../lib/supabase'
import {
  sendBuyerChecklistDelivery,
  sendReportAcknowledgement,
  sendQuoteReviewAcknowledgement,
  notifyBradyNewOrder,
} from '../../../lib/brevo'

// Disable body parsing — Stripe needs raw body for signature verification
export const runtime = 'nodejs'

export async function POST(request) {
  let event

  try {
    const body = await request.text()
    const sig = request.headers.get('stripe-signature')

    if (!sig) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const { productType, orderId } = session.metadata || {}

    if (!productType || !orderId) {
      console.error('Webhook missing metadata:', session.metadata)
      return NextResponse.json({ received: true })
    }

    const product = PRODUCTS[productType]
    if (!product) {
      console.error('Unknown product type in webhook:', productType)
      return NextResponse.json({ received: true })
    }

    const supabase = createServerClient()

    // Update order to paid
    const updateData = {
      payment_status: 'paid',
      stripe_payment_intent: session.payment_intent,
    }

    const { data: order, error: updateError } = await supabase
      .from(product.table)
      .update(updateData)
      .eq('id', orderId)
      .select()
      .single()

    if (updateError) {
      console.error('Failed to update order:', updateError)
      return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
    }

    // Send emails based on product type
    try {
      if (productType === 'buyer_checklist') {
        // Auto-deliver checklist + mark delivered
        await sendBuyerChecklistDelivery(order.full_name, order.email)
        await supabase
          .from('checklist_orders')
          .update({ delivery_status: 'delivered', delivered_at: new Date().toISOString() })
          .eq('id', orderId)

        // Notify Brady
        await notifyBradyNewOrder('Buyer Checklist', order.full_name, order.email, orderId, null)

      } else if (productType === 'pool_check_report') {
        // Send acknowledgement to customer
        await sendReportAcknowledgement(order.full_name, order.email, orderId)
        await supabase
          .from('report_orders')
          .update({ ack_status: 'sent', ack_sent_at: new Date().toISOString() })
          .eq('id', orderId)

        // Notify Brady with details
        const details = [
          order.pool_address && `Pool address: ${order.pool_address}`,
          order.audience_type && `Audience: ${order.audience_type}`,
          order.pool_age && `Pool age: ${order.pool_age}`,
          order.pool_brand && `Pool brand: ${order.pool_brand}`,
          order.issue_summary && `Issue: ${order.issue_summary}`,
          order.photos?.length && `Photos uploaded: ${order.photos.length}`,
        ].filter(Boolean).join('<br/>')

        await notifyBradyNewOrder('Pool Check Report', order.full_name, order.email, orderId, details)

      } else if (productType === 'quote_review') {
        // Send acknowledgement to customer
        await sendQuoteReviewAcknowledgement(order.full_name, order.email, orderId)
        await supabase
          .from('quote_review_orders')
          .update({ ack_status: 'sent', ack_sent_at: new Date().toISOString() })
          .eq('id', orderId)

        // Notify Brady with details
        const details = [
          order.pool_address && `Pool address: ${order.pool_address}`,
          order.num_quotes && `Number of quotes: ${order.num_quotes}`,
          order.main_concern && `Main concern: ${order.main_concern}`,
          order.quote_files?.length && `Quote files: ${order.quote_files.length}`,
          order.pool_photos?.length && `Pool photos: ${order.pool_photos.length}`,
        ].filter(Boolean).join('<br/>')

        await notifyBradyNewOrder('Quote Review', order.full_name, order.email, orderId, details)
      }
    } catch (emailErr) {
      // Log but don't fail the webhook — payment is already captured
      console.error('Email send error (non-fatal):', emailErr)
    }
  }

  return NextResponse.json({ received: true })
}
