import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import MobileStickyBar from '../../components/MobileStickyBar'
import DarkCTA from '../../components/DarkCTA'

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
      "url": "https://fibreglasspoolcheck.com.au/BuyerChecklist/order",
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

      {/* Hero */}
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">
              DIY inspection guide
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Inspect the pool yourself, like a specialist would
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed mb-6">
              A missed fibreglass pool defect can cost <strong className="text-white">$5,000 to $20,000+</strong> in repairs. This step-by-step checklist, written by a specialist with 10+ years and 250+ pools assessed, tells you exactly what to look for, what to photograph, and when to walk away.
            </p>
            <div className="text-3xl font-bold text-white mb-6">
              $29 <span className="text-warm-grey text-lg font-normal">AUD</span>
            </div>
            <div id="hero-cta">
              <Link
                href="/BuyerChecklist/order"
                className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold font-sans transition-colors"
              >
                Get the Checklist
              </Link>
            </div>
            <p className="text-warm-grey text-xs mt-3 italic">Not what you expected? Get in touch and I&apos;ll make it right.</p>
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="bg-deep border-t border-accent/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-warm-grey text-center font-sans">
            <strong className="text-accent">Viewing this weekend?</strong> Instant delivery after purchase. Have it on your phone before the open home.
          </p>
        </div>
      </section>

      {/* Main content - full width 2-column */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <h2 className="font-serif text-2xl text-ink mb-6">What&apos;s inside</h2>
              <div className="space-y-4">
                {[
                  'The surface patterns that indicate hidden structural damage',
                  'How to tell cosmetic wear from problems that cost thousands',
                  'Fitting and plumbing checks most buyers overlook',
                  'The questions vendors and agents don\u2019t want you to ask',
                  'Red flags that mean \u201CGet a specialist, or walk away\u201D',
                  'Exactly what to photograph and why it matters later',
                  'Written in plain language, no technical jargon',
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
              <h2 className="font-serif text-2xl text-ink mb-6">How it works</h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Place your order', body: 'Enter your name and email, pay securely via Stripe.' },
                  { step: '2', title: 'Instant delivery', body: 'Your checklist PDF is delivered to your inbox immediately.' },
                  { step: '3', title: 'Use it at the open home', body: 'Pull it up on your phone and work through each checkpoint at the property.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-deep text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{item.title}</div>
                      <div className="text-warm-grey text-sm mt-0.5">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-ink mb-2">Not sure which is right for you?</h2>
          <p className="text-warm-grey mb-8">The checklist is your starting point. The report is the deep dive.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-ink rounded-xl p-6 relative">
              <span className="absolute -top-3 left-4 bg-deep text-white text-xs font-medium px-3 py-1 rounded-full">You&apos;re here</span>
              <h3 className="font-serif text-ink mb-1">Buyer Checklist</h3>
              <div className="text-accent font-bold text-lg mb-3">$29</div>
              <p className="text-warm-grey text-xs mb-4">Best for: early-stage buyers attending open homes</p>
              <div className="space-y-2">
                {[
                  'Self-guided inspection',
                  'Use at multiple properties',
                  'Know what to photograph',
                  'Instant download',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-accent text-sm">&#10003;</span>
                    <span className="text-ink-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border-warm bg-cream rounded-xl p-6">
              <h3 className="font-serif text-ink mb-1">Pool Check Report</h3>
              <div className="text-accent font-bold text-lg mb-3">$149</div>
              <p className="text-warm-grey text-xs mb-4">Best for: serious buyers or under contract</p>
              <div className="space-y-2 mb-6">
                {[
                  'Expert photo-based assessment',
                  'Written condition report',
                  'Red flags and recommendations',
                  'Use in price negotiations',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-accent text-sm">&#10003;</span>
                    <span className="text-ink-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-deep hover:bg-deep/90 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Order Report Instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <DarkCTA
        heading="Ready to inspect with confidence?"
        description="Secure payment via Stripe. Checklist delivered to your inbox instantly."
        ctaText="Get the Checklist - $29"
        ctaHref="/BuyerChecklist/order"
        guarantee="Not what you expected? Get in touch and I'll make it right."
      />

      {/* Mobile sticky buy bar */}
      <MobileStickyBar targetId="hero-cta" />
    </>
  )
}
