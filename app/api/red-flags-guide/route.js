import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { createServerClient } from '../../../lib/supabase'
import { sendRedFlagsGuide, addContactToBrevoList } from '../../../lib/brevo'
import { rateLimit } from '../../../lib/rate-limit'

const limiter = rateLimit({ interval: 60 * 1000, limit: 5 })

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const { success } = await limiter.check(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { firstName, email } = await request.json()

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Save lead to Supabase
    const supabase = createServerClient()
    const { data: lead, error: dbError } = await supabase
      .from('red_flags_leads')
      .insert({ first_name: firstName, email })
      .select('id')
      .single()

    if (dbError) {
      console.error('Failed to save lead:', dbError)
      // Continue anyway  -  sending the guide is more important than saving the lead
    }

    const leadId = lead?.id || crypto.randomUUID()

    // Send guide via Brevo
    await sendRedFlagsGuide(firstName, email, leadId)

    // Add contact to Brevo "Red Flags Guide" list (triggers nurture automation)
    await addContactToBrevoList(email, firstName)

    // Update lead status
    if (!dbError) {
      await supabase
        .from('red_flags_leads')
        .update({ guide_status: 'sent', guide_sent_at: new Date().toISOString() })
        .eq('email', email)
        .order('created_at', { ascending: false })
        .limit(1)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Red Flags Guide API error:', err)
    return NextResponse.json({ error: 'Failed to send guide' }, { status: 500 })
  }
}
