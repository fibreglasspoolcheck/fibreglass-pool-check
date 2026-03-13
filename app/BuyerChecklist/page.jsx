import Link from 'next/link'

export const metadata = {
  title: 'Fibreglass Pool Buyer Checklist | What to Look For',
  description: 'Our expert buyer checklist tells you exactly what to look for when inspecting a fibreglass pool yourself. Instant download. $29 AUD.',
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
      "url": "https://app.fibreglasspoolcheck.com.au/BuyerChecklist",
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
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">For buyers</div>
            <h1 className="text-4xl font-bold mb-4">Fibreglass Pool Buyer Checklist</h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Inspecting a property with a fibreglass pool? Know exactly what to look for. Our expert checklist walks you through everything a specialist would check — in plain language.
            </p>
            <div className="text-3xl font-bold mb-6">$29 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
            <Link
              href="https://app.fibreglasspoolcheck.com.au/BuyerChecklist"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get the Checklist
            </Link>
          </div>
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
                  'Plain-language guide — no technical jargon',
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
                The checklist is perfect if you're in early stages — attending an open home, shortlisting properties, or doing your own pre-offer due diligence.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                If you're under contract or serious about a specific pool, the <Link href="/PoolCheckReport" className="text-orange-600 hover:underline">Pool Check Report ($149)</Link> provides a full expert assessment based on your specific pool's photos.
              </p>
              <Link
                href="https://app.fibreglasspoolcheck.com.au/BuyerChecklist"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors mb-3"
              >
                Get the Checklist — $29
              </Link>
              <Link
                href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport"
                className="block border border-slate-300 hover:border-slate-400 text-slate-700 text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
              >
                Order a Report — $149
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
