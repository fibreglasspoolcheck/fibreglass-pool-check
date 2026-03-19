import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool Buyer Inspection Checklist | What to Look For $29',
  description: 'Know what to look for when buying a house with a fibreglass pool. This expert inspection checklist covers surface defects, structural red flags, and questions to ask. Instant download. $29 AUD.',
  alternates: {
    canonical: '/BuyerChecklist',
  },
}

function BuyerChecklistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fibreglass Pool Buyer Checklist",
    "description": "Expert checklist that tells you exactly what to look for when inspecting a fibreglass pool. Covers surface condition, shell integrity, fittings, red flags, and photography tips in plain language.",
    "brand": {
      "@type": "Organization",
      "name": "Fibreglass Pool Check"
    },
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "AUD",
      "url": "/BuyerChecklist/order",
      "availability": "https://schema.org/InStock"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function BuyerChecklist() {
  return (
    <>
      <BuyerChecklistSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reports & Services', url: '/' },
        { name: 'Buyer Checklist', url: '/BuyerChecklist' }
      ]} />
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">For buyers</div>
            <h1 className="text-4xl font-bold mb-4">The checklist that stops you missing the red flags other buyers miss</h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Building inspectors aren&apos;t trained to assess fibreglass pools. This expert checklist walks you through exactly what a specialist would check  -  surface defects, structural red flags, and the questions to ask  -  so you can spot problems before you commit.
            </p>
            <div className="text-3xl font-bold mb-6">$29 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
            <p className="text-slate-400 text-xs mb-4 italic">Instant download. If it doesn't meet your expectations, get in touch and I'll make it right.</p>
            <Link
              href="/BuyerChecklist/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get the Checklist
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-medium text-center">
            <strong>Viewing this weekend?</strong> Instant delivery after purchase  -  have it on your phone before the open home.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's included</h2>
              <div className="space-y-4 mb-8">
                {[
                  'Complete checklist of fibreglass pool inspection points',
                  'What to look for on the pool surface, shell, and fittings',
                  'Common problem signs and what they mean',
                  'Questions to ask the vendor or agent',
                  'Red flags that should trigger further investigation',
                  'Tips on photographing the pool for documentation',
                  'Plain-language guide  -  no technical jargon',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="font-bold text-slate-900 mb-3">Checklist or full report?</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                The checklist is perfect if you're in early stages  -  attending an open home, shortlisting properties, or doing your own pre-offer due diligence.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                If you're under contract or serious about a specific pool, the <Link href="/PoolCheckReport" className="text-orange-600 hover:underline">Pool Check Report ($149)</Link> provides a full expert assessment based on your specific pool's photos.
              </p>
              <Link
                href="/BuyerChecklist/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors mb-3"
              >
                Get the Checklist  -  $29
              </Link>
              <Link
                href="/PoolCheckReport/order"
                className="block border border-slate-300 hover:border-slate-400 text-slate-700 text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
              >
                Order a Report  -  $149
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BRE cross-promo */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-slate-900 font-semibold text-sm mb-1">Need fibreglass pool repairs or resurfacing?</p>
              <p className="text-slate-600 text-sm">BRE Fibreglass is a Gold Coast specialist in pool resurfacing, osmosis repair, and structural fibreglass work.</p>
            </div>
            <a href="https://brefibreglass.com.au" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-orange-600 font-medium text-sm whitespace-nowrap transition-colors">
              Visit brefibreglass.com.au &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Cross-link to Quote Review */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-6 text-center">
            <p className="text-slate-700 text-sm mb-3">
              Already have a repair quote? Get an expert second opinion for $79 →
            </p>
            <Link
              href="/QuoteReview"
              className="inline-block text-orange-600 hover:text-orange-700 font-medium text-sm underline"
            >
              Get a Quote Review
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
