import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool Inspection Report | Independent Assessment $149',
  description: 'Get a detailed fibreglass pool inspection report before you buy. Submit photos, receive an independent written assessment of pool condition, defects, and repair costs within 2-3 business days. $149 AUD.',
  alternates: {
    canonical: '/PoolCheckReport',
  },
}

function PoolCheckReportSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pool Check Report",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "description": "A comprehensive written assessment of a fibreglass pool's condition based on photos you submit. Covers surface defects, osmotic blistering, delamination, structural integrity, equipment condition, and actionable recommendations.",
    "serviceType": "Fibreglass Pool Inspection Report",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "AUD",
      "url": "https://fibreglasspoolcheck.com.au/PoolCheckReport/order",
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

export default function PoolCheckReport() {
  return (
    <>
      <PoolCheckReportSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reports & Services', url: '/' },
        { name: 'Pool Check Report', url: '/PoolCheckReport' }
      ]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">Most popular service</div>
            <h1 className="text-4xl font-bold mb-4">Know exactly what you&apos;re buying before it costs you thousands</h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Fibreglass pool repairs can run $5,000–$30,000+. Building inspectors aren&apos;t trained to catch fibreglass-specific issues. Get a detailed, independent assessment from a specialist who&apos;s worked on 250+ pools  -  delivered within 2–3 business days.
            </p>
            <div className="text-3xl font-bold mb-6">$149 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
            <p className="text-slate-400 text-xs mb-4 italic">If my report doesn't give you clear, actionable findings, get in touch and I'll make it right.</p>
            <Link
              href="/PoolCheckReport/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order Your Report
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-medium text-center">
            <strong>Under contract?</strong> Reports delivered within 2–3 business days  -  fast enough to act before your finance clause expires.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What's in the report</h2>
              <div className="space-y-4">
                {[
                  'Overall pool condition assessment and rating',
                  'Identification of surface defects, osmotic blistering, delamination',
                  'Structural integrity observations',
                  'Equipment and fitting condition notes',
                  'Identified red flags and risk items',
                  'Actionable recommendations',
                  'Estimated urgency and priority of any repairs',
                  'Plain-English summary  -  no jargon',
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
                  { step: '1', title: 'Place your order', body: 'Pay securely online. You\'ll receive an email confirming your order within minutes.' },
                  { step: '2', title: 'Submit your photos', body: 'Upload photos of the pool following the photo guide. The more I can see, the more thorough the report.' },
                  { step: '3', title: 'Expert assessment', body: 'I review your photos and prepare a detailed written report based on 10+ years of fibreglass pool specialist experience.' },
                  { step: '4', title: 'Receive your report', body: 'Your completed report is delivered within 2-3 business days.' },
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

      {/* Who it's for */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Who orders this report</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏠', title: 'Pre-purchase buyers', body: 'About to exchange contracts on a property with a fibreglass pool? This report is critical due diligence.' },
              { icon: '🏊', title: 'Pool owners', body: 'Noticing unusual marks, blistering, or discolouration? Find out if it\'s cosmetic or structural before spending on repairs.' },
              { icon: '💰', title: 'Sellers', body: 'Know your pool\'s condition before listing so there are no surprises when buyers do their own due diligence.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
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

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to order?</h2>
            <p className="text-slate-300 mb-6 max-w-md mx-auto text-sm">
              Secure payment online. Order confirmation within minutes. Report delivered within 2-3 business days.
            </p>
            <Link
              href="/PoolCheckReport/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order Report → $149
            </Link>
            <p className="text-slate-400 text-xs mt-3 italic">If my report doesn't give you clear, actionable findings, get in touch and I'll make it right.</p>
            <p className="text-xs text-slate-500 mt-4">
              Questions first? <Link href="/faq" className="underline hover:text-slate-300">Read the FAQ</Link> or <Link href="/Contact" className="underline hover:text-slate-300">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
