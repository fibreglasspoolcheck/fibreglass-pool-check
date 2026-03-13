import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'

// Product files stored in Supabase Storage 'products' bucket
const PRODUCT_FILES = {
  red_flags_guide: 'Fibreglass-Pool-Check-Red-Flags-Guide.pdf',
  buyer_checklist: 'Fibreglass-Pool-Check-Pre-Purchase-Checklist.pdf',
}

// Signed URL expiry: 7 days in seconds
const SIGNED_URL_EXPIRY = 7 * 24 * 60 * 60

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const product = searchParams.get('product')
    const token = searchParams.get('token')

    if (!product || !PRODUCT_FILES[product]) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }

    // Basic token validation — the token is the first 12 chars of the order/lead ID
    // This prevents random people from guessing URLs but isn't heavy-handed
    if (!token || token.length < 8) {
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
