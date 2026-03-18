import crypto from 'crypto'

const SECRET = process.env.DOWNLOAD_TOKEN_SECRET || 'fallback-dev-secret-change-me'

// Generate HMAC token for a download
export function generateDownloadToken(identifier) {
  return crypto.createHmac('sha256', SECRET).update(identifier).digest('hex').slice(0, 32)
}

// Verify HMAC token
export function verifyDownloadToken(identifier, token) {
  const expected = generateDownloadToken(identifier)
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token))
}
