import Link from 'next/link'
import Image from 'next/image'
import DarkCTA from '../components/DarkCTA'

export const metadata = {
  title: 'Independent Fibreglass Pool Checks Australia',
  description: 'Get an independent fibreglass pool inspection report or buyer checklist from a specialist with 250+ pools assessed. Australia-wide.',
}

function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fibreglass Pool Check",
    "url": "https://fibreglasspoolcheck.com.au",
    "description": "Independent fibreglass pool inspection reports and buyer guidance from an independent specialist with 10+ years experience.",
    "founder": {
      "@type": "Person",
      "name": "Brady Smith",
      "jobTitle": "Fibreglass Pool Specialist"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": "Fibreglass Pool Inspection",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": "4",
      "reviewCount": "4"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kelvin O." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We bought a house with a pool, and the pool was not all it seemed. Brady displays amazing attention to detail. Even our water carter said he's never seen a better looking renovated pool."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michael H." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "From our very first contact, we were impressed with the responsiveness and professionalism. The final result is perfect. I can unreservedly recommend Brady for both quality workmanship and commitment to customer satisfaction."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Linton P." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "From the beginning I was informed of the scope of works, possible variations and the time frames to complete the work."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Russell W." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "In Brady's mind, the job had to be done right, and it certainly was."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pool Assessment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pool Check Report",
            "description": "Detailed written assessment covering pool condition, red flags, and recommendations based on submitted photos."
          },
          "price": "149",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Buyer Checklist",
            "description": "Expert checklist for assessing a fibreglass pool yourself before purchase."
          },
          "price": "29",
          "priceCurrency": "AUD"
        }
      ]
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <HomeSchema />

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-warm-grey tracking-wide uppercase mb-4">
                Fibreglass Pool Specialist &middot; Independent Assessment
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif text-ink leading-tight mb-6">
                Independent Fibreglass Pool Checks
              </h1>
              <p className="text-ink-light text-lg leading-relaxed mb-8">
                Photo-based fibreglass pool assessment and decision support for buyers and owners who want practical clarity before they buy, accept a quote, or spend money on repairs or resurfacing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/PoolCheckReport/order"
                  className="bg-ink hover:bg-ink text-white px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
                >
                  Order Pool Check Report  -  $149 AUD
                </Link>
                <Link
                  href="/RedFlagsGuide"
                  className="border border-border-warm hover:border-warm-grey text-ink-light px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
                >
                  Get Free Red Flags Guide
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hooper-after.jpg"
                alt="Clean fibreglass pool after professional assessment and renovation"
                width={700}
                height={500}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="bg-cream border-y border-border-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '1', text: 'Submit your photos and pool details' },
              { step: '2', text: 'Receive a written Pool Check Report in 3\u20135 business days' },
              { step: '3', text: 'Know what to ask before you buy, repair, or resurface' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="text-sm font-bold text-ink bg-warm-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </span>
                <p className="text-sm text-ink-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden">
              <div className="relative">
                <Image src="/images/walsh-before.jpg" alt="Fibreglass pool before assessment  -  surface damage visible" width={300} height={225} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute bottom-2 left-2 bg-deep/80 text-white text-[10px] px-2 py-0.5 rounded">Before</span>
              </div>
              <div className="relative">
                <Image src="/images/walsh-after.jpg" alt="Same pool after professional fibreglass resurfacing" width={300} height={225} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute bottom-2 left-2 bg-accent/90 text-white text-[10px] px-2 py-0.5 rounded">After</span>
              </div>
              <div className="relative">
                <Image src="/images/fowler-before.jpg" alt="Fibreglass pool showing wear and deterioration" width={300} height={225} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute bottom-2 left-2 bg-deep/80 text-white text-[10px] px-2 py-0.5 rounded">Before</span>
              </div>
              <div className="relative">
                <Image src="/images/fowler-after.jpg" alt="Pool restored to pristine condition" width={300} height={225} className="w-full h-full object-cover rounded-xl" />
                <span className="absolute bottom-2 left-2 bg-accent/90 text-white text-[10px] px-2 py-0.5 rounded">After</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-warm-grey tracking-wide uppercase mb-3">About This Service</p>
              <h2 className="text-3xl font-serif text-ink mb-6">
                Built by a fibreglass pool specialist, not a generic content site
              </h2>
              <p className="text-ink-light leading-relaxed mb-4">
                Fibreglass Pool Check is backed by hands-on fibreglass pool resurfacing, repair, and restoration experience. This is not recycled content from a marketing agency.
              </p>
              <p className="text-ink-light leading-relaxed mb-6">
                Every assessment is written by someone who has personally worked on 250+ fibreglass pools  -  grinding, laminating, resurfacing, troubleshooting water loss, repairing structural damage, and explaining to owners what went wrong and what to do next.
              </p>
              <Link href="/About" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                More about this service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-ink mb-10">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Amazing attention to detail',
                quote: 'We bought a house with a pool, and the pool was not all it seemed. Brady displays amazing attention to detail. Even our water carter said he\'s never seen a better looking renovated pool.',
                name: 'Kelvin O.',
                label: 'pool owner',
              },
              {
                title: 'Responsive and professional',
                quote: 'From our very first contact, we were impressed with the responsiveness and professionalism. The final result is perfect. I can unreservedly recommend Brady for both quality workmanship and commitment to customer satisfaction.',
                name: 'Michael H.',
                label: 'pool owner',
              },
              {
                title: 'Clear scope. Clear communication.',
                quote: 'From the beginning I was informed of the scope of works, possible variations and the time frames to complete the work.',
                name: 'Linton P.',
                label: 'pool owner',
              },
              {
                title: 'Done properly, not rushed',
                quote: 'In Brady\'s mind, the job had to be done right, and it certainly was.',
                name: 'Russell W.',
                label: 'pool owner',
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-white border border-border-warm rounded-xl p-6">
                <h3 className="font-serif text-ink mb-2">{item.title}</h3>
                <p className="text-ink-light text-sm leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm text-warm-grey">{item.name}, {item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Example */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-warm-grey tracking-wide uppercase mb-3">Case Example</p>
          <h2 className="text-3xl font-serif text-ink mb-2">What the right fibreglass assessment can reveal</h2>
          <p className="text-ink-light mb-10">From tired and neglected to a pool people wanted to use again</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-ink-light leading-relaxed mb-4">
                An older fibreglass pool had lost gloss, stained badly, and showed severe signs of surface deterioration. It looked tired, neglected, and like a candidate for expensive guesswork.
              </p>
              <p className="text-ink-light leading-relaxed mb-6">
                The damaged areas were properly addressed and the pool was refinished instead of being treated like a quick cosmetic cover-up. The result was a bright, clean, usable pool the owners were proud of.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/PoolCheckReport/order"
                  className="bg-ink hover:bg-ink text-white px-5 py-3 rounded-lg font-medium text-sm transition-colors"
                >
                  Order Pool Check Report  -  $149 AUD
                </Link>
                <Link
                  href="/BuyerChecklist"
                  className="text-ink-light hover:text-ink px-5 py-3 text-sm font-medium transition-colors"
                >
                  Not sure yet? Start with the Buyer Checklist &rarr;
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/images/hooper-before.jpg"
                  alt="Fibreglass pool before  -  flaking, discoloured surface"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <p className="text-xs text-warm-grey mt-2">Before</p>
              </div>
              <div>
                <Image
                  src="/images/hooper-after.jpg"
                  alt="Same pool after proper assessment and renovation"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <p className="text-xs text-warm-grey mt-2">After</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-deep border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '10+ years', label: 'Hands-on fibreglass pool experience' },
              { stat: '250+', label: 'Fibreglass pools assessed, repaired and resurfaced' },
              { stat: 'Fibreglass only', label: 'Not generic pool advice' },
              { stat: 'Independent', label: 'No sales agenda, no contractor referrals' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-xl font-bold text-white">{item.stat}</div>
                <p className="text-sm text-warm-grey mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-warm-grey">
              For buyers and owners who need fibreglass-specific clarity before they buy, accept a quote, or spend money on repairs or resurfacing.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-ink mb-10">Who This Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-border-warm rounded-xl p-6">
              <h3 className="text-lg font-serif text-ink mb-2">You&apos;re Buying a Property with a Fibreglass Pool</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-4">
                If you&apos;re buying a property with a fibreglass pool, this helps you understand visible condition, likely concerns, and what may deserve closer review before you commit.
              </p>
              <Link href="/BuyingAHouse" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                See how this helps buyers &rarr;
              </Link>
            </div>
            <div className="border border-border-warm rounded-xl p-6">
              <h3 className="text-lg font-serif text-ink mb-2">You Own the Pool and Need Clarity</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-4">
                If you&apos;re seeing cracks, surface wear, staining, roughness, suspected leaks, or resurfacing quotes, this helps you understand what you may actually be dealing with before spending money.
              </p>
              <Link href="/PoolOwner" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                See how this helps owners &rarr;
              </Link>
            </div>
          </div>
          <div className="border border-border-warm rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-warm-grey tracking-wide uppercase mb-1">Additional Service  -  South East Queensland</p>
              <h3 className="text-lg font-serif text-ink">On-Site Assessment</h3>
              <p className="text-ink-light text-sm">In-person inspection for Gold Coast, Brisbane, and surrounding areas. Request-only  -  reviewed manually before booking.</p>
            </div>
            <Link href="/OnSiteAssessment" className="text-sm font-medium text-ink hover:text-accent transition-colors whitespace-nowrap">
              Request Assessment &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What This Helps You Avoid */}
      <section className="bg-warm-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-ink mb-3">What This Helps You Avoid</h2>
          <p className="text-ink-light mb-10 max-w-2xl">
            Fibreglass pool issues are easy to misread. This service helps you avoid expensive assumptions before you buy, accept a quote, or commit to the wrong repair path.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Buying into hidden repair or resurfacing scope', body: 'A pool that looks acceptable in a listing photo can have visible signs that deserve closer review before you buy or negotiate.' },
              { title: 'Accepting a resurfacing quote that excludes key prep', body: 'Some quotes look cheaper because important preparation or repair scope sits outside the quoted price.' },
              { title: 'Assuming a water loss issue is minor', body: 'Some leaks are simple. Others are not. Understanding what you\'re seeing first can prevent wasted spend on guesswork.' },
              { title: 'Underestimating scope that only appears once the pool is drained', body: 'Visible surface symptoms do not always tell the full story. Some issues become clearer only when work begins.' },
              { title: 'Confusing a cosmetic refresh with a larger preparation job', body: 'A fibreglass pool may need more than a visual refresh if underlying condition or previous repairs are poor.' },
              { title: 'Relying on generic pool advice for a fibreglass-specific problem', body: 'Fibreglass pools have their own failure patterns. Generic advice can miss what actually matters.' },
            ].map((item) => (
              <div key={item.title} className="bg-cream border border-border-warm rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-ink text-sm mb-1">{item.title}</h3>
                    <p className="text-ink-light text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started  -  3 product cards */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-ink mb-3">How to Get Started</h2>
          <p className="text-ink-light mb-10">Three ways to get useful information about your fibreglass pool situation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border-warm rounded-xl p-6 hover:border-warm-grey transition-colors">
              <p className="text-xs font-medium text-warm-grey uppercase tracking-wide mb-2">Free</p>
              <h3 className="text-xl font-serif text-ink mb-3">Red Flags Guide</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-6">
                10 warning signs buyers and owners often miss before inspection, quote comparison, or purchase.
              </p>
              <Link href="/RedFlagsGuide" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                Read the guide &rarr;
              </Link>
            </div>
            <div className="border border-border-warm rounded-xl p-6 hover:border-warm-grey transition-colors">
              <p className="text-xs font-medium text-warm-grey uppercase tracking-wide mb-2">$29 AUD</p>
              <h3 className="text-xl font-serif text-ink mb-3">Buyer Checklist</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-6">
                Structured due-diligence tool for buyers who want better questions to ask before purchasing a property with a fibreglass pool.
              </p>
              <Link href="/BuyerChecklist" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                Get the checklist &rarr;
              </Link>
            </div>
            <div className="border-2 border-ink rounded-xl p-6 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-ink text-white text-xs font-medium px-2.5 py-1 rounded-full">Most Popular</span>
              </div>
              <p className="text-xs font-medium text-warm-grey uppercase tracking-wide mb-2">$149 AUD</p>
              <h3 className="text-xl font-serif text-ink mb-3">Pool Check Report</h3>
              <p className="text-ink-light text-sm leading-relaxed mb-6">
                The main decision product. Photo-based fibreglass pool assessment for buyers and owners who want practical clarity before committing.
              </p>
              <Link
                href="/PoolCheckReport/order"
                className="inline-block bg-ink hover:bg-ink-light text-white text-sm px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                Order Report  -  $149 AUD
              </Link>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/About" className="text-sm text-warm-grey hover:text-ink-light transition-colors">
              More about this service &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Need repairs? BRE cross-promo */}
      <section className="bg-warm-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream border border-border-warm rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-ink font-semibold text-sm mb-1">Need fibreglass pool repairs or resurfacing?</p>
              <p className="text-ink-light text-sm">BRE Fibreglass is a Gold Coast specialist in pool resurfacing, osmosis repair, and structural fibreglass work.</p>
            </div>
            <a href="https://brefibreglass.com.au" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-accent font-medium text-sm whitespace-nowrap transition-colors">
              Visit brefibreglass.com.au &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <DarkCTA />
    </>
  )
}
