import Link from 'next/link'

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
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">South East Queensland only</div>
            <h1 className="text-4xl font-bold mb-4">On-Site Pool Assessment</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              An in-person specialist inspection of your fibreglass pool. Available in South East Queensland by request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About the on-site assessment</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  My on-site assessment is a comprehensive in-person inspection of your fibreglass pool. Unlike a photo-based report, the on-site assessment allows for physical examination  -  assessing surface texture by touch, testing fittings, and observing the pool from multiple angles including water level assessment.
                </p>
                <p>
                  This service is available in South East Queensland only and operates on a request basis. Availability depends on location and scheduling, and cannot be guaranteed.
                </p>
                <p>
                  If you're outside SEQ, my <Link href="/PoolCheckReport" className="text-orange-600 hover:underline">Pool Check Report ($149)</Link> is available Australia-wide and provides a thorough specialist assessment based on your photos.
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">What's covered on-site</h3>
              <div className="space-y-3">
                {[
                  'Full visual inspection of pool shell, surface, and fittings',
                  'Physical assessment of surface condition and texture',
                  'Water level and equipment observation',
                  'Detailed discussion of findings on the day',
                  'Written report following the inspection',
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

            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Request-based service</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  On-site assessments are not available for immediate online booking. Contact me to discuss your location, timeline, and requirements. I'll let you know availability and pricing specific to your situation.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Not in SEQ?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  My photo-based Pool Check Report is available Australia-wide and is the recommended option for most buyers and pool owners outside SEQ.
                </p>
                <Link
                  href="/PoolCheckReport/order"
                  className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
                >
                  Order a Pool Check Report  -  $149
                </Link>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Request an on-site assessment</h3>
                <p className="text-slate-600 text-sm mb-4">Tell me your location and what you need and I'll be in touch.</p>
                <Link
                  href="/Contact"
                  className="block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-3 rounded-lg text-center font-medium transition-colors"
                >
                  Submit a Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
