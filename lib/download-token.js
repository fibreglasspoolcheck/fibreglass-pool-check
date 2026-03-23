import crypto from 'crypto'

function getSecret() {
  const secret = process.env.DOWNLOAD_TOKEN_SECRET
  if (!secret) throw new Error('DOWNLOAD_TOKEN_SECRET environment variable is required')
  return secret
}

// Generate HMAC token for a download
export function generateDownloadToken(identifier) {
  return crypto.createHmac('sha256', getSecret()).update(identifier).digest('hex')
}

// Verify HMAC token (supports both old 32-char and new 64-char tokens)
export function verifyDownloadToken(identifier, token) {
  const fullExpected = crypto.createHmac('sha256', getSecret()).update(identifier).digest('hex')

  // Handle old 32-char truncated tokens
  const expected = token.length === 32 ? fullExpected.slice(0, 32) : fullExpected

  if (expected.length !== token.length) return false
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token))
}
