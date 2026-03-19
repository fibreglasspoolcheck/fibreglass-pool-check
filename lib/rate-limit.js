/**
 * Simple in-memory rate limiter for API routes.
 * Sliding window - tracks requests per IP within a configurable window.
 */

const rateMaps = new Map()

// Clean up old entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  rateMaps.forEach((rateMap) => {
    rateMap.forEach((timestamps, key) => {
      const valid = timestamps.filter((t) => now - t < 300_000)
      if (valid.length === 0) {
        rateMap.delete(key)
      } else {
        rateMap.set(key, valid)
      }
    })
  })
}, 300_000)

/**
 * Create a rate limiter instance.
 * @param {Object} options
 * @param {number} options.interval - Time window in milliseconds
 * @param {number} options.limit - Max requests allowed per window
 * @param {number} [options.uniqueTokenPerInterval] - Unused, kept for API compatibility
 * @returns {{ check: (token: string) => Promise<{ success: boolean, remaining: number }> }}
 */
export function rateLimit({ interval, limit }) {
  const rateMap = new Map()
  rateMaps.set(rateMap, rateMap)

  return {
    async check(token) {
      const now = Date.now()
      const timestamps = rateMap.get(token) ?? []
      const valid = timestamps.filter((t) => now - t < interval)

      if (valid.length >= limit) {
        return { success: false, remaining: 0 }
      }

      valid.push(now)
      rateMap.set(token, valid)
      return { success: true, remaining: limit - valid.length }
    },
  }
}
