import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Independent Fibreglass Pool Checks & Quote Reviews Australia',
  description: 'Get an independent fibreglass pool inspection report, quote review, or buyer checklist from a specialist with 250+ pools assessed. Australia-wide.',
}

function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fibreglass Pool Check",
    "url": "https://fibreglasspoolcheck.com.au",
    "description": "Independent fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience.",
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
            "name": "Quote Review",
            "description": "Expert second opinion on fibreglass pool repair or resurfacing quotes."
          },
          "price": "79",
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
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Independent — not affiliated with any pool builder
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Fibreglass pool inspection reports<br/>
              <span className="text-orange-500">from an independent specialist.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              I'm Brady — a fibreglass pool specialist with 10+ years hands-on experience and 250+ pools assessed. I provide written reports, quote reviews, and buyer guides so you know exactly what you're getting into before you commit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/PoolCheckReport/order"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Get a Pool Check Report — $149
              </Link>
              <Link
                href="/RedFlagsGuide"
                className="border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Free Red Flags Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency banner for under-contract buyers */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm font-medium text-center sm:text-left">
              <strong>Under contract?</strong> Don't wait — reports delivered within 2–3 business days, fast enough to act before your finance clause expires.
            </p>
            <Link
              href="/PoolCheckReport/order"
              className="bg-white text-orange-700 hover:bg-orange-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Order now
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              250+ pools assessed
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              10+ years experience
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Australia-wide (digital reports)
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Fully independent
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Fibreglass pool assessment services</h2>
          <p className="text-slate-600 mb-12 max-w-xl">Three ways to get expert eyes on a fibreglass pool before you commit your money.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Report */}
            <div className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-2">Most popular</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Pool Check Report</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Submit photos of the pool and get a detailed written assessment covering condition, red flags, and recommendations.
              </p>
              <div className="text-2xl font-bold text-slate-900 mb-4">$149</div>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Order Report
              </Link>
            </div>

            {/* Quote Review */}
            <div className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Resurfacing / Repair</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quote Review</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Already have a repair or resurfacing quote? Get an expert second opinion before you hand over your money.
              </p>
              <div className="text-2xl font-bold text-slate-900 mb-4">$79</div>
              <Link
                href="/QuoteReview/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Order Review
              </Link>
            </div>

            {/* Checklist */}
            <div className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Buyers</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Buyer Checklist</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Doing your own inspection? This expert checklist tells you exactly what to look for when assessing a fibreglass pool.
              </p>
              <div className="text-2xl font-bold text-slate-900 mb-4">$29</div>
              <Link
                href="/BuyerChecklist/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors"
              >
                Get Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why independent matters */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why an independent fibreglass pool inspection matters</h2>
              <div className="space-y-4">
                {[
                  { title: 'No conflicts of interest', body: 'I don\'t sell pool products, do repairs, or take referral fees. My assessment is yours alone.' },
                  { title: 'Specialist knowledge', body: 'Fibreglass pools have failure modes that general building inspectors routinely miss. I know what to look for.' },
                  { title: 'Negotiating power', body: 'A written report gives you documented leverage to renegotiate the price or walk away with confidence.' },
                  { title: 'Fast turnaround', body: 'Reports are delivered within 2–3 business days. No waiting around when you\'re under contract.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                      <div className="text-slate-600 text-sm mt-0.5">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <div className="text-orange-600 text-4xl font-bold mb-2">$149</div>
              <p className="text-slate-600 text-sm mb-6">
                The cost of a Pool Check Report is a fraction of what a surprise repair bill can run — often $5,000–$30,000+.
              </p>
              <p className="text-slate-500 text-xs mb-6 italic">
                If my report doesn't give you clear, actionable findings, get in touch and I'll make it right.
              </p>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center transition-colors font-medium"
              >
                Order a Report
              </Link>
              <p className="text-xs text-slate-400 text-center mt-3">Or <Link href="/RedFlagsGuide" className="underline hover:text-slate-600">get the free Red Flags Guide</Link> first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on experience / credibility */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">10+ years hands-on with fibreglass pools</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Before launching Fibreglass Pool Check, I spent over a decade resurfacing and repairing fibreglass pools across Queensland. That hands-on experience is what makes my assessments different.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Before/after */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src="/images/hooper-before.jpg"
                    alt="Fibreglass pool before renovation — flaking, discoloured surface"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-xs px-2 py-1 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image
                    src="/images/hooper-after.jpg"
                    alt="Same fibreglass pool after professional renovation — smooth, even finish"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-orange-600/90 text-white text-xs px-2 py-1 rounded">After</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50">
                <p className="text-slate-600 text-sm">One of 250+ pools I've worked on. This kind of hands-on experience means I know exactly what to look for in an assessment.</p>
              </div>
            </div>

            {/* Brady on-site */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <Image
                src="/images/Photo of Brady.jpg"
                alt="Brady Smith — fibreglass pool specialist on site"
                width={600}
                height={450}
                priority
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4 bg-slate-50">
                <p className="text-slate-600 text-sm">That's me on site. Not a desk-based consultant — a tradesman who has personally resurfaced, repaired and assessed hundreds of fibreglass pools.</p>
              </div>
            </div>
          </div>

          {/* Testimonial quotes with pool photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                quote: "We bought a house with a pool, and the pool was not all it seemed. Brady displays amazing attention to detail. He loves doing what he does. Even our water carter said he's never seen a better looking renovated pool.",
                name: "Warren & Allison Fowler",
                image: "/images/fowler-after.jpg",
              },
              {
                quote: "My fibreglass pool was an absolute mess. Brady was fantastic, a hard worker with very high standards. In Brady's mind — the job had to be done right — and it certainly was. The pictures tell the story.",
                name: "Russell Walsh",
                location: "Gympie",
                image: "/images/walsh-after.jpg",
              },
              {
                quote: "From our very first contact, we were impressed with the responsiveness and professionalism. The final result is perfect. I can unreservedly recommend Brady for both his quality workmanship and his commitment to customer satisfaction.",
                name: "Michael & Gaynor Hooper",
                location: "Jindalee",
                image: "/images/hooper-after.jpg",
              },
              {
                quote: "Brady arrived on time each day and would work all day without much of a break. I had a lot of osmosis in my pool but no problem for Brady, just got on with the job. My pool on completion looks fantastic.",
                name: "R. Evans",
                image: "/images/evans-after.jpg",
              },
              {
                quote: "Brady's knowledge of the pool industry, methods and equipment used to provide a quality finish was impressive. My pool has been renovated to a quality that will enhance the value of my house.",
                name: "Linton Passmore",
                image: "/images/passmore-after.jpg",
              },
              {
                quote: "My fibreglass pool was in very poor condition and Brady gave me excellent advice and very personal service. The final result looks fabulous.",
                name: "Andrew Newcombe",
                location: "Noosa Heads",
                image: "/images/newcombe-after.jpg",
              },
              {
                quote: "We approached resurfacing our grotty old pool with some trepidation. Brady worked hard to guide us through the process and the pool now looks fantastic. The original quote was very competitive.",
                name: "Glen & Tracey Leeder",
                image: "/images/leeder-after.jpg",
              },
              {
                quote: "The work was long and tiring but everything was exactly right to achieve an excellent result. The pool was meticulously resurfaced with the utmost professionalism.",
                name: "R. & C. Lumsford",
                location: "Nanango",
                image: "/images/lumsford-after.jpg",
              },
              {
                quote: "Our pool had lost its gloss, stains were appearing, and severe osmosis was all over the shell. Brady came to visit, saw the problem firsthand, and explained in detail what he could do. In just four days they had turned one very sad looking little pool into a sparkling gem.",
                name: "Leanne & Les Fleet",
                location: "Mary Valley",
                image: "/images/maryvalley-after.jpg",
              },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={`Fibreglass pool renovated by Brady — ${item.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <svg className="w-5 h-5 text-orange-600/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">{item.quote}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">{item.name}</span>
                    {item.location && <span className="text-slate-400 ml-1">— {item.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/About" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              More about my background →
            </Link>
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Real assessments. Real results.</h2>
          <p className="text-slate-600 mb-10">What independent assessment looks like in practice.</p>
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-2">Case study — Mary Valley, QLD</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Pool appeared sound. Wasn’t.</h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
              A buyer under contract on a property in the Mary Valley contacted me after their building inspector gave the pool a clean bill of health. My assessment found significant osmotic blistering and structural concerns that would have cost tens of thousands to repair.
            </p>
            <Link href="/About" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              Learn more about my approach →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get a fibreglass pool condition report before you buy</h2>
          <p className="text-slate-300 mb-4 max-w-xl mx-auto">
            An independent assessment before you buy — or before you pay for repairs — is the smartest $149 you'll spend.
          </p>
          <p className="text-slate-400 text-sm mb-8 max-w-lg mx-auto italic">
            If my report doesn't give you clear, actionable findings, get in touch and I'll make it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/PoolCheckReport/order"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Pool Check Report
            </Link>
            <Link
              href="/FAQ"
              className="border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
