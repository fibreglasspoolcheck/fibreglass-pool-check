import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool Cracks: Hairline vs Structural  -  When to Worry | Expert Guide',
  description: 'A fibreglass pool specialist explains the difference between hairline cracks and structural cracks, what each looks like, when to DIY vs call a professional, and realistic repair costs.',
  alternates: {
    canonical: '/blog/fibreglass-pool-cracks-hairline-vs-structural',
  },
  openGraph: {
    title: 'Fibreglass Pool Cracks: Hairline vs Structural  -  When to Worry',
    description: 'The difference between hairline and structural cracks in fibreglass pools, and what each means for your wallet.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-cracks-hairline-vs-structural',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibreglass Pool Cracks: Hairline vs Structural  -  When to Worry",
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
    "datePublished": "2026-03-23",
    "description": "The difference between hairline and structural cracks in fibreglass pools, what each looks like, and when you need professional help.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-cracks-hairline-vs-structural"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FibreglassPoolCracksHairlineVsStructural() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Fibreglass Pool Cracks: Hairline vs Structural', url: '/blog/fibreglass-pool-cracks-hairline-vs-structural' }
      ]} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <Link href="/blog" className="text-slate-400 text-sm hover:text-slate-600 mb-4 inline-block">&larr; All articles</Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Fibreglass pool cracks: hairline vs structural  -  when to worry
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span>By Brady Smith</span>
            <span>&middot;</span>
            <time dateTime="2026-03-23">23 March 2026</time>
            <span>&middot;</span>
            <span>9 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">
            Finding a crack in your fibreglass pool is one of those moments where your stomach drops. The good news is that most cracks in fibreglass pools are cosmetic and relatively inexpensive to fix. The bad news is that some aren't  -  and telling the difference isn't always obvious.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            I've assessed hundreds of fibreglass pools with cracks of every kind  -  from surface crazing that's purely cosmetic to structural fractures that needed major repair work. This article explains what each type looks like, what causes it, and what it's likely to cost you.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
            <p className="text-sm text-orange-800 font-medium mb-1">Got a crack you're not sure about?</p>
            <p className="text-sm text-orange-700">
              Get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>  -  send me photos and I'll tell you exactly what you're dealing with and what it'll cost to fix.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The three types of cracks in fibreglass pools</h2>
          <p className="text-slate-600 leading-relaxed">
            Before we get into specifics, here's the quick overview. Fibreglass pool cracks fall into three categories:
          </p>
          <ol className="list-decimal list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Surface crazing</strong>  -  fine hairline cracks in the gelcoat only. Cosmetic.</li>
            <li><strong>Gelcoat cracks</strong>  -  deeper cracks through the gelcoat layer but not into the structural laminate. Moderate concern.</li>
            <li><strong>Structural cracks</strong>  -  cracks that go through the gelcoat and into (or through) the fibreglass laminate. Serious.</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mt-3">
            The repair approach, cost, and urgency are completely different for each type. Let me walk through them.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Surface crazing (hairline cracks)</h2>
          <p className="text-slate-600 leading-relaxed">
            Surface crazing is by far the most common type of crack I see in fibreglass pools. These are fine, shallow lines in the gelcoat surface  -  often described as looking like a spider web or cracked eggshell pattern.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Very fine lines, often barely visible unless you look closely</li>
            <li>Usually appear in clusters or web-like patterns</li>
            <li>You can see them but you can't feel a gap when you run your fingernail across them</li>
            <li>Most common at the waterline, around fittings, on steps, and in corners</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What causes it</h3>
          <p className="text-slate-600 leading-relaxed">
            Crazing happens when the gelcoat becomes brittle over time. The main culprits are:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>UV exposure:</strong> The gelcoat hardens and loses flexibility with prolonged sun exposure. This is especially common on the waterline area and any surface above water level.</li>
            <li><strong>Chemical damage:</strong> Consistently unbalanced water chemistry  -  particularly low pH or excessive chlorine  -  degrades the gelcoat over time.</li>
            <li><strong>Age:</strong> Even well-maintained pools will develop some crazing after 10 to 15 years. It's a natural part of the gelcoat's lifecycle.</li>
            <li><strong>Thermal cycling:</strong> Repeated heating and cooling causes the gelcoat to expand and contract. Over years, this can cause crazing, especially on pools that get full sun.</li>
            <li><strong>Flex points:</strong> Areas where the pool shell naturally flexes  -  steps, ledges, corners  -  are more prone to crazing because the rigid gelcoat moves with the flexible shell.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            On its own, surface crazing is cosmetic. It doesn't mean your pool is failing. However, crazing does create micro-pathways for water to reach the laminate beneath, which can eventually contribute to osmotic blistering if left for years. It's not urgent, but it's worth monitoring.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Repair options and costs</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Monitor only:</strong> If the crazing is minor and stable, you can leave it and keep an eye on it. Cost: $0.</li>
            <li><strong>Spot repair:</strong> Small areas can be sanded and re-gelcoated. Cost: $300 to $800 per area.</li>
            <li><strong>Full resurface:</strong> If crazing is widespread across the entire pool, it's often more economical to resurface the whole pool. Cost: $8,000 to $15,000.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Gelcoat cracks</h2>
          <p className="text-slate-600 leading-relaxed">
            Gelcoat cracks are deeper than surface crazing. These are visible lines or fractures that go through the full thickness of the gelcoat layer but haven't penetrated into the structural laminate beneath.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Wider than crazing  -  you can usually feel them with your fingernail</li>
            <li>Often appear as single lines rather than web patterns</li>
            <li>May show slight discolouration along the crack line (water staining)</li>
            <li>Common around fittings, at stress points, and where the pool shape changes</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What causes it</h3>
          <p className="text-slate-600 leading-relaxed">
            Gelcoat cracks typically result from:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Impact damage:</strong> Dropping heavy objects into the pool, aggressive cleaning equipment, or pool toys hitting the surface.</li>
            <li><strong>Shell movement:</strong> If the pool shifts slightly due to ground conditions or backfill issues, the rigid gelcoat cracks where the shell flexes.</li>
            <li><strong>Manufacturing defects:</strong> Gelcoat that was applied too thickly during manufacturing is more prone to cracking. This is more common in older pools or cheaper shells.</li>
            <li><strong>Fitting stress:</strong> The areas around skimmer boxes, return jets, and lights are common locations because the fittings create stress points in the shell.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            Gelcoat cracks are more of a concern than crazing because they provide a direct path for water to reach the laminate. If left unrepaired, they can lead to osmotic blistering, localised delamination, or further cracking. They should be repaired within the next few months  -  not an emergency, but don't leave them for years.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Repair options and costs</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Professional gelcoat repair:</strong> The crack is ground out, filled with matched gelcoat, and faired smooth. Cost: $500 to $1,500 per crack depending on length and location.</li>
            <li><strong>Multiple crack repair:</strong> If several cracks need attention, most specialists will quote a day rate or package price. Cost: $1,500 to $4,000.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-3">
            I'd generally recommend against DIY gelcoat repair unless you have composite experience. Gelcoat is tricky to work with  -  it needs the right catalyst ratio, temperature, and humidity to cure properly. A bad DIY repair often ends up costing more to fix than the original crack.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Structural cracks</h2>
          <p className="text-slate-600 leading-relaxed">
            Structural cracks are the ones you need to take seriously. These go through the gelcoat and into the fibreglass laminate itself  -  the structural layer that gives the pool its strength. In severe cases, they can go right through the shell.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What it looks like</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li>Wider, more pronounced than gelcoat cracks</li>
            <li>You can often see or feel a distinct gap</li>
            <li>May have a different colour visible in the crack  -  white fibreglass strands or a lighter colour beneath the gelcoat</li>
            <li>The surface on either side of the crack may be at slightly different levels (one side raised or depressed)</li>
            <li>May be accompanied by water loss, wet soil behind the pool wall, or visible flex in the shell</li>
            <li>Star-shaped cracks radiating from a single point usually indicate impact damage that has penetrated the laminate</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What causes it</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Ground movement:</strong> Expansive soils, poor drainage, or tree roots can shift the ground around the pool, putting pressure on the shell that exceeds its flex tolerance.</li>
            <li><strong>Backfill failure:</strong> Incorrect or poorly compacted backfill can settle unevenly, creating voids behind the wall that allow the shell to flex beyond its limits.</li>
            <li><strong>Hydrostatic pressure:</strong> A high water table can push upward on the pool floor, especially if the pool is drained for maintenance. This can crack the floor or pop the pool out of the ground entirely.</li>
            <li><strong>Severe impact:</strong> Heavy objects falling into the pool or machinery striking the shell during nearby construction work.</li>
            <li><strong>Manufacturing defects:</strong> Thin spots in the laminate, voids in the layup, or insufficient reinforcement around fittings and stress points.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">How serious is it?</h3>
          <p className="text-slate-600 leading-relaxed">
            Very. Structural cracks compromise the integrity of the pool shell. They can lead to water loss, further cracking, and in extreme cases, shell failure. If you suspect a structural crack, stop filling or topping up the pool and get it assessed by a fibreglass specialist  -  not a general pool shop, and not a building inspector.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Repair options and costs</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mt-3 space-y-2">
            <li><strong>Structural laminate repair:</strong> The damaged area is ground back, the laminate is rebuilt with new fibreglass matting and resin, and the surface is re-gelcoated. Cost: $2,000 to $6,000+ depending on the extent.</li>
            <li><strong>Structural repair with root cause fix:</strong> If the crack was caused by ground issues or backfill failure, those need to be addressed too  -  otherwise the crack will come back. This may involve partial excavation and re-backfilling. Cost: $5,000 to $15,000+.</li>
            <li><strong>Shell replacement:</strong> In rare cases where the structural damage is too extensive, the pool shell may need to be removed and replaced. Cost: $30,000 to $60,000+. This is uncommon but worth mentioning so you understand the extreme end.</li>
          </ul>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
            <p className="text-sm text-orange-800 font-medium mb-1">Buying a property with a cracked pool?</p>
            <p className="text-sm text-orange-700">
              Don't rely on the building inspector's assessment. Download the free <Link href="/RedFlagsGuide" className="underline font-medium">Red Flags Guide</Link> to know what to photograph, or get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link> for a specialist assessment before you exchange contracts.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to tell the difference: a practical test</h2>
          <p className="text-slate-600 leading-relaxed">
            Here's a simple method I use to help homeowners assess cracks before I see them in person:
          </p>
          <ol className="list-decimal list-inside text-slate-600 leading-relaxed mt-3 space-y-3">
            <li><strong>The fingernail test:</strong> Run your fingernail across the crack. If you can't feel it catch, it's likely surface crazing. If your nail catches in a groove, it's at least a gelcoat crack.</li>
            <li><strong>The tap test:</strong> Gently tap the area around the crack with a coin or your knuckle. A solid sound means the laminate behind is intact. A hollow or dull sound suggests delamination or a void  -  which may indicate structural damage.</li>
            <li><strong>The flex test:</strong> Gently push on the pool wall near the crack. A sound pool wall should feel solid. If it flexes noticeably, there's a backfill or structural concern.</li>
            <li><strong>Check for water loss:</strong> Mark the water level with tape and check it 24 hours later (account for evaporation  -  typically 3 to 5mm per day in summer). If you're losing more than that, a crack may be leaking.</li>
            <li><strong>Look at the crack pattern:</strong> Single straight lines often indicate stress. Star patterns suggest impact. Web patterns are usually surface crazing. Cracks that follow the curve of a fitting suggest fitting stress.</li>
          </ol>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">DIY repair vs professional: where's the line?</h2>
          <p className="text-slate-600 leading-relaxed">
            I'm all for homeowners tackling things they're capable of. But with fibreglass pool cracks, the line is pretty clear:
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            <strong>You can probably handle:</strong> Minor surface crazing that's purely cosmetic. There are gelcoat repair kits available from pool supply stores. If it's a small area and you're comfortable with the process, it's a reasonable DIY job. Just be aware that colour matching is difficult and the repair will likely be visible.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            <strong>Call a professional for:</strong> Anything deeper than surface crazing. Gelcoat cracks need proper grinding, filling, and finishing to prevent water ingress. Structural cracks absolutely require a specialist  -  not a pool shop, not a handyman, but someone who understands fibreglass composite repair.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            The risk with DIY on anything beyond surface crazing is that a bad repair traps moisture, which accelerates the problem underneath. I've seen DIY patches that looked fine on the surface but were hiding advancing osmosis beneath because the repair sealed water in rather than keeping it out.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Quick reference: crack type, urgency, and cost</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Crack type</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Urgency</th>
                  <th className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200">Typical repair cost</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Surface crazing</td>
                  <td className="px-4 py-3">Low  -  monitor</td>
                  <td className="px-4 py-3">$0 (monitor) to $800 (spot repair)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-3">Gelcoat crack</td>
                  <td className="px-4 py-3">Moderate  -  repair within months</td>
                  <td className="px-4 py-3">$500 to $4,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Structural crack</td>
                  <td className="px-4 py-3">High  -  assess immediately</td>
                  <td className="px-4 py-3">$2,000 to $15,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to do next</h2>
          <p className="text-slate-600 leading-relaxed">
            If you've found a crack and you're not sure what type it is, the safest next step is to get it assessed. The <Link href="/PoolCheckReport/order" className="text-orange-600 hover:underline font-medium">Pool Check Report ($149)</Link> lets you send me photos of the crack and surrounding area, and I'll give you a written assessment of what you're dealing with, what caused it, and what it'll cost to fix.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            If you're in the early stages of assessing a pool  -  maybe buying a property or just wanting to understand what you're looking at  -  the free <Link href="/RedFlagsGuide" className="text-orange-600 hover:underline font-medium">Red Flags Guide</Link> shows you photos of the most common problems so you can spot them yourself.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            And if you want a structured way to assess the pool yourself, the <Link href="/BuyerChecklist" className="text-orange-600 hover:underline font-medium">Buyer Checklist ($29)</Link> walks you through every inspection point in plain language.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Found a crack? Get expert eyes on it.</h3>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            Send me photos and I'll tell you exactly what type of crack it is, what caused it, and what to do about it.
          </p>
          <Link
            href="/PoolCheckReport/order"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get a Pool Check Report  -  $149
          </Link>
          <p className="text-slate-400 text-xs mt-3 italic">
            Clear findings, honest recommendations. No unnecessary repairs.
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
