import { generateDownloadToken } from './download-token'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'
const BREVO_CONTACTS_URL = 'https://api.brevo.com/v3/contacts'
const SENDER = { name: 'Fibreglass Pool Check', email: 'help@fibreglasspoolcheck.com.au' }
const BRADY_EMAIL = 'help@fibreglasspoolcheck.com.au'
const SITE_URL = 'https://fibreglasspoolcheck.com.au'

// Brevo list IDs
const BREVO_LIST_RED_FLAGS_GUIDE = 3

// Download links go through our API which generates time-limited signed URLs
// token is HMAC-SHA256 of the order/lead ID for secure verification
function getDownloadLink(product, id) {
  const token = generateDownloadToken(String(id || 'fallback'))
  return `${SITE_URL}/api/download?product=${product}&id=${encodeURIComponent(id)}&token=${token}`
}

function getBrevoApiKey() {
  let key = process.env.BREVO_API_KEY || ''
  // Handle base64-encoded JSON format from Brevo dashboard
  if (key.startsWith('eyJ')) {
    try {
      const decoded = JSON.parse(Buffer.from(key, 'base64').toString())
      key = decoded.api_key || key
    } catch (e) {
      // Not valid base64 JSON, use as-is
    }
  }
  return key
}

async function sendEmail({ to, subject, htmlContent, replyTo }) {
  const body = {
    sender: SENDER,
    to: [{ email: to.email, name: to.name || to.email }],
    subject,
    htmlContent,
  }
  if (replyTo) body.replyTo = replyTo

  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': getBrevoApiKey(),
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Brevo send error:', text)
    throw new Error(`Brevo email failed: ${res.status}`)
  }

  return true
}

// --- Brevo Contacts API ---

export async function addContactToBrevoList(email, firstName, listId = BREVO_LIST_RED_FLAGS_GUIDE) {
  const body = {
    email,
    attributes: { FIRSTNAME: firstName },
    listIds: [listId],
    updateEnabled: true, // update existing contact if already exists
  }

  const res = await fetch(BREVO_CONTACTS_URL, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': getBrevoApiKey(),
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Brevo add contact error:', text)
    // Don't throw — contact creation is non-critical, guide delivery is priority
    return false
  }

  return true
}

// --- Red Flags Guide ---

export async function sendRedFlagsGuide(firstName, email, leadId) {
  const downloadLink = getDownloadLink('red_flags_guide', leadId)
  await sendEmail({
    to: { email, name: firstName },
    subject: 'Your Free Red Flags Guide',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #0f172a;">Hi ${escapeHtml(firstName)},</h2>
        <p>Thanks for grabbing the Red Flags Guide. Here's your download link:</p>
        <p style="text-align: center; margin: 24px 0;">
          <a href="${downloadLink}" style="background-color: #ea580c; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Download Your Guide</a>
        </p>
        <p style="font-size: 12px; color: #94a3b8;">This link expires in 7 days. If you need it again, just request a new one.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 14px;">Want more certainty about a specific pool? Here are two ways I can help:</p>
        <ul style="font-size: 14px; line-height: 1.8;">
          <li><strong><a href="${SITE_URL}/BuyerChecklist" style="color: #ea580c;">Buyer Checklist ($29)</a></strong> — Know exactly what to look for when inspecting a fibreglass pool.</li>
          <li><strong><a href="${SITE_URL}/PoolCheckReport" style="color: #ea580c;">Pool Check Report ($149)</a></strong> — Send me photos and I'll give you a full written assessment.</li>
        </ul>
        <p style="font-size: 13px; color: #64748b; margin-top: 24px;">
          — Brady, Fibreglass Pool Check<br/>
          <a href="${SITE_URL}" style="color: #64748b;">fibreglasspoolcheck.com.au</a>
        </p>
      </div>
    `,
  })
}

// --- Buyer Checklist auto-delivery ---

export async function sendBuyerChecklistDelivery(fullName, email, orderId) {
  const downloadLink = getDownloadLink('buyer_checklist', orderId)
  // Send to customer
  await sendEmail({
    to: { email, name: fullName },
    subject: 'Your Fibreglass Pool Buyer Checklist',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #0f172a;">Hi ${escapeHtml(fullName.split(' ')[0])},</h2>
        <p>Thanks for your order. Here's your Fibreglass Pool Buyer Checklist:</p>
        <p style="text-align: center; margin: 24px 0;">
          <a href="${downloadLink}" style="background-color: #ea580c; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Download Your Checklist</a>
        </p>
        <p style="font-size: 12px; color: #94a3b8;">This link expires in 7 days. If you need it again, just get in touch.</p>
        <p>This checklist covers everything a specialist would check when assessing a fibreglass pool. Use it at your next open home or property inspection.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 14px;">Need a deeper look at a specific pool? Send me photos and I'll prepare a full <a href="${SITE_URL}/PoolCheckReport" style="color: #ea580c;">Pool Check Report ($149)</a>.</p>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="font-size: 14px; font-weight: bold; color: #0f172a; margin: 0 0 8px 0;">Need it fixed?</p>
          <p style="font-size: 14px; color: #1e293b; margin: 0 0 8px 0;">If your pool needs resurfacing or repairs, <a href="https://brefibreglass.com.au" style="color: #ea580c; font-weight: bold;">BRE Fibreglass</a> services the Gold Coast, Brisbane and South East Queensland.</p>
          <p style="font-size: 12px; color: #94a3b8; margin: 8px 0 0 0;">In the interest of full transparency, BRE is owned by a family member of the Fibreglass Pool Check team. Your assessment is always independent - we have no influence over your results, and you are never obligated to use any particular repairer.</p>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-top: 24px;">
          — Brady, Fibreglass Pool Check<br/>
          <a href="${SITE_URL}" style="color: #64748b;">fibreglasspoolcheck.com.au</a>
        </p>
      </div>
    `,
  })
}

