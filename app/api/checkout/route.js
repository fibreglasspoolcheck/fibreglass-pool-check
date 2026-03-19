import { NextResponse } from 'next/server'
import { stripe, PRODUCTS } from '../../../lib/stripe'
import { createServerClient } from '../../../lib/supabase'
import { rateLimit } from '../../../lib/rate-limit'

const limiter = rateLimit({ interval: 60 * 1000, limit: 10 })

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const { success } = await limiter.check(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { productType, orderId } = await request.json()

    const product = PRODUCTS[productType]
    if (!product) {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 })
    }

    if (!orderId) {
      return NextResponse.json({ error: 'Missing order ID' }, { status: 400 })
    }

    // Fetch order to get customer email
    const supabase = createServerClient()
    const { data: order } = await supabase
      .from(product.table)
      .select('email, full_name')
      .eq('id', orderId)
      .single()

    const origin = request.headers.get('origin') || 'https://fibreglasspoolcheck.com.au'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}${product.successPage}?checkout=success&orderId=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${product.cancelPage}`,
      customer_email: order?.email || undefined,
      metadata: {
        productType,
        orderId,
      },
    })

    // Save stripe session ID to order
    await supabase
      .from(product.table)
      .update({ stripe_session_id: session.id })
      .eq('id', orderId)

    return NextResponse.json({ checkoutUrl: session.url })
  } catch (err) {
    console.error('Checkout API error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
