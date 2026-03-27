import Link from 'next/link'
import DarkCTA from '../../components/DarkCTA'
import ContentSidebar from '../../components/ContentSidebar'

export const metadata = {
  title: 'On-Site Fibreglass Pool Assessment | South East Queensland',
  description: 'In-person fibreglass pool assessment from an independent specialist. Available in South East Queensland. Request-based service.',
  alternates: {
    canonical: '/OnSiteAssessment',
  },
}

function OnSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "On-Site Pool Assessment",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "description": "Comprehensive in-person inspection of a fibreglass pool by an independent specialist. Includes physical surface assessment, equipment observation, detailed findings discussion, and written report.",
    "serviceType": "On-Site Fibreglass Pool Inspection",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -27.4698,
        "longitude": 153.0251
      },
      "geoRadius": "150000",
      "description": "South East Queensland"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function OnSiteAssessment() {
  return (
    <>
      <OnSiteSchema />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">South East Queensland only</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">On-Site Pool Assessment</h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              An in-person specialist inspection of your fibreglass pool. Available in South East Queensland by request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl text-ink mb-6">About the on-site assessment</h2>
                <div className="space-y-4 text-ink-light leading-relaxed text-sm">
                  <p>
                    My on-site assessment is a comprehensive in-person inspection of your fibreglass pool. Unlike a photo-based report, the on-site assessment allows for physical examination  -  assessing surface texture by touch, testing fittings, and observing the pool from multiple angles including water level assessment.
                  </p>
                  <p>
                    This service is available in South East Queensland only and operates on a request basis. Availability depends on location and scheduling, and cannot be guaranteed.
                  </p>
                  <p>
                    If you're outside SEQ, my <Link href="/PoolCheckReport" className="text-accent hover:underline">Pool Check Report ($149)</Link> is available Australia-wide and provides a thorough specialist assessment based on your photos.
                  </p>
                </div>

                <h3 className="font-serif text-lg text-ink mt-8 mb-4">What's covered on-site</h3>
                <div className="space-y-3">
                  {[
                    'Full visual inspection of pool shell, surface, and fittings',
                    'Physical assessment of surface condition and texture',
                    'Water level and equipment observation',
                    'Detailed discussion of findings on the day',
                    'Written report following the inspection',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-ink-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-border-warm rounded-xl p-6">
                  <h3 className="font-serif text-ink mb-2">Request-based service</h3>
                  <p className="text-ink-light text-sm leading-relaxed">
                    On-site assessments are not available for immediate online booking. Contact me to discuss your location, timeline, and requirements. I'll let you know availability and pricing specific to your situation.
                  </p>
                </div>

                <div className="bg-white border border-border-warm rounded-xl p-6">
                  <h3 className="font-serif text-ink mb-3">Not in SEQ?</h3>
                  <p className="text-ink-light text-sm leading-relaxed mb-4">
                    My photo-based Pool Check Report is available Australia-wide and is the recommended option for most buyers and pool owners outside SEQ.
                  </p>
                  <Link
                    href="/PoolCheckReport/order"
                    className="block bg-deep hover:bg-ink text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
                  >
                    Order a Pool Check Report  -  $149
                  </Link>
                </div>

                <div className="bg-white border border-border-warm rounded-xl p-6">
                  <h3 className="font-serif text-ink mb-3">Request an on-site assessment</h3>
                  <p className="text-ink-light text-sm mb-4">Tell me your location and what you need and I'll be in touch.</p>
                  <Link
                    href="/Contact"
                    className="block bg-deep hover:bg-ink text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
                  >
                    Submit a Request
                  </Link>
                </div>
              </div>
            </div>
            <ContentSidebar />
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
