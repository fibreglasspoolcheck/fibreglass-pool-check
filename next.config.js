/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects moved to middleware.js for case-sensitive matching
  // (next.config redirects are case-insensitive, causing infinite loops)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'media.base44.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
