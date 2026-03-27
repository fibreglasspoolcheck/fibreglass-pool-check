import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkHero from '../../components/DarkHero'
import DarkCTA from '../../components/DarkCTA'

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

      <DarkHero
        label="Most popular service"
        title="Know exactly what you're buying before it costs you thousands"
        description="Fibreglass pool repairs can run $5,000 to $30,000+. Building inspectors aren't trained to catch fibreglass-specific issues. Get a detailed, independent assessment from a specialist who's worked on 250+ pools."
        price="$149"
        ctaText="Order Your Report"
        ctaHref="/PoolCheckReport/order"
        guarantee="If my report doesn't give you clear, actionable findings, get in touch and I'll make it right."
      />

      {/* Urgency banner */}
      <section className="bg-deep border-t border-accent/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-warm-grey text-center font-sans">
            <strong className="text-accent">Under contract?</strong> Reports delivered within 2-3 business days, fast enough to act before your finance clause expires.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-warm-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif text-ink mb-6">What's in the report</h2>
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
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-ink mb-6">How it works</h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Place your order', body: 'Pay securely online. You\'ll receive an email confirming your order within minutes.' },
                  { step: '2', title: 'Submit your photos', body: 'Upload photos of the pool following the photo guide. The more I can see, the more thorough the report.' },
                  { step: '3', title: 'Expert assessment', body: 'I review your photos and prepare a detailed written report based on 10+ years of fibreglass pool specialist experience.' },
                  { step: '4', title: 'Receive your report', body: 'Your completed report is delivered within 2-3 business days.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-deep text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{item.title}</div>
                      <div className="text-ink-light text-sm mt-0.5">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-ink mb-8">Who orders this report</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏠', title: 'Pre-purchase buyers', body: 'About to exchange contracts on a property with a fibreglass pool? This report is critical due diligence.' },
              { icon: '🏊', title: 'Pool owners', body: 'Noticing unusual marks, blistering, or discolouration? Find out if it\'s cosmetic or structural before spending on repairs.' },
              { icon: '💰', title: 'Sellers', body: 'Know your pool\'s condition before listing so there are no surprises when buyers do their own due diligence.' },
            ].map((item) => (
              <div key={item.title} className="bg-warm-white border border-border-warm rounded-xl p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-ink mb-2">{item.title}</h3>
                <p className="text-ink-light text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRE cross-promo */}
      <section className="bg-warm-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warm-white border border-border-warm rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
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

      <DarkCTA
        heading="Ready to order?"
        description="Secure payment online. Order confirmation within minutes. Report delivered within 2-3 business days."
        ctaText="Order Report - $149"
        ctaHref="/PoolCheckReport/order"
        guarantee="If my report doesn't give you clear, actionable findings, get in touch and I'll make it right."
      />
    </>
  )
}
