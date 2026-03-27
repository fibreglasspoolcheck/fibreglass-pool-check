import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: 'How Long Does a Fibreglass Pool Last? Honest Answer from a Specialist | 2026',
  description: 'A fibreglass pool specialist with 10+ years experience explains realistic pool lifespans, what affects longevity, signs of ageing, and when you should actually worry.',
  alternates: {
    canonical: '/blog/how-long-does-fibreglass-pool-last',
  },
  openGraph: {
    title: 'How Long Does a Fibreglass Pool Last? Honest Answer from a Specialist',
    description: 'Realistic fibreglass pool lifespans, what affects longevity, and when to worry  -  from a specialist with 10+ years experience.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/how-long-does-fibreglass-pool-last',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Long Does a Fibreglass Pool Last? Honest Answer from a Specialist",
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
    "description": "Realistic fibreglass pool lifespans, what affects longevity, signs of ageing, and when to worry.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/how-long-does-fibreglass-pool-last"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function HowLongDoesFibreglassPoolLast() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'How Long Does a Fibreglass Pool Last?', url: '/blog/how-long-does-fibreglass-pool-last' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              How long does a fibreglass pool last? (Honest answer from a specialist)
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-23">23 March 2026</time>
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
                  If you Google "how long does a fibreglass pool last", you'll get answers ranging from 20 years to "a lifetime". The truth sits somewhere in the middle  -  and it depends heavily on factors that most pool companies never mention when they're trying to sell you one.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  I've spent over 10 years resurfacing, repairing, and assessing fibreglass pools across Queensland. I've worked on pools that were 30 years old and still going strong, and I've seen pools that were 8 years old and falling apart. The difference isn't luck  -  it's a combination of manufacturing quality, installation, water chemistry, and maintenance.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  Here's what I'd tell you if you asked me in person.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-orange-800 font-medium mb-1">Worried about a specific pool?</p>
                  <p className="text-sm text-orange-700">
                    Get a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>  -  I'll assess your pool's current condition from photos and tell you how much life it has left, what needs attention now, and what can wait.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">The short answer: 25 to 30+ years for the shell</h2>
                <p className="text-ink-light leading-relaxed">
                  A well-manufactured, properly installed fibreglass pool shell can last 25 to 30 years or more. Some manufacturers quote 50-year structural warranties, and in principle, there's nothing wrong with that claim  -  the fibreglass composite itself is extremely durable. It doesn't corrode, it doesn't rust, and it handles ground movement better than concrete.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  But  -  and this is the part the sales pitch leaves out  -  the shell lasting 30 years doesn't mean the pool stays maintenance-free for 30 years. There's a big difference between the structural shell and the surface you actually swim in.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">The gelcoat surface: 10 to 15 years</h2>
                <p className="text-ink-light leading-relaxed">
                  The gelcoat is the smooth, coloured surface layer that gives a fibreglass pool its finish. It's the part you see, touch, and swim against. And it doesn't last as long as the shell underneath.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  In my experience, a factory-applied gelcoat surface typically lasts 10 to 15 years before it needs attention. In Queensland and other high-UV areas of Australia, I'd put the realistic range at 8 to 12 years. The sun is absolutely brutal on gelcoat  -  more so than most homeowners realise.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  After that point, you're looking at fading, chalking, minor blistering, or general roughness. None of that means the pool is done  -  it means the surface needs resurfacing. A good resurface costs $8,000 to $15,000 and gives you another 10 to 15 years. That's a normal part of the pool's lifecycle, not a failure.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Equipment lifespan: 5 to 15 years depending on the item</h2>
                <p className="text-ink-light leading-relaxed">
                  People often forget that a pool isn't just the shell. The equipment has its own lifespan:
                </p>
                <ul className="list-disc list-inside text-ink-light leading-relaxed mt-3 space-y-2">
                  <li><strong>Pool pump:</strong> 8 to 12 years</li>
                  <li><strong>Sand filter:</strong> 10 to 15 years (media replacement every 5 to 7 years)</li>
                  <li><strong>Salt chlorinator cell:</strong> 3 to 7 years</li>
                  <li><strong>Chlorinator control unit:</strong> 7 to 12 years</li>
                  <li><strong>Pool light:</strong> 5 to 10 years</li>
                  <li><strong>Fittings (skimmer, returns):</strong> 15 to 20+ years, but seals and gaskets degrade earlier</li>
                </ul>
                <p className="text-ink-light leading-relaxed mt-3">
                  A full equipment replacement  -  pump, filter, and chlorinator  -  typically runs $3,000 to $6,000. Not a disaster, but worth factoring in when you're thinking about total cost of ownership over the pool's life.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What actually determines how long your pool lasts</h2>
                <p className="text-ink-light leading-relaxed">
                  Here are the six factors I see making the biggest difference:
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">1. Manufacturing quality</h3>
                <p className="text-ink-light leading-relaxed">
                  Not all fibreglass pools are created equal. The quality of the resin, the thickness of the laminate, and the gelcoat application all vary between manufacturers. Premium Australian manufacturers generally produce shells with thicker laminate and better gelcoat coverage than budget imports. I've assessed pools from well-known brands that were still solid after 25 years, and I've seen cheaper shells developing osmosis within 5 to 7 years.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">2. Installation quality</h3>
                <p className="text-ink-light leading-relaxed">
                  A fibreglass pool is only as good as its installation. The backfill material, compaction, plumbing connections, and coping installation all affect long-term performance. Poor backfill is the single most common cause of shell movement and bulging walls I come across. If the installer used the wrong material or didn't compact properly, you'll see problems within 5 to 10 years  -  sometimes sooner.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">3. Water chemistry</h3>
                <p className="text-ink-light leading-relaxed">
                  This is the factor homeowners have the most control over  -  and the one that gets neglected the most. Consistently low pH eats through gelcoat. High calcium levels cause scaling that bonds to the surface. Excessive chlorine or acid additions cause chemical burns and premature fading. Running a salt chlorinator too high slowly degrades the gelcoat at the waterline.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  I've seen pools where poor water chemistry knocked 5 years off the gelcoat's useful life. It's the difference between resurfacing at 8 years versus 13 years  -  and that's a $10,000+ difference in your pocket.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">4. UV exposure</h3>
                <p className="text-ink-light leading-relaxed">
                  Australia's UV intensity is genuinely harsh on pool surfaces. Pools in North Queensland or Western Australia cop more UV damage than pools in Victoria or Tasmania. If your pool has no shade cover or shelter, the gelcoat above the waterline ages faster. Darker coloured pools (royal blue, dark grey) tend to show UV degradation earlier than lighter colours.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">5. Ground conditions</h3>
                <p className="text-ink-light leading-relaxed">
                  Reactive clay soils, high water tables, and poor drainage can all affect how a fibreglass shell sits in the ground over time. In areas with expansive clay, the ground moves seasonally  -  and if the pool wasn't installed to account for that, you can end up with shell movement, cracked coping, and stressed fittings. This isn't something you can easily fix after the fact.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-8 mb-3">6. Ongoing maintenance</h3>
                <p className="text-ink-light leading-relaxed">
                  Pools that are regularly cleaned, chemically balanced, and inspected last significantly longer than pools that get neglected for months at a time. Stagnant water, algae buildup, and debris accumulation all contribute to surface degradation. It's not complicated maintenance  -  it just needs to be consistent.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Signs your fibreglass pool is ageing</h2>
                <p className="text-ink-light leading-relaxed">
                  Here's what to watch for as your pool gets older. These are roughly in order from early signs to more serious indicators:
                </p>
                <ul className="list-disc list-inside text-ink-light leading-relaxed mt-3 space-y-2">
                  <li><strong>Fading colour:</strong> The gelcoat loses its original vibrancy. This is mostly cosmetic and happens to every pool eventually.</li>
                  <li><strong>Chalky surface:</strong> When you run your hand along the surface and it feels rough or chalky, the gelcoat is starting to break down. Still cosmetic at this stage, but it's a sign you're on the clock.</li>
                  <li><strong>Waterline staining:</strong> A persistent ring of discolouration at the waterline that doesn't respond to cleaning. Usually a combination of chemical and UV damage.</li>
                  <li><strong>Small blisters:</strong> Raised bumps on the surface, usually below the waterline. A few small ones might be cosmetic. Clusters or widespread blistering indicate osmosis  -  water getting through the gelcoat into the laminate.</li>
                  <li><strong>Crazing:</strong> Fine hairline cracks in the gelcoat surface. Common around fittings and areas of flex. Not structural on its own, but it means the gelcoat has lost its elasticity.</li>
                  <li><strong>Delamination:</strong> Areas where the gelcoat is physically separating from the laminate beneath. This is more serious and usually means a resurface is needed sooner rather than later.</li>
                  <li><strong>Shell flex or bulging:</strong> If you can push the pool wall in with your hand and it moves, there's an issue with the backfill or ground support. This is structural and needs investigation.</li>
                </ul>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-orange-800 font-medium mb-1">Not sure what you're looking at?</p>
                  <p className="text-sm text-orange-700">
                    Download the free <Link href="/RedFlagsGuide" className="underline font-medium">Red Flags Guide</Link> for photos of the most common problems, or use the <Link href="/BuyerChecklist" className="underline font-medium">Buyer Checklist ($29)</Link> for a structured walkthrough of every inspection point.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">When should you actually worry?</h2>
                <p className="text-ink-light leading-relaxed">
                  Not everything on the list above is cause for alarm. Here's how I think about it:
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>Don't panic about:</strong> Fading, mild chalking, minor waterline staining, or a small number of isolated blisters on a pool that's 10+ years old. These are normal ageing signs. Monitor them, plan for a resurface in the next few years, and move on.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>Get it assessed soon:</strong> Widespread blistering, visible delamination, crazing across large areas, or any cracks that aren't just surface-level. These suggest the pool needs professional attention  -  not necessarily urgently, but don't let it sit for years.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  <strong>Act quickly:</strong> Shell movement, bulging walls, water loss that can't be explained by evaporation, or structural cracks that you can feel with your fingernail. These are signs of problems that can worsen significantly if left unaddressed.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Fibreglass vs concrete: which lasts longer?</h2>
                <p className="text-ink-light leading-relaxed">
                  This comes up a lot. The honest answer: both can last 30+ years as a shell. Concrete pools need resurfacing every 10 to 15 years (just like fibreglass), but concrete resurfacing is typically more expensive  -  $15,000 to $30,000+ for a full re-render and tile.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Fibreglass pools have lower ongoing maintenance costs, are less prone to algae (the smooth gelcoat surface doesn't harbour it like rough concrete), and handle ground movement better. Concrete pools are more customisable in terms of shape and size.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  In terms of total cost of ownership over 25 years, fibreglass almost always comes out ahead. That's not a sales pitch  -  it's just the maths on resurfacing, chemical use, and maintenance hours.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">How to maximise your pool's lifespan</h2>
                <p className="text-ink-light leading-relaxed">
                  If you want to get the most years out of your fibreglass pool, here's what actually matters:
                </p>
                <ol className="list-decimal list-inside text-ink-light leading-relaxed mt-3 space-y-3">
                  <li><strong>Keep your water chemistry balanced.</strong> Test weekly, or at minimum fortnightly. pH between 7.2 and 7.6, alkalinity between 80 and 120 ppm, calcium between 200 and 400 ppm. This alone extends gelcoat life by years.</li>
                  <li><strong>Don't over-chlorinate.</strong> More is not better. Excessively high chlorine levels bleach and damage the gelcoat. If your chlorinator is set too high, turn it down.</li>
                  <li><strong>Maintain the waterline.</strong> Clean the waterline regularly with a pool-safe cleaner. Don't use abrasive scrubbers or household chemicals  -  they strip the gelcoat.</li>
                  <li><strong>Keep the water level up.</strong> Running the pool with a low water level exposes more gelcoat to UV and air, which accelerates degradation. Keep it at the middle of the skimmer opening.</li>
                  <li><strong>Address small problems early.</strong> A small blister is a $200 repair. Widespread osmosis is a $12,000+ resurface. Don't wait until small problems become big ones.</li>
                  <li><strong>Service your equipment.</strong> A pump running poorly or a chlorinator cell that's scaled up will affect water quality, which affects the pool surface.</li>
                </ol>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What to do next</h2>
                <p className="text-ink-light leading-relaxed">
                  If your pool is showing signs of ageing and you want to know where it sits  -  whether it needs attention now or has years of life left  -  the <Link href="/PoolCheckReport/order" className="text-accent hover:underline font-medium">Pool Check Report ($149)</Link> gives you a written assessment based on photos of your pool. I'll tell you what's normal wear, what needs watching, and what needs fixing.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're buying a property with a pool and want to understand what you're getting into, the same report works as a pre-purchase assessment. Pair it with the free <Link href="/RedFlagsGuide" className="text-accent hover:underline font-medium">Red Flags Guide</Link> so you know what to photograph at the inspection.
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
