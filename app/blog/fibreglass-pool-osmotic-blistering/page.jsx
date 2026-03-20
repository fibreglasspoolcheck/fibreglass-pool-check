import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

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

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link href="/blog" className="text-slate-400 text-sm hover:text-slate-600 mb-4 inline-block">&larr; All articles</Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Fibreglass pool osmotic blistering: causes, cost, and what to do
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>By Brady Smith</span>
            <span>&middot;</span>
            <time dateTime="2026-03-14">14 March 2026</time>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            Osmotic blistering is the most common serious problem I see on fibreglass pools. It looks minor  -  small raised bumps on the pool surface  -  but it's a sign that water is penetrating the gelcoat and getting into the structural laminate underneath. Left unchecked, it leads to delamination, and that's when repair costs escalate.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            This article explains what osmotic blistering actually is, why it happens, what it costs to fix, and how to tell whether your pool needs urgent action or can be monitored.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
            <p className="text-sm text-orange-800 font-medium mb-1">Got blisters on your pool?</p>
            <p className="text-sm text-orange-700">
              Send me photos and I'll assess the severity in a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What osmotic blistering looks like</h2>
          <p className="text-slate-600 leading-relaxed">
            Osmotic blisters appear as small, raised bumps on the pool surface  -  usually below the waterline. They can be as small as a few millimetres or as large as a 50-cent coin. In early stages, you might only notice them when the light hits the wall at a certain angle. In advanced cases, the surface looks visibly bumpy and uneven.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            If you press a blister and it feels soft or spongy, that's a sign it's filled with fluid  -  a mix of water and dissolved chemicals from the laminate. If you break a blister open (which I don't recommend doing without professional assessment), you'll often find a dark, vinegar-smelling liquid inside. That liquid is acidic and is actively breaking down the fibreglass beneath the surface.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What causes osmotic blistering</h2>
          <p className="text-slate-600 leading-relaxed">
            Osmosis is a natural process where water moves through a semi-permeable membrane (in this case, the gelcoat) toward a higher concentration of dissolved substances (the chemicals in the fibreglass resin).
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            In plain terms: pool water slowly seeps through microscopic pores or imperfections in the gelcoat and reaches the resin and fibreglass layers beneath. Once inside, it reacts with the resin and creates small pockets of pressurised fluid. Those pockets push the gelcoat outward, forming blisters.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            Several factors influence how quickly this happens: the quality of the original gelcoat application, the resin type used in manufacturing, water chemistry (especially pH imbalance), water temperature, and the age of the pool. Some pools develop blisters within 5 years. Others go 20+ years without a single one. It depends heavily on the quality of the original manufacturing process.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Is it always serious?</h2>
          <p className="text-slate-600 leading-relaxed">
            Not always  -  but it always needs attention.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            A small number of scattered blisters on an older pool (15+ years) might be cosmetic-level. They can sometimes be individually repaired without a full resurface, especially if the underlying laminate is still solid.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            Widespread blistering  -  dozens of blisters across large areas of the pool  -  is a different story. That indicates the osmotic process is well underway and the gelcoat barrier has failed across a significant area. At that point, individual blister repair is a waste of money. The pool needs a full resurface: stripping the old gelcoat, treating the laminate, and applying a new surface system.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            The biggest risk with osmotic blistering isn't the blisters themselves  -  it's delamination. If water penetrates deep enough into the laminate, the fibreglass layers start to separate from each other. Delamination weakens the structural integrity of the pool shell and is significantly more expensive to repair than surface blistering alone.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What does it cost to fix?</h2>
          <p className="text-slate-600 leading-relaxed">
            Repair costs depend on the severity and the size of the pool. Here are typical ranges I see in Australia:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Individual blister repair</p>
                  <p className="text-slate-500 text-xs mt-0.5">Grinding, filling, and spot-coating individual blisters</p>
                </div>
                <p className="font-bold text-slate-900 text-sm whitespace-nowrap ml-4">$500 – $2,000</p>
              </div>
              <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Full pool resurface (gelcoat)</p>
                  <p className="text-slate-500 text-xs mt-0.5">Strip, prep, and recoat the entire pool surface</p>
                </div>
                <p className="font-bold text-slate-900 text-sm whitespace-nowrap ml-4">$8,000 – $15,000+</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Full resurface with delamination repair</p>
                  <p className="text-slate-500 text-xs mt-0.5">Laminate repair, structural work, then resurface</p>
                </div>
                <p className="font-bold text-slate-900 text-sm whitespace-nowrap ml-4">$15,000 – $30,000+</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            These are indicative ranges based on pools I've assessed and resurfaced. Actual costs vary by pool size, location, the coating system used, and the contractor. Which is exactly why I recommend getting quotes reviewed before you commit  -  the difference between contractors can be thousands of dollars for the same pool.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to tell if you need a full resurface</h2>
          <p className="text-slate-600 leading-relaxed">
            This is the question I get asked most often. Here are the indicators I use when assessing a pool:
          </p>
          <div className="space-y-3 mt-4">
            {[
              { label: 'Monitor and review in 6–12 months', desc: 'Fewer than 5 blisters, localised to one area, pool is otherwise in good condition, no signs of delamination.' },
              { label: 'Get a professional assessment', desc: 'Multiple blisters across different areas, some larger than 10mm, surface starting to feel rough or uneven in patches.' },
              { label: 'Resurface is likely needed', desc: 'Widespread blistering across walls and/or floor, blisters weeping fluid, surface feels soft or spongy in areas, visible delamination starting.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-slate-50 rounded-lg p-4">
                <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.label}</p>
                  <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            If you're unsure which category your pool falls into, that's exactly what the <Link href="/PoolCheckReport/order" className="text-orange-600 hover:underline font-medium">Pool Check Report</Link> is for. Send me photos and I'll give you a straight answer.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to do if you're buying a property with a blistered pool</h2>
          <p className="text-slate-600 leading-relaxed">
            If you notice blistering during a property inspection, don't panic  -  but don't ignore it either. Get an independent assessment of the severity and likely repair cost. That information gives you three options: renegotiate the purchase price to account for the repair cost, request the vendor fix it before settlement, or walk away if the numbers don't work.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            A $149 pool assessment that identifies a $15,000 problem is one of the best returns on investment you'll ever get in property.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Can you prevent osmotic blistering?</h2>
          <p className="text-slate-600 leading-relaxed">
            You can reduce the risk, but you can't eliminate it entirely  -  because the primary factor is how the pool was manufactured, which you can't change after the fact.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            What you can control is water chemistry. Keeping pH balanced (7.2–7.6), avoiding prolonged low pH conditions, and maintaining proper sanitiser levels all help protect the gelcoat. High water temperatures accelerate osmosis, so pools in tropical climates tend to develop blisters sooner than pools in cooler regions.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            If your pool has been resurfaced with a modern epoxy or vinyl ester barrier coat system, the risk of future osmotic blistering is significantly reduced. The barrier coat acts as a much more effective water barrier than the original gelcoat.
          </p>

        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Not sure how serious your pool blistering is?</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            Send me photos and I'll give you a straight assessment  -  what I'm seeing, how serious it is, and what I'd recommend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/PoolCheckReport/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Pool Check Report  -  $149
            </Link>
          </div>
          <p className="text-slate-400 text-xs mt-3 italic">
            If my report doesn't give you clear, actionable findings, get in touch and I'll make it right.
          </p>
        </div>

        {/* Author */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex gap-4 items-start">
          <div>
            <p className="font-semibold text-slate-900 text-sm">Brady Smith</p>
            <p className="text-slate-500 text-xs mt-1">
              Fibreglass pool specialist with 10+ years hands-on experience resurfacing, repairing, and assessing fibreglass pools across Queensland. Independent assessments  -  Brady's wife runs BRE Fibreglass, but all assessments are conducted independently.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
