import crypto from 'crypto'

function getSecret() {
  const secret = process.env.DOWNLOAD_TOKEN_SECRET
  if (!secret) throw new Error('DOWNLOAD_TOKEN_SECRET environment variable is required')
  return secret
}

// Generate HMAC token for a download
export function generateDownloadToken(identifier) {
  return crypto.createHmac('sha256', getSecret()).update(identifier).digest('hex').slice(0, 32)
}

// Verify HMAC token
export function verifyDownloadToken(identifier, token) {
  const expected = generateDownloadToken(identifier)
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token))
}
