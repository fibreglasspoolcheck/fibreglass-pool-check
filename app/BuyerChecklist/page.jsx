import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import MobileStickyBar from '../../components/MobileStickyBar'

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
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">DIY inspection guide</div>
              <h1 className="text-4xl font-bold mb-4">Inspect the pool yourself, like a specialist would</h1>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                A missed fibreglass pool defect can cost <strong className="text-white">$5,000 to $20,000+</strong> in repairs. This step-by-step checklist, written by a specialist with 10+ years and 250+ pools assessed, tells you exactly what to look for, what to photograph, and when to walk away.
              </p>
              <div className="text-3xl font-bold mb-6">$29 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
              <div id="hero-cta">
                <Link
                  href="/BuyerChecklist/order"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get the Checklist
                </Link>
              </div>
              <p className="text-slate-400 text-xs mt-3 italic">Not what you expected? Get in touch and I&apos;ll make it right.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/checklist-mockup.svg"
                alt="Fibreglass Pool Buyer Checklist shown on a phone screen"
                width={500}
                height={600}
                priority
                unoptimized
                className="w-full max-w-sm h-auto rounded-2xl"
              />
              <p className="text-slate-400 text-xs text-center mt-3">Instant download. Use on your phone at the open home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-medium text-center">
            <strong>Viewing this weekend?</strong> Instant delivery after purchase. Have it on your phone before the open home.
          </p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s inside</h2>
                <div className="space-y-4">
                  {[
                    'The surface patterns that indicate hidden structural damage',
                    'How to tell cosmetic wear from problems that cost thousands',
                    'Fitting and plumbing checks most buyers overlook',
                    'The questions vendors and agents don\u2019t want you to ask',
                    'Red flags that mean \u201Cget a specialist, or walk away\u201D',
                    'Exactly what to photograph and why it matters later',
                    'Written in plain language, no technical jargon',
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
                    { step: '1', title: 'Place your order', body: 'Enter your name and email, pay securely via Stripe.' },
                    { step: '2', title: 'Instant delivery', body: 'Your checklist PDF is delivered to your inbox immediately.' },
                    { step: '3', title: 'Use it at the open home', body: 'Pull it up on your phone and work through each checkpoint at the property.' },
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Need more than a checklist?</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Pool Check Report</div>
                    <div className="text-orange-600 font-bold mb-2">$149</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Submit photos, get a written report covering condition, defects, and recommendations. 2-3 business days.</p>
                    <Link
                      href="/PoolCheckReport/order"
                      className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Report
                    </Link>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Free Red Flags Guide</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">10 warning signs every pool buyer should know.</p>
                    <Link
                      href="/RedFlagsGuide"
                      className="block text-orange-600 hover:text-orange-700 text-center py-2 px-4 rounded-lg text-sm font-medium border border-orange-300 hover:border-orange-400 transition-colors"
                    >
                      Get Free Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Not sure which is right for you?</h2>
          <p className="text-slate-600 mb-8">The checklist is your starting point. The report is the deep dive.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-900 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">You&apos;re here</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Buyer Checklist</h3>
              <div className="text-orange-600 font-bold text-lg mb-3">$29</div>
              <p className="text-slate-500 text-xs mb-4">Best for: early-stage buyers attending open homes</p>
              <div className="space-y-2">
                {[
                  'Self-guided inspection',
                  'Use at multiple properties',
                  'Know what to photograph',
                  'Instant download',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-orange-600 text-sm">&#10003;</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-1">Pool Check Report</h3>
              <div className="text-orange-600 font-bold text-lg mb-3">$149</div>
              <p className="text-slate-500 text-xs mb-4">Best for: serious buyers or under contract</p>
              <div className="space-y-2 mb-6">
                {[
                  'Expert photo-based assessment',
                  'Written condition report',
                  'Red flags and recommendations',
                  'Use in price negotiations',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-orange-600 text-sm">&#10003;</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Order Report Instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to inspect with confidence?</h2>
            <p className="text-slate-300 mb-6 max-w-md mx-auto text-sm">
              Secure payment via Stripe. Checklist delivered to your inbox instantly.
            </p>
            <Link
              href="/BuyerChecklist/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get the Checklist
            </Link>
            <p className="text-slate-400 text-xs mt-3 italic">Not what you expected? Get in touch and I&apos;ll make it right.</p>
            <p className="text-xs text-slate-500 mt-4">
              Questions first? <Link href="/faq" className="underline hover:text-slate-300">Read the FAQ</Link> or <Link href="/Contact" className="underline hover:text-slate-300">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile sticky buy bar */}
      <MobileStickyBar targetId="hero-cta" />
    </>
  )
}
