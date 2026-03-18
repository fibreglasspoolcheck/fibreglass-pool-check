/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/FAQ',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/Contact',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/About',
        permanent: true,
      },
      {
        source: '/poolcheckreport',
        destination: '/PoolCheckReport',
        permanent: true,
      },
      {
        source: '/quotereview',
        destination: '/QuoteReview',
        permanent: true,
      },
      {
        source: '/buyerchecklist',
        destination: '/BuyerChecklist',
        permanent: true,
      },
      {
        source: '/redflagsguide',
        destination: '/RedFlagsGuide',
        permanent: true,
      },
      {
        source: '/onsiteassessment',
        destination: '/OnSiteAssessment',
        permanent: true,
      },
      {
        source: '/buyingahouse',
        destination: '/BuyingAHouse',
        permanent: true,
      },
      {
        source: '/poolowner',
        destination: '/PoolOwner',
        permanent: true,
      },
      {
        source: '/serviceboundaries',
        destination: '/ServiceBoundaries',
        permanent: true,
      },
    ]
  },
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
