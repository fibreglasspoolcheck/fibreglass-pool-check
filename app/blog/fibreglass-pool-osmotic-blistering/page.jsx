import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: 'Fibreglass Pool Osmotic Blistering: Causes, Cost & What to Do',
  description: 'What osmotic blistering looks like on a fibreglass pool, why it happens, what it costs to repair (typically $8,000–$15,000+), and how to tell if you need a full resurface.',
  alternates: {
    canonical: '/blog/fibreglass-pool-osmotic-blistering',
  },
  openGraph: {
    title: 'Fibreglass Pool Osmotic Blistering: Causes, Cost & What to Do',
    description: 'What osmotic blistering looks like, why it happens, and what it costs to fix.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-osmotic-blistering',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibreglass Pool Osmotic Blistering: Causes, Cost & What to Do",
    "author": {
      "@type": "Person",
      "name": "Brady Smith",
      "jobTitle": "Fibreglass Pool Specialist",
      "url": "https://fibreglasspoolcheck.com.au/About"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "datePublished": "2026-03-14",
    "description": "What osmotic blistering looks like on a fibreglass pool, why it happens, and what it costs to repair.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-osmotic-blistering"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FibreglassPoolOsmoticBlistering() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Osmotic Blistering', url: '/blog/fibreglass-pool-osmotic-blistering' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              Fibreglass pool osmotic blistering: causes, cost, and what to do
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-14">14 March 2026</time>
              <span>&middot;</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg text-ink-light leading-relaxed">
                  Osmotic blistering is the most common serious problem I see on fibreglass pools. It looks minor  -  small raised bumps on the pool surface  -  but it's a sign that water is penetrating the gelcoat and getting into the structural laminate underneath. Left unchecked, it leads to delamination, and that's when repair costs escalate.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  This article explains what osmotic blistering actually is, why it happens, what it costs to fix, and how to tell whether your pool needs urgent action or can be monitored.
                </p>

                <div className="bg-warm-white border border-border-warm rounded-xl p-6 my-8">
                  <p className="text-sm text-ink font-medium mb-1">Got blisters on your pool?</p>
                  <p className="text-sm text-ink-light">
                    Send me photos and I'll assess the severity in a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What osmotic blistering looks like</h2>
                <p className="text-ink-light leading-relaxed">
                  Osmotic blisters appear as small, raised bumps on the pool surface  -  usually below the waterline. They can be as small as a few millimetres or as large as a 50-cent coin. In early stages, you might only notice them when the light hits the wall at a certain angle. In advanced cases, the surface looks visibly bumpy and uneven.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you press a blister and it feels soft or spongy, that's a sign it's filled with fluid  -  a mix of water and dissolved chemicals from the laminate. If you break a blister open (which I don't recommend doing without professional assessment), you'll often find a dark, vinegar-smelling liquid inside. That liquid is acidic and is actively breaking down the fibreglass beneath the surface.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What causes osmotic blistering</h2>
                <p className="text-ink-light leading-relaxed">
                  Osmosis is a natural process where water moves through a semi-permeable membrane (in this case, the gelcoat) toward a higher concentration of dissolved substances (the chemicals in the fibreglass resin).
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  In plain terms: pool water slowly seeps through microscopic pores or imperfections in the gelcoat and reaches the resin and fibreglass layers beneath. Once inside, it reacts with the resin and creates small pockets of pressurised fluid. Those pockets push the gelcoat outward, forming blisters.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Several factors influence how quickly this happens: the quality of the original gelcoat application, the resin type used in manufacturing, water chemistry (especially pH imbalance), water temperature, and the age of the pool. Some pools develop blisters within 5 years. Others go 20+ years without a single one. It depends heavily on the quality of the original manufacturing process.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Is it always serious?</h2>
                <p className="text-ink-light leading-relaxed">
                  Not always  -  but it always needs attention.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A small number of scattered blisters on an older pool (15+ years) might be cosmetic-level. They can sometimes be individually repaired without a full resurface, especially if the underlying laminate is still solid.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Widespread blistering  -  dozens of blisters across large areas of the pool  -  is a different story. That indicates the osmotic process is well underway and the gelcoat barrier has failed across a significant area. At that point, individual blister repair is a waste of money. The pool needs a full resurface: stripping the old gelcoat, treating the laminate, and applying a new surface system.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The biggest risk with osmotic blistering isn't the blisters themselves  -  it's delamination. If water penetrates deep enough into the laminate, the fibreglass layers start to separate from each other. Delamination weakens the structural integrity of the pool shell and is significantly more expensive to repair than surface blistering alone.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What does it cost to fix?</h2>
                <p className="text-ink-light leading-relaxed">
                  Repair costs depend on the severity and the size of the pool. Here are typical ranges I see in Australia:
                </p>
                <div className="bg-warm-white border border-border-warm rounded-xl p-6 my-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b border-border-warm pb-3">
                      <div>
                        <p className="font-semibold text-ink text-sm">Individual blister repair</p>
                        <p className="text-ink-light text-xs mt-0.5">Grinding, filling, and spot-coating individual blisters</p>
                      </div>
                      <p className="font-bold text-ink text-sm whitespace-nowrap ml-4">$500 – $2,000</p>
                    </div>
                    <div className="flex justify-between items-start border-b border-border-warm pb-3">
                      <div>
                        <p className="font-semibold text-ink text-sm">Full pool resurface (gelcoat)</p>
                        <p className="text-ink-light text-xs mt-0.5">Strip, prep, and recoat the entire pool surface</p>
                      </div>
                      <p className="font-bold text-ink text-sm whitespace-nowrap ml-4">$8,000 – $15,000+</p>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-ink text-sm">Full resurface with delamination repair</p>
                        <p className="text-ink-light text-xs mt-0.5">Laminate repair, structural work, then resurface</p>
                      </div>
                      <p className="font-bold text-ink text-sm whitespace-nowrap ml-4">$15,000 – $30,000+</p>
                    </div>
                  </div>
                </div>
                <p className="text-ink-light leading-relaxed">
                  These are indicative ranges based on pools I've assessed and resurfaced. Actual costs vary by pool size, location, the coating system used, and the contractor. Which is exactly why I recommend getting quotes reviewed before you commit  -  the difference between contractors can be thousands of dollars for the same pool.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">How to tell if you need a full resurface</h2>
                <p className="text-ink-light leading-relaxed">
                  This is the question I get asked most often. Here are the indicators I use when assessing a pool:
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    { label: 'Monitor and review in 6–12 months', desc: 'Fewer than 5 blisters, localised to one area, pool is otherwise in good condition, no signs of delamination.' },
                    { label: 'Get a professional assessment', desc: 'Multiple blisters across different areas, some larger than 10mm, surface starting to feel rough or uneven in patches.' },
                    { label: 'Resurface is likely needed', desc: 'Widespread blistering across walls and/or floor, blisters weeping fluid, surface feels soft or spongy in areas, visible delamination starting.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 bg-warm-white rounded-lg p-4">
                      <div className="w-6 h-6 bg-deep text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-ink text-sm">{item.label}</p>
                        <p className="text-ink-light text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-ink-light leading-relaxed mt-4">
                  If you're unsure which category your pool falls into, that's exactly what the <Link href="/PoolCheckReport/order" className="text-accent hover:underline font-medium">Pool Check Report</Link> is for. Send me photos and I'll give you a straight answer.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What to do if you're buying a property with a blistered pool</h2>
                <p className="text-ink-light leading-relaxed">
                  If you notice blistering during a property inspection, don't panic  -  but don't ignore it either. Get an independent assessment of the severity and likely repair cost. That information gives you three options: renegotiate the purchase price to account for the repair cost, request the vendor fix it before settlement, or walk away if the numbers don't work.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A $149 pool assessment that identifies a $15,000 problem is one of the best returns on investment you'll ever get in property.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Can you prevent osmotic blistering?</h2>
                <p className="text-ink-light leading-relaxed">
                  You can reduce the risk, but you can't eliminate it entirely  -  because the primary factor is how the pool was manufactured, which you can't change after the fact.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  What you can control is water chemistry. Keeping pH balanced (7.2–7.6), avoiding prolonged low pH conditions, and maintaining proper sanitiser levels all help protect the gelcoat. High water temperatures accelerate osmosis, so pools in tropical climates tend to develop blisters sooner than pools in cooler regions.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If your pool has been resurfaced with a modern epoxy or vinyl ester barrier coat system, the risk of future osmotic blistering is significantly reduced. The barrier coat acts as a much more effective water barrier than the original gelcoat.
                </p>
              </div>
            </div>
            <ContentSidebar />
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
