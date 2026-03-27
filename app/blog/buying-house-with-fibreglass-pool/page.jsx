import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: 'What to Look for When Buying a House with a Fibreglass Pool | Expert Guide',
  description: 'A fibreglass pool specialist explains the 8 things you must check before buying a property with a pool. What building inspectors miss and what can cost you $5,000–$30,000+.',
  alternates: {
    canonical: '/blog/buying-house-with-fibreglass-pool',
  },
  openGraph: {
    title: 'What to Look for When Buying a House with a Fibreglass Pool',
    description: 'A fibreglass pool specialist explains the 8 things you must check before buying a property with a pool.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/buying-house-with-fibreglass-pool',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What to Look for When Buying a House with a Fibreglass Pool",
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
    "description": "A practical guide to assessing a fibreglass pool before you exchange contracts.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/buying-house-with-fibreglass-pool"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function BuyingHouseWithFibreglassPool() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Buying a House with a Fibreglass Pool', url: '/blog/buying-house-with-fibreglass-pool' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              What to look for when buying a house with a fibreglass pool
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-14">14 March 2026</time>
              <span>&middot;</span>
              <span>8 min read</span>
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
                  A fibreglass pool can add real value to a property  -  or it can add $5,000 to $30,000 in surprise repair costs that nobody mentioned during the sale. The difference comes down to knowing what to look for before you exchange contracts.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  I've assessed over 250 fibreglass pools across Australia, and the same problems come up again and again. Most of them are invisible to someone who hasn't worked with fibreglass  -  and that includes most building inspectors.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  This guide covers the eight things I check on every pool assessment, so you know what to look for at the next open home.
                </p>

                <div className="bg-warm-white border border-border-warm rounded-xl p-6 my-8">
                  <p className="text-sm text-ink font-medium mb-1">Short on time?</p>
                  <p className="text-sm text-ink-light">
                    Download the free <Link href="/RedFlagsGuide" className="underline font-medium">Red Flags Guide</Link> for a quick-reference checklist you can take to inspections, or get a full <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link> where I assess your specific pool from photos.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">1. The pool surface  -  look for blistering, flaking, and discolouration</h2>
                <p className="text-ink-light leading-relaxed">
                  The gelcoat is the coloured, glossy surface you see when you look at a fibreglass pool. It's the first line of defence against water ingress, and it's where most problems become visible first.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Walk around the pool and look closely at the walls and floor. You're looking for small raised bumps (blisters), areas where the surface is peeling or flaking, chalky patches, or colour changes that aren't consistent with normal wear.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A few small blisters on an older pool might be cosmetic. Widespread blistering  -  especially below the waterline  -  is a sign of osmosis, which means water is getting through the gelcoat and into the laminate. That's not cosmetic. That's a structural concern that typically costs $8,000 to $15,000+ to fix through a full resurface.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">2. The waterline  -  check for staining and tide marks</h2>
                <p className="text-ink-light leading-relaxed">
                  The waterline area takes the most chemical and UV punishment on any pool. Look at the first 10–15 centimetres above and below the water level.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A faded or slightly stained waterline on an older pool is normal. What you're watching for is a visible ring of discolouration, crazing (fine hairline cracks in the gelcoat), or any areas where the surface texture changes noticeably. These can indicate chemical damage, UV degradation, or early-stage gelcoat failure.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">3. The skimmer box and returns  -  check the fittings</h2>
                <p className="text-ink-light leading-relaxed">
                  Fittings are one of the most common failure points on a fibreglass pool. Look at the skimmer box, the return jets, the suction points, and any lights. Check for cracks around the fittings, gaps between the fitting and the pool shell, and any signs of movement or sealant repair.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A cracked skimmer box or a fitting that's pulled away from the shell can cause leaks that are difficult and expensive to repair. If you can see old sealant or multiple layers of repair around fittings, that's a sign the pool has had ongoing leak issues.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">4. The pool shell  -  check for flex, bulging, or separation</h2>
                <p className="text-ink-light leading-relaxed">
                  A fibreglass pool is essentially a large moulded shell sitting in the ground, supported by a sand or concrete backfill. If the backfill wasn't done properly  -  or if ground conditions have changed  -  the shell can move.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Look along the top edge of the pool (the bond beam or coping line). It should be level and even. If one side is sitting higher than the other, or if you can see the pool wall bulging inward or outward, that's a structural issue. Also check the pool floor  -  stand at one end and look along the floor surface. Any visible warping, bubbling, or unevenness could indicate groundwater pressure pushing up from below.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">5. The coping and surrounds  -  where the pool meets the deck</h2>
                <p className="text-ink-light leading-relaxed">
                  The junction between the pool shell and the surrounding paving or decking is a critical point. Look for gaps, cracked coping stones, or separation between the pool edge and the deck.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Separation at the coping can let surface water drain behind the pool shell, which accelerates backfill erosion and can eventually lead to shell movement. It also makes the pool look worse than it is  -  which affects your resale value.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">6. The equipment  -  pump, filter, chlorinator</h2>
                <p className="text-ink-light leading-relaxed">
                  Pool equipment has a finite lifespan. A pump typically lasts 8–12 years, a sand filter 10–15 years, and a salt chlorinator 5–8 years. If the equipment is visibly old, corroded, or noisy, factor replacement costs into your offer.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Check the equipment pad. Is it tidy and well-maintained, or is it covered in rust stains and leaking? The condition of the equipment area often tells you how well the entire pool has been maintained.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A full equipment replacement (pump, filter, chlorinator) runs $3,000 to $6,000 depending on brands and sizing.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">7. Water clarity and level  -  clues to maintenance history</h2>
                <p className="text-ink-light leading-relaxed">
                  Clear, balanced water generally means the pool has been maintained. Green or cloudy water doesn't necessarily mean the pool itself has problems  -  it could just mean the current owner has neglected the chemistry. But it does make it harder to assess the shell condition, because you can't see through murky water.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Also check the water level. If it's significantly below the skimmer, ask why. A dropping water level can indicate a leak  -  and leak detection and repair on a fibreglass pool is not cheap.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">8. Ask the right questions</h2>
                <p className="text-ink-light leading-relaxed">
                  The vendor or agent may not know the answers to all of these, but it's worth asking: How old is the pool? Has it ever been resurfaced? Are there any known leaks or repairs? When was the equipment last replaced? Is the pool under any warranty?
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If the vendor is reluctant to answer  -  or claims not to know anything about a pool that's on their own property  -  treat that as a yellow flag.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Why building inspectors miss pool problems</h2>
                <p className="text-ink-light leading-relaxed">
                  A standard building and pest inspection covers the house structure, roof, electrical, plumbing, and pest damage. The pool gets a quick visual check at best  -  and that check is usually done by someone whose expertise is houses, not fibreglass composites.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  I've reviewed assessments where the building inspector gave the pool a clean bill of health, and I found widespread osmotic blistering, early delamination near the skimmer, and equipment well past its service life. One buyer used my findings to renegotiate $15,000 off the purchase price.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  A building inspector isn't the right person to assess a fibreglass pool  -  for the same reason you wouldn't ask a pool builder to assess your roof.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What to do next</h2>
                <p className="text-ink-light leading-relaxed">
                  If you're at the early stages  -  browsing properties, attending open homes  -  use the checklist above as a starting point. Download the free <Link href="/RedFlagsGuide" className="text-accent hover:underline font-medium">Red Flags Guide</Link> for a printable version you can take with you.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're serious about a specific property and want expert eyes on the pool before you commit, the <Link href="/PoolCheckReport/order" className="text-accent hover:underline font-medium">Pool Check Report ($149)</Link> gives you a written assessment based on photos of the pool. It covers surface condition, structural observations, equipment state, red flags, and actionable recommendations  -  delivered within 2–3 business days.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  For buyers who want a structured self-assessment tool, the <Link href="/BuyerChecklist/order" className="text-accent hover:underline font-medium">Buyer Checklist ($29)</Link> walks you through every inspection point a specialist would check, in plain language.
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
