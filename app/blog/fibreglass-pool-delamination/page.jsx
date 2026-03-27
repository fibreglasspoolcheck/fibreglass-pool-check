import Link from 'next/link'
import BreadcrumbSchema from '../../../components/BreadcrumbSchema'
import DarkCTA from '../../../components/DarkCTA'
import ContentSidebar from '../../../components/ContentSidebar'

export const metadata = {
  title: 'Fibreglass Pool Delamination: What It Is, What It Costs, and What to Do | Expert Guide',
  description: 'A fibreglass pool specialist explains what delamination looks like, what causes it, repair costs ($500–$15,000+), and when you need to act. Practical advice from 10+ years in the trade.',
  alternates: {
    canonical: '/blog/fibreglass-pool-delamination',
  },
  openGraph: {
    title: 'Fibreglass Pool Delamination: What It Is, What It Costs, and What to Do',
    description: 'A fibreglass pool specialist explains what delamination looks like, what causes it, and what it costs to fix.',
    type: 'article',
    url: 'https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-delamination',
  },
}

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fibreglass Pool Delamination: What It Is, What It Costs, and What to Do",
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
    "description": "A practical guide to fibreglass pool delamination  -  what it is, what causes it, repair options and costs, and when to act.",
    "mainEntityOfPage": "https://fibreglasspoolcheck.com.au/blog/fibreglass-pool-delamination"
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FibreglassPoolDelamination() {
  return (
    <>
      <ArticleSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Articles', url: '/blog' },
        { name: 'Fibreglass Pool Delamination', url: '/blog/fibreglass-pool-delamination' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/blog" className="text-warm-grey text-sm hover:text-white mb-4 inline-block font-sans transition-colors">&larr; All articles</Link>
            <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] text-white mb-4">
              Fibreglass pool delamination: what it is, what it costs, and what to do
            </h1>
            <div className="flex items-center gap-3 text-sm text-warm-grey font-sans">
              <span>By Brady Smith</span>
              <span>&middot;</span>
              <time dateTime="2026-03-16">16 March 2026</time>
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
                  Delamination is one of those words pool owners hear and immediately assume the worst. Sometimes that concern is justified. Other times, what you're looking at is a minor surface issue that can wait. The difference matters  -  because it's the difference between a $500 patch job and a $15,000 full resurface.
                </p>

                <p className="text-ink-light leading-relaxed mt-4">
                  I've been resurfacing and repairing fibreglass pools for over 10 years. Delamination is something I deal with regularly, and in this article I'll explain exactly what it is, what causes it, how to tell if it's serious, and what your repair options look like.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-orange-800 font-medium mb-1">Not sure what you're looking at?</p>
                  <p className="text-sm text-orange-700">
                    Upload photos of your pool surface and get an expert written assessment with a <Link href="/PoolCheckReport/order" className="underline font-medium">Pool Check Report ($149)</Link>. I'll tell you exactly what's going on and what it'll cost to fix.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What is fibreglass pool delamination?</h2>
                <p className="text-ink-light leading-relaxed">
                  A fibreglass pool shell is made up of layers. On the surface you've got the gelcoat  -  that's the smooth, coloured finish you see and touch. Underneath that sits the structural laminate, which is layers of fibreglass matting bonded together with resin.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  Delamination is when the gelcoat separates from the laminate beneath it. Instead of one solid bonded shell, you end up with a gap between the surface layer and the structural layer. Think of it like paint peeling off a wall  -  except the "paint" in this case is a hard composite layer that's supposed to be permanently bonded.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  In some cases, delamination can also occur between the layers of the laminate itself  -  not just between the gelcoat and the laminate. This is less common but more serious when it happens.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What does delamination look like?</h2>
                <p className="text-ink-light leading-relaxed">
                  Delamination doesn't always look dramatic. Here's what to watch for:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
                  <li><strong>Soft spots:</strong> Press your hand against the pool wall or floor and it flexes or feels spongy instead of solid. This is the most telling sign  -  the gelcoat has separated from the laminate and there's a void behind it.</li>
                  <li><strong>Bubbling or raised areas:</strong> The surface lifts away from the underlying structure, creating visible bumps or bubbles. These can range from a few centimetres to large sections of the wall or floor.</li>
                  <li><strong>Flaking or peeling:</strong> Pieces of gelcoat chip away or peel off, exposing the rougher laminate underneath. You might see lighter-coloured or brownish fibreglass matting where the gelcoat has come away.</li>
                  <li><strong>Hollow sound:</strong> Tap on the pool surface with your knuckle. A solid, well-bonded area sounds dull and dense. A delaminated area sounds hollow  -  like tapping on a drum rather than a solid wall.</li>
                  <li><strong>Discolouration:</strong> Areas where the gelcoat has separated may look slightly different in colour or sheen compared to the surrounding surface, especially when the pool is drained or the water level is low.</li>
                </ul>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">What causes delamination?</h2>
                <p className="text-ink-light leading-relaxed">
                  There's rarely a single cause. Most delamination I see is a combination of factors:
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Age and wear</h3>
                <p className="text-ink-light leading-relaxed">
                  Fibreglass pools aren't immortal. A gelcoat has a practical lifespan of around 15 to 25 years depending on water chemistry, sun exposure, and general maintenance. After that, the bond between the gelcoat and laminate naturally weakens. Most pools I see with delamination are 15 years old or more.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Poor manufacturing</h3>
                <p className="text-ink-light leading-relaxed">
                  Not all pool shells are made equal. If the gelcoat was applied too thick, too thin, or at the wrong temperature during manufacturing  -  or if the laminate wasn't rolled properly and air pockets were trapped between layers  -  delamination can show up much earlier than it should. I've seen pools less than 10 years old with widespread delamination due to manufacturing defects.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Chemical imbalance</h3>
                <p className="text-ink-light leading-relaxed">
                  Consistently low pH, high chlorine, or aggressive water chemistry attacks the gelcoat from the water side. Over time this weakens the bond between the gelcoat and the laminate. The waterline area cops the worst of it, which is why delamination often starts there.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Sun and UV exposure</h3>
                <p className="text-ink-light leading-relaxed">
                  UV radiation degrades the gelcoat surface over time, particularly on areas above the waterline and around the coping. In Queensland and other high-UV regions, this is a significant factor. Pools without shade or covers tend to show UV-related degradation faster.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Water ingress (osmosis)</h3>
                <p className="text-ink-light leading-relaxed">
                  If water penetrates through the gelcoat  -  via micro-cracks, blisters, or porous areas  -  it gets between the gelcoat and the laminate. Over time this moisture breaks down the bond and causes the layers to separate. Osmosis and delamination are closely related; osmosis is often the precursor to delamination. If you're seeing blistering as well as delamination, osmosis is likely involved.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">How serious is it?</h2>
                <p className="text-ink-light leading-relaxed">
                  It depends entirely on the extent and location. I categorise delamination into two broad buckets:
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Minor / cosmetic</h3>
                <p className="text-ink-light leading-relaxed">
                  A small area of gelcoat lifting  -  say, a patch the size of your hand or smaller  -  in one or two spots. The laminate underneath is solid and dry. This is cosmetic and not urgent. It looks poor, but it's not compromising the pool's structural integrity. You can monitor it and plan a repair when it suits you.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Widespread / structural concern</h3>
                <p className="text-ink-light leading-relaxed">
                  Large areas of delamination across the floor or walls. Multiple soft spots. Gelcoat flaking off in chunks. Visible moisture or discolouration between the layers. This is the pool telling you the gelcoat is failing and a full resurface is needed. Leaving it too long risks water getting into the laminate and causing structural damage to the fibreglass itself  -  which is a far more expensive problem.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Repair options and costs</h2>
                <p className="text-ink-light leading-relaxed">
                  Costs vary depending on the extent of the damage, the size of the pool, and where you are in Australia. These are realistic ranges based on what I see in the market:
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Patch repair: $500 – $2,000</h3>
                <p className="text-ink-light leading-relaxed">
                  For isolated delamination  -  one or two small areas where the gelcoat has lifted or flaked. The delaminated gelcoat is removed, the laminate is prepped, and new gelcoat or a fibreglass patch is applied and colour-matched. A patch repair buys you time, but it won't perfectly match the surrounding surface and it doesn't address the underlying cause if the gelcoat is generally ageing.
                </p>

                <h3 className="text-xl font-semibold text-ink mt-6 mb-3">Full resurface: $8,000 – $15,000+</h3>
                <p className="text-ink-light leading-relaxed">
                  For widespread delamination, the proper fix is a full resurface. This involves draining the pool, grinding off the old gelcoat, repairing any laminate damage, and applying a new surface coating  -  typically a polyester gelcoat, vinyl ester, or similar system depending on the repairer.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The cost depends on pool size, surface condition, access, and the coating system used. A standard 8m x 4m pool in reasonable condition will generally sit in the $8,000 to $12,000 range. Larger pools, pools with laminate damage, or pools requiring significant prep work can push past $15,000.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                  <p className="text-sm text-ink font-medium mb-1">Not sure which repair you need?</p>
                  <p className="text-sm text-ink-light">
                    A <Link href="/PoolCheckReport/order" className="underline font-medium text-accent">Pool Check Report</Link> gives you a clear assessment of the damage and a realistic cost estimate based on your specific pool. No guesswork.
                  </p>
                </div>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Can you keep swimming?</h2>
                <p className="text-ink-light leading-relaxed">
                  In most cases, yes  -  at least for a while. Minor delamination where the gelcoat has lifted but the laminate is intact and the water chemistry is balanced doesn't make the pool unsafe to swim in. It's a surface issue, not a water quality issue.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The exceptions: if large pieces of gelcoat are flaking off and creating sharp edges, that's a cut risk. If the laminate is visibly damaged or saturated, you're at risk of the damage accelerating. And if the delamination is around fittings (skimmer, returns, lights), it could be masking a leak.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  The pool won't collapse because of delamination. But ignoring it indefinitely means more damage, higher repair costs, and eventually a pool surface that's beyond patching.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">When it's urgent vs when it can wait</h2>
                <p className="text-ink-light leading-relaxed">
                  <strong>Act soon (within weeks):</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-ink-light">
                  <li>Large sections of gelcoat flaking off, exposing raw laminate to pool water</li>
                  <li>Visible moisture or wet fibreglass between the layers</li>
                  <li>Delamination around fittings with signs of leaking</li>
                  <li>Soft spots on the pool floor where you can push the surface in noticeably</li>
                </ul>

                <p className="text-ink-light leading-relaxed mt-4">
                  <strong>Monitor and plan (months to a year):</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-ink-light">
                  <li>A few small areas of gelcoat lifting, laminate dry and solid underneath</li>
                  <li>Minor surface flaking with no exposed fibreglass</li>
                  <li>Hollow-sounding areas that are still smooth and intact on the surface</li>
                </ul>

                <p className="text-ink-light leading-relaxed mt-4">
                  Even if yours falls into the "monitor" category, don't just forget about it. Check it every few weeks and note any changes. Take photos with a ruler or coin for scale so you can track whether it's spreading.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">How to monitor delamination</h2>
                <p className="text-ink-light leading-relaxed">
                  If you've identified delamination and you're not ready to repair yet, here's how to keep tabs on it:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
                  <li><strong>Photo record:</strong> Take close-up photos of every affected area monthly. Include something for scale. Compare them over time  -  if the area is growing, it's time to act.</li>
                  <li><strong>Tap test:</strong> Use your knuckle to tap around the affected area regularly. If the hollow-sounding zone is expanding, the delamination is spreading.</li>
                  <li><strong>Keep your water balanced:</strong> Poor water chemistry accelerates every type of gelcoat damage. Test your water weekly and keep pH, alkalinity, and chlorine within range. This won't reverse delamination, but it slows it down.</li>
                  <li><strong>Avoid draining the pool:</strong> Unless you're doing a repair, keep water in the pool. An empty fibreglass pool is vulnerable to ground pressure, thermal stress, and UV damage  -  all of which can make delamination worse.</li>
                </ul>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">Gold Coast or South-East Queensland?</h2>
                <p className="text-ink-light leading-relaxed">
                  If you're on the Gold Coast or in the SEQ region and your pool has delamination, I also run <a href="https://brefibreglass.com.au" className="text-accent hover:underline font-medium" target="_blank" rel="noopener noreferrer">BRE Fibreglass</a>  -  a fibreglass pool resurfacing and repair business. We handle everything from patch repairs to full resurfaces, and I can give you an honest assessment of what your pool actually needs (and what it doesn't).
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're outside SEQ, the <Link href="/PoolCheckReport" className="text-accent hover:underline font-medium">Pool Check Report</Link> can help you understand the condition of your pool before committing to repairs.
                </p>

                <h2 className="font-serif text-2xl text-ink mt-10 mb-4">The bottom line</h2>
                <p className="text-ink-light leading-relaxed">
                  Delamination isn't the end of your pool. Most of the time it's a surface issue that's repairable  -  either with a targeted patch or a full resurface depending on how far it's progressed. The key is knowing what you're dealing with, so you can make a practical decision rather than panicking or ignoring it.
                </p>
                <p className="text-ink-light leading-relaxed mt-3">
                  If you're not sure how serious yours is, get it assessed. A set of good photos and an experienced set of eyes will tell you whether you need to act now, plan ahead, or just keep an eye on it.
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
