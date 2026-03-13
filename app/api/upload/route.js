import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const orderId = formData.get('orderId')
    const productType = formData.get('productType')
    const fieldName = formData.get('fieldName') // 'photos', 'quote_files', 'pool_photos'
    const files = formData.getAll('files')

    if (!orderId || !productType || !files.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = createServerClient()
    const uploadedPaths = []

    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const ext = file.name.split('.').pop().toLowerCase()
      const fileName = `${orderId}/${fieldName || 'files'}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('order-files')
        .upload(fileName, buffer, {
          contentType: file.type,
          upsert: false,
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        continue // Skip failed uploads but continue with others
      }

      uploadedPaths.push(fileName)
    }

    if (uploadedPaths.length === 0) {
      return NextResponse.json({ error: 'All uploads failed' }, { status: 500 })
    }

    // Update order record with file paths
    const tableMap = {
      pool_check_report: 'report_orders',
      quote_review: 'quote_review_orders',
    }
    const table = tableMap[productType]

    if (table) {
      // Fetch existing file paths
      const { data: order } = await supabase
        .from(table)
        .select(fieldName || 'photos')
        .eq('id', orderId)
        .single()

      const existingPaths = order?.[fieldName || 'photos'] || []
      const allPaths = [...existingPaths, ...uploadedPaths]

      await supabase
        .from(table)
        .update({ [fieldName || 'photos']: allPaths })
        .eq('id', orderId)
    }

    return NextResponse.json({
      ok: true,
      uploaded: uploadedPaths.length,
      paths: uploadedPaths,
    })
  } catch (err) {
    console.error('Upload API error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
