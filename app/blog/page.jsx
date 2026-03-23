import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool Articles & Guides | Fibreglass Pool Check',
  description: 'Expert articles on fibreglass pool problems, repair costs, and what to look for when buying a property with a pool. Written by a specialist with 10+ years hands-on experience.',
  alternates: {
    canonical: '/blog',
  },
}

const articles = [
  {
    slug: 'buying-house-with-fibreglass-pool',
    title: 'What to look for when buying a house with a fibreglass pool',
    description: 'A practical guide to assessing a fibreglass pool before you exchange contracts  -  what building inspectors miss and what can cost you thousands.',
    date: '2026-03-14',
    readTime: '8 min read',
  },
  {
    slug: 'fibreglass-pool-osmotic-blistering',
    title: 'Fibreglass pool osmotic blistering: causes, cost, and what to do',
    description: 'What osmotic blistering looks like, why it happens, what it costs to fix, and how to tell if your pool needs urgent attention or just monitoring.',
    date: '2026-03-14',
    readTime: '7 min read',
  },
  {
    slug: 'fibreglass-pool-resurfacing-cost-australia',
    title: 'How much does fibreglass pool resurfacing cost in Australia?',
    description: 'A realistic breakdown of resurfacing costs from patch repairs to full resurfaces  -  what affects the price, what to ask your contractor, and how to spot overquoting.',
    date: '2026-03-16',
    readTime: '9 min read',
  },
  {
    slug: 'fibreglass-pool-inspection-vs-building-inspection',
    title: 'Fibreglass pool inspection vs building inspection: what\'s the difference?',
    description: 'What building inspectors actually check on pools (and what they miss). When you need a specialist assessment and why it matters before buying.',
    date: '2026-03-16',
    readTime: '7 min read',
  },
  {
    slug: 'fibreglass-pool-delamination',
    title: 'Fibreglass pool delamination: what it is, what it costs, and what to do',
    description: 'What delamination looks like, what causes it, how serious it is, and your repair options  -  from a specialist who\'s seen hundreds of pools.',
    date: '2026-03-16',
    readTime: '8 min read',
  },
  {
    slug: 'how-long-does-fibreglass-pool-last',
    title: 'How long does a fibreglass pool last? (Honest answer from a specialist)',
    description: 'Realistic pool lifespans, what affects longevity, signs of ageing, and when you should actually worry  -  from a specialist with 10+ years experience.',
    date: '2026-03-23',
    readTime: '8 min read',
  },
  {
    slug: 'fibreglass-pool-cracks-hairline-vs-structural',
    title: 'Fibreglass pool cracks: hairline vs  structural  -  when to worry',
    description: 'The difference between hairline and structural cracks in fibreglass pools, what each looks like, when to DIY vs call a professional, and realistic repair costs.',
    date: '2026-03-23',
    readTime: '9 min read',
  },
  {
    slug: 'real-cost-owning-pool-australia',
    title: 'The real cost of owning a pool in Australia (annual breakdown)',
    description: 'An honest annual cost breakdown for owning a pool in Australia  -  chemicals, electricity, insurance, repairs, and the hidden costs nobody warns you about.',
    date: '2026-03-23',
    readTime: '9 min read',
  },
  {
    slug: 'things-building-inspectors-miss-about-pools',
    title: '10 things building inspectors miss about pools',
    description: 'The 10 most common pool problems that building inspectors miss during pre-purchase inspections  -  and what each one can cost you.',
    date: '2026-03-23',
    readTime: '9 min read',
  },
  {
    slug: 'fibreglass-pool-fading-discolouration',
    title: 'Fibreglass pool fading and discolouration: causes and fixes',
    description: 'Why fibreglass pools fade and discolour, the difference between UV damage, chemical damage, and osmosis staining, and what can actually be fixed vs what needs resurfacing.',
    date: '2026-03-23',
    readTime: '8 min read',
  },
]

export default function BlogIndex() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' }
      ]} />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fibreglass Pool Articles & Guides</h1>
          <p className="text-slate-300 text-lg">
            Practical advice on fibreglass pool problems, repair costs, and buying decisions  -  from a specialist with 10+ years hands-on experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                  <span>&middot;</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{article.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{article.description}</p>
                <span className="inline-block mt-3 text-orange-600 text-sm font-medium">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need expert eyes on a specific pool?</h2>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            These articles give you general guidance. For a specific pool, get a written assessment from an independent specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/PoolCheckReport/order" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get a Pool Check Report  -  $149
            </Link>
            <Link href="/RedFlagsGuide" className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Free Red Flags Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
