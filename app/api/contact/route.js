import { NextResponse } from 'next/server'
import { rateLimit } from '../../../lib/rate-limit'

const limiter = rateLimit({ interval: 60 * 1000, limit: 5 })

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const { success } = await limiter.check(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const { full_name, email, message } = await request.json()

    if (!full_name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const safeName = escapeHtml(full_name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    // Forward to help@ via Brevo transactional email
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Fibreglass Pool Check Website', email: 'help@fibreglasspoolcheck.com.au' },
        to: [{ email: 'help@fibreglasspoolcheck.com.au', name: 'Brady' }],
        replyTo: { email: email, name: full_name },
        subject: `New contact message from ${safeName}`,
        htmlContent: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, '<br/>')}</p>
        `,
      }),
    })

    if (!res.ok) {
      console.error('Brevo error:', await res.text())
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
