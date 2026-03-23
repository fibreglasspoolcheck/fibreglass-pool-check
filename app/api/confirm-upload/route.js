import { NextResponse } from 'next/server'
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
    const { orderId, productType, fieldName, paths, email } = await request.json()

    if (!orderId || !productType || !paths || !paths.length || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Whitelist allowed field names to prevent column injection
    const ALLOWED_FIELDS = ['photos']
    const safeFieldName = ALLOWED_FIELDS.includes(fieldName) ? fieldName : 'photos'

    const supabase = createServerClient()

    const tableMap = {
      pool_check_report: 'report_orders',
    }
    const table = tableMap[productType]

    if (!table) {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 })
    }

    // Fetch existing file paths and verify ownership via email
    const { data: order } = await supabase
      .from(table)
      .select(`email, ${safeFieldName}`)
      .eq('id', orderId)
      .single()

    if (!order || order.email !== email) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    const existingPaths = order?.[safeFieldName] || []
    const allPaths = [...existingPaths, ...paths]

    const { error: updateError } = await supabase
      .from(table)
      .update({ [safeFieldName]: allPaths })
      .eq('id', orderId)

    if (updateError) {
      console.error('DB update error:', updateError)
      return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, totalFiles: allPaths.length })
  } catch (err) {
    console.error('Confirm upload API error:', err)
    return NextResponse.json({ error: 'Failed to confirm upload' }, { status: 500 })
  }
}
