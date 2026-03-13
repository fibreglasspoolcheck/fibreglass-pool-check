import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const { orderId, productType, fieldName, paths } = await request.json()

    if (!orderId || !productType || !paths || !paths.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = createServerClient()

    const tableMap = {
      pool_check_report: 'report_orders',
      quote_review: 'quote_review_orders',
    }
    const table = tableMap[productType]

    if (!table) {
      return NextResponse.json({ error: 'Invalid product type' }, { status: 400 })
    }

    // Fetch existing file paths
    const { data: order } = await supabase
      .from(table)
      .select(fieldName || 'photos')
      .eq('id', orderId)
      .single()

    const existingPaths = order?.[fieldName || 'photos'] || []
    const allPaths = [...existingPaths, ...paths]

    const { error: updateError } = await supabase
      .from(table)
      .update({ [fieldName || 'photos']: allPaths })
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
