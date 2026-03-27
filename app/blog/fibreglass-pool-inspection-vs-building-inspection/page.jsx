import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: 'Fibreglass Pool Inspection vs Building Inspection: What\'s the Difference? | Expert Guide',
  description: 'A fibreglass pool specialist explains what building inspectors miss on pools  -  osmosis, delamination, cobalt leaching, bad repairs  -  and when you need a specialist fibreglass pool inspection.',
  alternates: {
    canonical: '/blog/fibreglass-pool-inspection-vs-building-inspection',
  },
  openGraph: {
    title: 'Fibreglass Pool Inspection vs Building Inspection: What\'s the Difference?',
    description: 'What building inspectors miss on fibreglass pools and when you need a specialist assessment before buying.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-inspection-vs-building-inspection',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibreglass Pool Inspection vs Building Inspection: What's the Difference?",
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
    "datePublished": "2026-03-16",
    "description": "What building inspectors actually check on pools, what they miss, and when you need a specialist fibreglass pool inspection.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-inspection-vs-building-inspection"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FibreglassPoolInspectionVsBuildingInspection() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Pool Inspection vs Building Inspection', url: '/blog/fibreglass-pool-inspection-vs-building-inspection' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              Fibreglass pool inspection vs building inspection: what's the difference?
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-16">16 March 2026</time>
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
                  Every week I get enquiries from buyers who assumed their building inspection would cover the pool. It doesn't  -  at least not in any meaningful way. A standard building and pest inspection and a specialist fibreglass pool inspection are two completely different things, and confusing the two can cost you thousands.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  I've been assessing fibreglass pools for over 10 years. In that time, I've seen dozens of cases where a building inspector gave the pool a pass  -  and the buyer discovered major problems within months of settlement. Osmotic blistering, failed repairs, delamination, cobalt leaching. All things that were visible at the time of the inspection, if you knew what to look for.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  This article breaks down exactly what each type of inspection covers, what gets missed, and how to make the right call before you buy.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-orange-800 font-medium mb-1">Need a pool assessed before settlement?</p>
                  <p className="text-sm text-orange-700">
                    Get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>  -  a written specialist assessment of the pool's condition based on your photos. Delivered in 2–3 business days.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What a building inspector actually checks on a pool</h2>
                <p className="text-ink-light leading-relaxed">
                  A building and pest inspection is focused on the house  -  the structure, roof, electrical, plumbing, drainage, and timber pest activity. That's what the inspector is qualified to assess, and that's what you're paying them for.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  When it comes to the pool, most building inspectors will do a basic visual check. They'll note whether the pool exists, whether the pump appears to be running, and whether there's any obvious damage to the surrounds. Some will comment on cracked coping or a missing pool fence. A few will note the water colour or mention visible staining.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  That's about it. And to be fair, that's all they're required to do. Australian Standard AS 4349.1 (the standard that governs pre-purchase building inspections) doesn't require a detailed pool assessment. Most inspection reports include a clause saying the pool is outside the scope of the inspection.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A typical building inspection costs $300 to $600 depending on the property size and location. That's good value for a whole-of-house assessment  -  but it doesn't give you any real information about the fibreglass pool.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What a specialist fibreglass pool inspection covers</h2>
                <p className="text-ink-light leading-relaxed">
                  A fibreglass pool inspection is a focused assessment of the pool shell, surface, fittings, equipment, and surrounds  -  done by someone who works with fibreglass pools every day.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Here's what I assess in a Pool Check Report:
                </p>
                <ul className="list-disc pl-6 text-ink-light leading-relaxed mt-3 space-y-2">
                  <li><strong>Gelcoat condition</strong>  -  blistering, flaking, chalking, crazing, colour change, chemical damage</li>
                  <li><strong>Osmotic blistering</strong>  -  location, severity, whether it's surface-level or structural</li>
                  <li><strong>Delamination</strong>  -  areas where the gelcoat is separating from the laminate beneath</li>
                  <li><strong>Cobalt leaching</strong>  -  dark staining caused by cobalt in the resin breaking down (common on older pools)</li>
                  <li><strong>Previous repairs</strong>  -  quality of any patching, resurfacing, or gelcoat repairs that have been done</li>
                  <li><strong>Fittings and penetrations</strong>  -  skimmer box, returns, lights, suction points  -  checking for cracks, movement, and seal failure</li>
                  <li><strong>Shell integrity</strong>  -  flex, bulging, floor lift, coping separation, structural movement</li>
                  <li><strong>Equipment condition</strong>  -  pump, filter, chlorinator age and state</li>
                  <li><strong>Risk assessment</strong>  -  what needs attention now, what can wait, and what the likely costs are</li>
                </ul>
                <p className="text-ink-light leading-relaxed mt-3">
                  The output is a written report with clear findings and practical recommendations  -  not a generic checklist.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What building inspectors commonly miss</h2>
                <p className="text-ink-light leading-relaxed">
                  These are the issues I see regularly that were either missed or misidentified by the building inspector:
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Osmotic blistering</h3>
                <p className="text-ink-light leading-relaxed">
                  Osmosis is the single most common structural issue on fibreglass pools over 10 years old. It starts as small blisters below the waterline and progresses to widespread surface failure if left untreated. A building inspector might note "some blistering" without understanding the severity  -  or miss it entirely if the water is murky. A specialist can tell the difference between a few cosmetic blisters and early-stage osmosis that will need a full resurface ($8,000–$15,000+).
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Delamination</h3>
                <p className="text-ink-light leading-relaxed">
                  Delamination is where the gelcoat separates from the structural laminate underneath. It's often subtle  -  you might see a slight change in surface texture, a hollow sound when tapped, or fine cracking that doesn't look like much. But delamination means the protective layer is failing, and water ingress into the laminate will follow. Building inspectors don't tap pool surfaces. They don't know what delamination looks like.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Cobalt leaching</h3>
                <p className="text-ink-light leading-relaxed">
                  Cobalt leaching appears as dark blue, purple, or black staining  -  usually in streaks or blotches on the pool surface. It happens when the cobalt catalyst used in the resin during manufacturing breaks down over time. It's cosmetic rather than structural, but it looks terrible and is often mistaken for algae staining or chemical damage by non-specialists. It can also indicate the pool is ageing in ways that need monitoring.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Poor previous repairs</h3>
                <p className="text-ink-light leading-relaxed">
                  This is a big one. Plenty of pools have been patched or "resurfaced" by someone who didn't know what they were doing. I've seen automotive bog used on pool shells, house paint applied over gelcoat, patches that are already lifting after 12 months, and "resurfacing" done without proper preparation that's peeling off in sheets.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A building inspector sees a repaired pool and assumes the problem has been fixed. A fibreglass specialist sees the same pool and can tell you whether the repair was done properly, how long it's likely to last, and what it'll cost when it fails.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Real examples of what gets missed</h2>
                <p className="text-ink-light leading-relaxed">
                  A buyer in Southeast Queensland contacted me after settlement. Their building inspection report said the pool was "in fair condition with minor surface wear." When I assessed it, I found osmotic blistering across 60% of the pool floor, delamination around both return fittings, and a previous patch repair on the deep end wall that was already debonding. Estimated repair cost: $12,000–$16,000. The building inspector didn't flag any of it.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Another buyer sent me photos before settlement. The building inspector had noted "pool appears functional." I identified cobalt leaching across the bench seat, early blistering on the waterline, and a skimmer box with visible cracking. The buyer used the findings to negotiate $8,000 off the purchase price  -  more than enough to cover future repairs on their own terms.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  One more: a pool that had been "resurfaced" two years prior. The building inspector noted it as a positive  -  recently resurfaced pool. I could see from photos that the coating was already micro-cracking and lifting at the edges, which meant it had been applied over a poorly prepared surface. That resurface would need to be stripped and redone within a couple of years. Cost: $10,000+.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">When you need a specialist assessment vs when building inspection is enough</h2>
                <p className="text-ink-light leading-relaxed">
                  A building inspection is always necessary  -  it covers the house. That's not optional. The question is whether you also need a specialist pool assessment on top of it.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Here's my general rule:
                </p>
                <ul className="list-disc pl-6 text-ink-light leading-relaxed mt-3 space-y-2">
                  <li><strong>Pool is less than 5 years old, no visible issues</strong>  -  the building inspection is probably sufficient. New pools with manufacturer warranties are low risk.</li>
                  <li><strong>Pool is 5–10 years old</strong>  -  worth getting a specialist assessment, especially if you can see any staining, discolouration, or blistering. This is when early-stage issues start appearing.</li>
                  <li><strong>Pool is 10+ years old</strong>  -  I'd always recommend a specialist assessment. Pools in this age range are where the costly surprises live. Osmosis, delamination, equipment failure, and failed repairs are all common.</li>
                  <li><strong>Pool has been resurfaced</strong>  -  get a specialist to look at it. A resurface done well will last 10–15 years. A resurface done poorly can fail within 2–3 years. You can't tell the difference without experience.</li>
                  <li><strong>Water is cloudy or green</strong>  -  you can't assess what you can't see. A specialist assessment from clear photos is essential. Don't rely on the building inspector's "pool appears to be in working order" when neither of you could see the surface.</li>
                </ul>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Cost comparison: building inspection vs specialist pool assessment</h2>
                <p className="text-ink-light leading-relaxed">
                  Here's how the costs compare:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm text-ink-light border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left p-3 font-semibold text-ink border-b border-slate-200"></th>
                        <th className="text-left p-3 font-semibold text-ink border-b border-slate-200">Building inspection</th>
                        <th className="text-left p-3 font-semibold text-ink border-b border-slate-200">Pool Check Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Cost</td>
                        <td className="p-3 border-b border-slate-100">$300–$600</td>
                        <td className="p-3 border-b border-slate-100">$149</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Covers the house</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                        <td className="p-3 border-b border-slate-100">No</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Detailed pool assessment</td>
                        <td className="p-3 border-b border-slate-100">No</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Identifies osmosis</td>
                        <td className="p-3 border-b border-slate-100">Unlikely</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Identifies delamination</td>
                        <td className="p-3 border-b border-slate-100">No</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Assesses previous repairs</td>
                        <td className="p-3 border-b border-slate-100">No</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-slate-100 font-medium">Repair cost estimates</td>
                        <td className="p-3 border-b border-slate-100">No</td>
                        <td className="p-3 border-b border-slate-100">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Assessed by pool specialist</td>
                        <td className="p-3">No</td>
                        <td className="p-3">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-ink-light leading-relaxed mt-4">
                  For $149 on top of your building inspection, you get proper coverage of the pool. Given that pool repairs can run $5,000 to $30,000+, it's cheap insurance.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Why this matters before you buy</h2>
                <p className="text-ink-light leading-relaxed">
                  Once you've exchanged contracts, your leverage disappears. Any pool problems become your problems  -  and your costs. Before settlement, you have options: renegotiate the price, request repairs, or walk away.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A fibreglass pool inspection gives you the information to make those decisions with confidence. You're not guessing. You're not relying on a building inspector who's already told you the pool is "outside scope." You've got a specialist assessment with specific findings and cost estimates.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  I've seen buyers use Pool Check Reports to negotiate $5,000 to $15,000 off purchase prices. I've also had reports come back saying the pool is in great condition  -  and the buyer goes ahead with peace of mind. Either way, you know what you're buying.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What to do next</h2>
                <p className="text-ink-light leading-relaxed">
                  If you're buying a property with a fibreglass pool, don't assume the building inspection has it covered. It doesn't.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Get a <Link href="/PoolCheckReport/order" className="text-accent hover:underline font-medium">Pool Check Report ($149)</Link>  -  send me photos of the pool and I'll give you a written specialist assessment covering surface condition, structural observations, equipment, red flags, and recommendations. Delivered within 2–3 business days, in time for your due diligence period.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you'd prefer to do a structured self-assessment first, the <Link href="/BuyerChecklist" className="text-accent hover:underline font-medium">Buyer Checklist</Link> walks you through every inspection point a specialist would check, in plain language.
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
