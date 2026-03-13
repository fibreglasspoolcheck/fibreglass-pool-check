export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/red-flags-guide-access'],
    },
    sitemap: 'https://fibreglasspoolcheck.com.au/sitemap.xml',
  }
}
