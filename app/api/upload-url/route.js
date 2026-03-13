import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const { orderId, productType, fieldName, files } = await request.json()

    if (!orderId || !productType || !files || !files.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = createServerClient()
    const signedUrls = []

    for (const file of files) {
      const ext = file.name.split('.').pop().toLowerCase()
      const filePath = `${orderId}/${fieldName || 'files'}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

      const { data, error } = await supabase.storage
        .from('order-files')
        .createSignedUploadUrl(filePath)

      if (error) {
        console.error('Signed URL error:', error)
        continue
      }

      signedUrls.push({
        signedUrl: data.signedUrl,
        token: data.token,
        path: filePath,
        originalName: file.name,
      })
    }

    if (signedUrls.length === 0) {
      return NextResponse.json({ error: 'Failed to generate upload URLs' }, { status: 500 })
    }

    return NextResponse.json({ signedUrls })
  } catch (err) {
    console.error('Upload URL API error:', err)
    return NextResponse.json({ error: 'Failed to generate upload URLs' }, { status: 500 })
  }
}
