export default function robots() {
    return {
          rules: {
                  userAgent: '*',
                  allow: '/',
                  disallow: ['/RedFlagsGuideAccess'],
          },
          sitemap: 'https://fibreglasspoolcheck.com.au/sitemap.xml',
    }
}
