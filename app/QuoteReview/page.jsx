import Link from 'next/link'

export const metadata = {
  title: 'Fibreglass Pool Repair & Resurfacing Quote Review',
  description: 'Get an independent expert review of your fibreglass pool repair or resurfacing quote. Find out if the work and price are fair before you commit. $79 AUD.',
}

function QuoteReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quote Review",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "description": "Independent expert review of fibreglass pool repair or resurfacing quotes. Assesses whether the recommended work is necessary, the scope is appropriate, materials and methods are correct, and the price is within market range.",
    "serviceType": "Pool Repair Quote Assessment",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "AUD",
      "url": "https://app.fibreglasspoolcheck.com.au/QuoteReview",
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

export default function QuoteReview() {
  return (
    <>
      <QuoteReviewSchema />
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">Repair & resurfacing</div>
            <h1 className="text-4xl font-bold mb-4">Quote Review</h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Already have a quote for fibreglass pool repairs or resurfacing? Before you sign anything, get an independent expert opinion on whether the scope of work and price are fair.
            </p>
            <div className="text-3xl font-bold mb-6">$79 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
            <p className="text-slate-400 text-xs mb-4 italic">If my review doesn't give you clear, actionable findings, get in touch and I'll make it right.</p>
            <Link
              href="https://app.fibreglasspoolcheck.com.au/QuoteReview"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order a Quote Review
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What I assess</h2>
              <div className="space-y-4">
                {[
                  'Is the recommended work actually necessary?',
                  'Is the scope of work appropriate for the problem?',
                  'Are the materials and methods specified appropriate?',
                  'Is the price within the expected market range?',
                  'Are there any warning signs in how the quote is written?',
                  'What questions should you be asking the contractor?',
                  'Are there alternatives worth considering?',
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

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How it works</h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Place your order', body: 'Pay securely online and you\'ll receive an order confirmation immediately.' },
                  { step: '2', title: 'Upload your quote(s)', body: 'Send me the quote documents and any photos of the pool you have. Up to 3 quotes can be reviewed.' },
                  { step: '3', title: 'Expert review', body: 'I assess the quotes against real-world knowledge of fibreglass pool repair costs, methods and common contractor practices.' },
                  { step: '4', title: 'Receive your review', body: 'Your written review is delivered within 2-3 business days with clear, plain-English guidance.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                      <div className="text-slate-600 text-sm mt-0.5">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't overpay for pool work</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Fibreglass pool resurfacing can cost anywhere from $5,000 to $20,000+. An independent review of your quote costs $79. The maths makes sense.
            </p>
            <Link
              href="https://app.fibreglasspoolcheck.com.au/QuoteReview"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order Quote Review — $79
            </Link>
            <p className="text-slate-500 text-xs mt-3 italic">If my review doesn't give you clear, actionable findings, get in touch and I'll make it right.</p>
          </div>
        </div>
      </section>
    </>
  )
}
