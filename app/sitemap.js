export default function sitemap() {
    const baseUrl = 'https://fibreglasspoolcheck.com.au'

  return [
    {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
    },
    {
            url: `${baseUrl}/PoolCheckReport`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
    },
    {
            url: `${baseUrl}/QuoteReview`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
    },
    {
            url: `${baseUrl}/BuyerChecklist`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/RedFlagsGuide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/OnSiteAssessment`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/BuyingAHouse`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/PoolOwner`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/ServiceBoundaries`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/About`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/FAQ`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/Contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
    },
    {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/blog/buying-house-with-fibreglass-pool`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/blog/fibreglass-pool-osmotic-blistering`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
    },
      ]
}
