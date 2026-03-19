import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'
import { verifyDownloadToken } from '../../../lib/download-token'
import { rateLimit } from '../../../lib/rate-limit'

// Product files stored in Supabase Storage 'products' bucket
const PRODUCT_FILES = {
  red_flags_guide: 'Fibreglass-Pool-Check-Red-Flags-Guide.pdf',
  buyer_checklist: 'Fibreglass-Pool-Check-Pre-Purchase-Checklist.pdf',
}

// Signed URL expiry: 7 days in seconds
const SIGNED_URL_EXPIRY = 7 * 24 * 60 * 60

const limiter = rateLimit({ interval: 60 * 1000, limit: 20 })

export async function GET(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const { success } = await limiter.check(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const product = searchParams.get('product')
    const token = searchParams.get('token')
    const id = searchParams.get('id')

    if (!product || !PRODUCT_FILES[product]) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }

    // HMAC token validation - token must match HMAC-SHA256 of the order/lead ID
    if (!token || !id) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 })
    }

    let valid = false
    try {
      valid = verifyDownloadToken(id, token)
    } catch {
      valid = false
    }

    if (!valid) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 })
    }

    const supabase = createServerClient()
    const fileName = PRODUCT_FILES[product]

    // Generate a signed URL that expires
    const { data, error } = await supabase.storage
      .from('products')
      .createSignedUrl(fileName, SIGNED_URL_EXPIRY)

    if (error) {
      console.error('Signed URL error:', error)
      return NextResponse.json({ error: 'Download not available' }, { status: 500 })
    }

    // Redirect to the signed URL
    return NextResponse.redirect(data.signedUrl)
  } catch (err) {
    console.error('Download API error:', err)
    return NextResponse.json({ error: 'Download failed' }, { status: 500 })
  }
}
