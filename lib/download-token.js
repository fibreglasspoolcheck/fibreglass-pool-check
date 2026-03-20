import crypto from 'crypto'

const SECRET = process.env.DOWNLOAD_TOKEN_SECRET
if (!SECRET) throw new Error('DOWNLOAD_TOKEN_SECRET environment variable is required')

// Generate HMAC token for a download
export function generateDownloadToken(identifier) {
  return crypto.createHmac('sha256', SECRET).update(identifier).digest('hex').slice(0, 32)
}

// Verify HMAC token
export function verifyDownloadToken(identifier, token) {
  const expected = generateDownloadToken(identifier)
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token))
}