// --- Pool Check Report order confirmation ---

export async function sendReportAcknowledgement(fullName, email, orderId) {
  // Send to customer
  await sendEmail({
    to: { email, name: fullName },
    subject: 'Your Pool Check Report order is confirmed',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #0f172a;">Thanks ${escapeHtml(fullName.split(' ')[0])}, your order is confirmed.</h2>
        <p>I've received your Pool Check Report order and your photos. I'll review everything and have your report ready within <strong>2-3 business days</strong>.</p>
        <p>If you have additional photos or notes you'd like to include, just reply to this email.</p>
        <p style="font-size: 14px; color: #64748b; margin-top: 8px;">Order reference: ${orderId}</p>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="font-size: 14px; font-weight: bold; color: #0f172a; margin: 0 0 8px 0;">Need it fixed?</p>
          <p style="font-size: 14px; color: #1e293b; margin: 0 0 8px 0;">If your pool needs resurfacing or repairs, <a href="https://brefibreglass.com.au" style="color: #ea580c; font-weight: bold;">BRE Fibreglass</a> services the Gold Coast, Brisbane and South East Queensland.</p>
          <p style="font-size: 12px; color: #94a3b8; margin: 8px 0 0 0;">In the interest of full transparency, BRE is owned by a family member of the Fibreglass Pool Check team. Your assessment is always independent - we have no influence over your results, and you are never obligated to use any particular repairer.</p>
        </div>
        <p style="font-size: 13px; color: #64748b;">
          — Brady, Fibreglass Pool Check<br/>
          <a href="${SITE_URL}" style="color: #64748b;">fibreglasspoolcheck.com.au</a>
        </p>
      </div>
    `,
    replyTo: { email: BRADY_EMAIL, name: 'Brady' },
  })
}

// --- Quote Review order confirmation ---

export async function sendQuoteReviewAcknowledgement(fullName, email, orderId) {
  await sendEmail({
    to: { email, name: fullName },
    subject: 'Your Quote Review order is confirmed',
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #0f172a;">Thanks ${escapeHtml(fullName.split(' ')[0])}, your order is confirmed.</h2>
        <p>I've received your Quote Review order and your documents. I'll review everything and have your assessment ready within <strong>2-3 business days</strong>.</p>
        <p>If you have additional quotes or photos to add, just reply to this email.</p>
        <p style="font-size: 14px; color: #64748b; margin-top: 8px;">Order reference: ${orderId}</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <p style="font-size: 13px; color: #64748b;">
          — Brady, Fibreglass Pool Check<br/>
          <a href="${SITE_URL}" style="color: #64748b;">fibreglasspoolcheck.com.au</a>
        </p>
      </div>
    `,
    replyTo: { email: BRADY_EMAIL, name: 'Brady' },
  })
}

// --- Brady notification (new order alert) ---

export async function notifyBradyNewOrder(productName, fullName, email, orderId, details) {
  await sendEmail({
    to: { email: BRADY_EMAIL, name: 'Brady' },
    subject: `New ${productName} order from ${fullName}`,
    replyTo: { email, name: fullName },
    htmlContent: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <h2 style="color: #0f172a;">New Order: ${escapeHtml(productName)}</h2>
        <table style="font-size: 14px; line-height: 1.8; border-collapse: collapse;">
          <tr><td style="padding-right: 16px; font-weight: bold;">Customer:</td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding-right: 16px; font-weight: bold;">Email:</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding-right: 16px; font-weight: bold;">Order ID:</td><td>${escapeHtml(orderId)}</td></tr>
          ${details ? `<tr><td style="padding-right: 16px; font-weight: bold;" valign="top">Details:</td><td>${escapeHtml(details)}</td></tr>` : ''}
        </table>
        <p style="margin-top: 16px; font-size: 14px;">Files are in the <a href="https://rmbjqgkvtflzrqzxmnjm.supabase.co" style="color: #ea580c;">Supabase dashboard</a> under Storage → order-files → ${orderId}/</p>
      </div>
    `,
  })
}
