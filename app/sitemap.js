export default function sitemap() {
    const baseUrl = 'https://fibreglasspoolcheck.com.au'

  return [
    {
            url: baseUrl,
            lastModified: '2026-03-19',
            changeFrequency: 'weekly',
            priority: 1,
    },
    {
            url: `${baseUrl}/PoolCheckReport`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.9,
    },
    {
            url: `${baseUrl}/BuyerChecklist`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/RedFlagsGuide`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/OnSiteAssessment`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/BuyingAHouse`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/PoolOwner`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/ServiceBoundaries`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/About`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/faq`,
            lastModified: '2026-03-19',
            changeFrequency: 'monthly',
            priority: 0.6,
    },
    {
            url: `${baseUrl}/Contact`,
            lastModified: '2026-03-19',
            changeFrequency: 'yearly',
            priority: 0.5,
    },
    {
            url: `${baseUrl}/blog`,
            lastModified: '2026-03-16',
            changeFrequency: 'weekly',
            priority: 0.7,
    },
    {
            url: `${baseUrl}/blog/buying-house-with-fibreglass-pool`,
            lastModified: '2026-03-14',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/blog/fibreglass-pool-osmotic-blistering`,
            lastModified: '2026-03-14',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/blog/fibreglass-pool-resurfacing-cost-australia`,
            lastModified: '2026-03-16',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/blog/fibreglass-pool-inspection-vs-building-inspection`,
            lastModified: '2026-03-16',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
    {
            url: `${baseUrl}/blog/fibreglass-pool-delamination`,
            lastModified: '2026-03-16',
            changeFrequency: 'monthly',
            priority: 0.8,
    },
      ]
}
