import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { full_name, email, message } = await request.json()

    if (!full_name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Forward to help@ via Brevo transactional email
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Fibreglass Pool Check Website', email: 'deliver@send.fibreglasspoolcheck.com.au' },
        to: [{ email: 'help@fibreglasspoolcheck.com.au', name: 'Brady' }],
        replyTo: { email: email, name: full_name },
        subject: `New contact message from ${full_name}`,
        htmlContent: `
          <p><strong>Name:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
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
