import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'

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

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Articles</span>
            <h1 className="font-serif text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Fibreglass pool guides and articles
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              Expert articles on fibreglass pool problems, repair costs, and what to look for when buying a property with a pool.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white border border-border-warm rounded-xl p-6 hover:border-warm-grey transition-colors group"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-3">
                  {article.readTime}
                </div>
                <h2 className="font-serif text-lg text-ink mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-warm-grey text-sm leading-relaxed mb-3">
                  {article.description}
                </p>
                <time className="text-warm-grey text-xs" dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
