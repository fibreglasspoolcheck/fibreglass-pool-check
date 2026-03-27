import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: '10 Things Building Inspectors Miss About Pools | Pre-Purchase Guide',
  description: 'A fibreglass pool specialist reveals the 10 most common pool problems that building inspectors miss during pre-purchase inspections  -  and what each one can cost you.',
  alternates: {
    canonical: '/blog/things-building-inspectors-miss-about-pools',
  },
  openGraph: {
    title: '10 Things Building Inspectors Miss About Pools',
    description: 'The most common pool problems building inspectors miss  -  and what each one can cost you after settlement.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/things-building-inspectors-miss-about-pools',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Things Building Inspectors Miss About Pools",
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
    "description": "The 10 most common pool problems that building inspectors miss during pre-purchase inspections.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/things-building-inspectors-miss-about-pools"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ThingsBuildingInspectorsMissAboutPools() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: '10 Things Building Inspectors Miss About Pools', url: '/blog/things-building-inspectors-miss-about-pools' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              10 things building inspectors miss about pools
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-23">23 March 2026</time>
              <span>&middot;</span>
              <span>9 min read</span>
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
                  A building and pest inspection is standard practice before buying a property. But when there's a pool involved, most buyers assume the inspector will pick up any problems with it. In my experience, that's rarely the case.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  I'm not having a go at building inspectors  -  they're qualified to assess houses, roofs, and structures. But a fibreglass pool is a composite vessel sitting in the ground, and it requires a completely different set of knowledge to assess properly. Most building inspectors will give the pool a quick visual check, note the obvious (green water, broken pump), and move on. The things that actually cost you $5,000 to $20,000+ in repairs almost always get missed.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  Here are the 10 things I see missed most often.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-orange-800 font-medium mb-1">Buying a property with a pool?</p>
                  <p className="text-sm text-orange-700">
                    Download the free <Link href="/RedFlagsGuide" className="underline font-medium">Red Flags Guide</Link> to know what to photograph at the inspection, or get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link> for a specialist assessment of a specific pool.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">1. Osmotic blistering below the waterline</h2>
                <p className="text-ink-light leading-relaxed">
                  This is the big one. Osmotic blistering is small raised bumps on the pool surface caused by water migrating through the gelcoat and reacting with the laminate beneath. It's one of the most common and expensive problems in fibreglass pools, and it's almost invisible unless you know what to look for.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The blisters are typically 5 to 20mm in diameter and sit below the waterline. They're hard to spot from the pool edge  -  you need to get close to the surface, ideally at water level, and look along the walls at an angle. Most building inspectors stand at the pool edge, glance in, and note "pool appears in reasonable condition."
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Widespread osmosis typically requires a full drain, grind-back, and resurface. Cost: $8,000 to $15,000+.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">2. Early-stage delamination</h2>
                <p className="text-ink-light leading-relaxed">
                  Delamination is when the gelcoat surface separates from the structural laminate beneath. In its early stages, it shows up as soft spots, hollow-sounding areas when tapped, or subtle bubbling under the surface. It's not always visible  -  you often need to touch and tap the surface to find it.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Building inspectors rarely touch the pool surface, let alone tap-test it. I've reviewed inspection reports that gave a pool a clean bill of health, only to find significant delamination around the skimmer and along the waterline when I assessed it.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Localised delamination repair: $1,500 to $5,000. Widespread delamination requiring full resurface: $10,000 to $18,000+.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">3. Shell flex and backfill problems</h2>
                <p className="text-ink-light leading-relaxed">
                  A fibreglass pool shell relies on proper backfill for support. If the backfill was done incorrectly during installation  -  wrong material, poor compaction, or inadequate drainage  -  the shell can flex, bulge, or move over time.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  You check for this by gently pushing against the pool wall. A properly supported wall should feel solid. If it flexes noticeably, there's a backfill issue. Building inspectors don't typically push-test pool walls  -  it's not in their standard scope.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Backfill remediation (partial excavation and re-backfilling): $5,000 to $15,000+. If the shell has cracked due to inadequate support, add structural repair costs on top.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">4. Fitting failure and hidden leaks</h2>
                <p className="text-ink-light leading-relaxed">
                  Pool fittings  -  the skimmer box, return jets, suction points, and lights  -  are common failure points. They're installed through the pool shell, which creates a penetration that can leak. Over time, seals degrade, fittings crack, and water finds its way out.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A slow leak through a fitting can go unnoticed for years, causing backfill washout, ground erosion, and eventually shell movement. The pool owner just thinks they're losing water to evaporation. Building inspectors might note a cracked skimmer box if it's obvious, but they're not checking seal integrity or looking for signs of long-term water loss around fittings.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Fitting replacement and leak repair: $500 to $3,000. If the leak has caused backfill erosion and shell movement: $5,000 to $15,000+.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">5. Gelcoat chemical damage at the waterline</h2>
                <p className="text-ink-light leading-relaxed">
                  The waterline area takes the most punishment on any pool. Poorly managed water chemistry  -  particularly low pH, high chlorine, or calcium scaling  -  causes visible damage to the gelcoat in this zone. It shows up as chalking, roughness, discolouration, or fine crazing.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A building inspector might note "waterline staining" in their report, but they won't tell you whether it's cosmetic (a clean will fix it) or structural (the gelcoat is degrading and the pool needs resurfacing). That distinction is worth thousands of dollars.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Waterline resurfacing band: $2,000 to $5,000. Full resurface if degradation is widespread: $8,000 to $15,000+.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">6. Equipment at end of life</h2>
                <p className="text-ink-light leading-relaxed">
                  Pool pumps, filters, and chlorinators all have finite lifespans. A building inspector might note that the equipment is "operational" at the time of inspection, but they typically don't assess age, remaining life, or efficiency. A pump that runs on the day of inspection might be on its last legs  -  noisy, inefficient, and months from failure.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  I check manufacturing dates, listen for bearing noise, check for seal leaks, and assess overall condition. Most of the time I can tell a homeowner roughly how many years of life are left in each piece of equipment.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Full equipment replacement (pump, filter, chlorinator): $3,000 to $6,000.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">7. Pool shell age and history</h2>
                <p className="text-ink-light leading-relaxed">
                  Knowing the age of a pool is critical to understanding what maintenance is coming. A 5-year-old pool is in a very different position to a 15-year-old pool, even if they both look similar at a glance. Building inspectors rarely try to determine pool age  -  and the vendor might not disclose it accurately.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  I can usually estimate pool age from the gelcoat condition, equipment age, fitting style, and shell design. I also look for signs of previous repairs or resurfacing  -  evidence that the pool has had work done before, which tells you a lot about what might be coming next.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> The cost of surprise  -  buying a pool you thought was 8 years old and discovering it's 18 years old with a resurface due within 2 years.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">8. Coping separation and drainage issues</h2>
                <p className="text-ink-light leading-relaxed">
                  The junction between the pool shell and the surrounding deck or coping is a critical waterproofing point. If there's separation  -  a gap between the coping and the pool edge  -  surface water (rain, splash, garden irrigation) can drain behind the shell and wash away backfill.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Building inspectors check the deck and paving for trip hazards and drainage, but they rarely assess the coping-to-shell junction as a waterproofing concern. It's a pool-specific issue that requires understanding of how a fibreglass shell sits in the ground.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Coping repair and resealing: $1,000 to $4,000. If backfill erosion has occurred: $5,000 to $15,000+ for remediation.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">9. Floor condition and groundwater pressure</h2>
                <p className="text-ink-light leading-relaxed">
                  The pool floor is the hardest part to assess because it's underwater. But it's also one of the most important areas to check. Groundwater pressure can push upward on the floor, causing bulging, bubbling, or in extreme cases, cracking. This is especially common in areas with high water tables or during prolonged wet weather.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  You need to look along the floor surface from a low angle (at water level) to spot unevenness. If the water is murky, you can't assess it at all  -  which is a problem, because murky water is often a sign of neglected maintenance, and neglected pools are more likely to have hidden issues.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Floor repair due to groundwater damage: $3,000 to $10,000+. Hydrostatic valve installation: $500 to $1,500.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">10. Previous repair work (good and bad)</h2>
                <p className="text-ink-light leading-relaxed">
                  Pools that have been repaired before will have repaired again  -  eventually. Knowing that a pool has been resurfaced, patched, or structurally repaired is valuable information because it tells you what problems existed previously and how long ago they were addressed.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Good repair work is hard to spot  -  and that's the point. But poor repair work leaves telltale signs: colour mismatches, uneven texture, visible patch lines, sealant around fittings, or areas where the surface feels different under your fingers. These are things I look for specifically because they tell the pool's history.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A building inspector isn't trained to identify previous fibreglass repair work, and most won't even mention it in their report.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>What it costs if missed:</strong> Varies enormously. A pool with a quality resurface 3 years ago is in great shape. A pool with a cheap patch-over of osmosis problems 3 years ago might need a full $15,000+ resurface within the next year or two.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Why this happens  -  and what to do about it</h2>
                <p className="text-ink-light leading-relaxed">
                  Building inspectors aren't negligent  -  they're just operating outside their area of expertise when it comes to pools. Their reports typically include a disclaimer along the lines of "pool condition is outside the scope of this inspection" or "we recommend specialist assessment for pool equipment and structure."
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The problem is that most buyers either don't read that disclaimer, or they read it and assume it means everything is fine because the inspector didn't flag anything specific.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're buying a property with a fibreglass pool, the building inspection is necessary for the house. But for the pool, you need a separate specialist assessment. It's the same logic as getting a pest inspection alongside the building inspection  -  different expertise for different parts of the property.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What to do next</h2>
                <p className="text-ink-light leading-relaxed">
                  If you're heading to open homes and want to know what to look for, grab the free <Link href="/RedFlagsGuide" className="text-accent hover:underline font-medium">Red Flags Guide</Link>. It covers the most common problems with photos and plain-language explanations, so you know what to photograph and what questions to ask.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're serious about a specific property and want a specialist opinion before you commit, the <Link href="/PoolCheckReport/order" className="text-accent hover:underline font-medium">Pool Check Report ($149)</Link> gives you a written assessment based on pool photos. I'll tell you what the building inspector missed, what repairs are likely needed, and what you should budget for.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  And if you want to do a thorough self-assessment of the pool at inspection, the <Link href="/BuyerChecklist" className="text-accent hover:underline font-medium">Buyer Checklist ($29)</Link> walks you through every check point a specialist would cover, in plain language.
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
