import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Independent Fibreglass Pool Checks & Quote Reviews Australia',
  description: 'Get an independent fibreglass pool inspection report, quote review, or buyer checklist from a specialist with 250+ pools assessed. Australia-wide.',
}

function HomeSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Fibreglass Pool Check',
    url: 'https://fibreglasspoolcheck.com.au',
    description: 'Independent fibreglass pool assessment and decision support for buyers and owners across Australia.',
    areaServed: {
      '@type': 'Country',
      name: 'Australia',
    },
    founder: {
      '@type': 'Person',
      name: 'Brady Smith',
      jobTitle: 'Fibreglass Pool Specialist',
    },
    serviceType: 'Fibreglass Pool Inspection',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fibreglass Pool Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pool Check Report',
            description: 'Detailed written assessment of a fibreglass pool based on submitted photos.',
          },
          price: '149',
          priceCurrency: 'AUD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quote Review',
            description: 'Independent second opinion on fibreglass pool repair or resurfacing quotes.',
          },
          price: '79',
          priceCurrency: 'AUD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Checklist',
            description: 'Expert checklist for inspecting a fibreglass pool before purchase.',
          },
          price: '29',
          priceCurrency: 'AUD',
        },
      ],
    },
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
              Know exactly what you’re<br/>
              <span className="text-orange-500">getting into</span> before you buy.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
              Independent fibreglass pool assessments from Brady — a specialist with 10+ years experience and 250+ pools assessed. Written reports, quote reviews, and buyer guides delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport"
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What we offer</h2>
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
              <Link href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport" className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors">
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
              <Link href="https://app.fibreglasspoolcheck.com.au/QuoteReview" className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors">
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
                Doing your own inspection? Our expert checklist tells you exactly what to look for when assessing a fibreglass pool.
              </p>
              <div className="text-2xl font-bold text-slate-900 mb-4">$29</div>
              <Link href="https://app.fibreglasspoolcheck.com.au/BuyerChecklist" className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg text-center transition-colors">
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why independent matters</h2>
              <div className="space-y-4">
                {[
                  { title: 'No conflicts of interest', body: 'We don\'t sell pool products, do repairs, or take referral fees. Our assessment is yours alone.' },
                  { title: 'Specialist knowledge', body: 'Fibreglass pools have failure modes that general building inspectors routinely miss. We know what to look for.' },
                  { title: 'Negotiating power', body: 'A written report gives you documented leverage to renegotiate the price or walk away with confidence.' },
                  { title: 'Fast turnaround', body: 'Reports are delivered within 2\u20133 business days. No waiting around when you\'re under contract.' },
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
              <Link href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport" className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center transition-colors font-medium">
                Order a Report
              </Link>
              <p className="text-xs text-slate-400 text-center mt-3">Or <Link href="/RedFlagsGuide" className="underline hover:text-slate-600">get the free Red Flags Guide</Link> first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Real assessments. Real results.</h2>
          <p className="text-slate-600 mb-10">What independent assessment looks like in practice.</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-2">Case study — Mary Valley, QLD</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Pool appeared sound. Wasn’t.</h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
              A buyer under contract on a property in the Mary Valley contacted us after their building inspector gave the pool a clean bill of health. Our specialist assessment found significant osmotic blistering and structural concerns that would have cost tens of thousands to repair.
            </p>
            <Link href="/About" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              Learn more about our approach &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don’t guess. Get a report.</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            An independent assessment before you buy — or before you pay for repairs — is the smartest $149 you’ll spend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport"
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
