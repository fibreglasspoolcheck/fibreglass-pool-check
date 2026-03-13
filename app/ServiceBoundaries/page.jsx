import Link from 'next/link'

export const metadata = {
  title: 'Service Scope & Boundaries | Fibreglass Pool Check',
  description: 'Understanding what Fibreglass Pool Check does and doesn\'t cover — service scope, limitations, and what to expect from each assessment type.',
}

export default function ServiceBoundaries() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-orange-400 text-sm font-medium mb-4 uppercase tracking-wide">Service Scope</p>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">What we do — and don't — cover</h1>
            <p className="text-slate-300 leading-relaxed">
              We're upfront about the scope and limitations of each service. This page explains what you can expect and what falls outside what we provide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-12">

            {/* What we are */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What Fibreglass Pool Check is</h2>
              <div className="space-y-3">
                {[
                  'An independent assessment service — we have no commercial relationships with builders or repairers',
                  'A specialist opinion based on photos, documentation, or on-site inspection',
                  'A written report summarising findings and recommendations in plain language',
                  'A quote review service for resurfacing and repair quotes',
                  'A resource to help you make more informed decisions about a pool purchase or maintenance',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What we are not */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What Fibreglass Pool Check is not</h2>
              <div className="space-y-3">
                {[
                  'A licensed structural engineer or building inspector — our reports are specialist assessments, not structural certifications',
                  'A pool repairer or resurfacer — we do not carry out remediation work',
                  'A real estate agent or solicitor — our reports are informational and should be considered alongside professional legal and property advice',
                  'A substitute for a formal pre-purchase inspection where your contract requires one',
                  'Able to inspect components that are buried, concealed, or otherwise inaccessible from the pool interior or equipment bay',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-slate-400 font-bold mt-0.5">–</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo-based report limitations */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations of photo-based assessments</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Pool Check Report is based on photos submitted by you. While we're experienced at identifying issues from photos, there are inherent limitations:
              </p>
              <ul className="space-y-2 text-slate-600">
                {[
                  'We can only assess what is visible in the photos provided',
                  'Some issues (particularly osmotic blistering) may require physical inspection to confirm',
                  'Equipment can only be assessed from what is visible — internal component condition requires hands-on testing',
                  'Water clarity affects our ability to assess the pool floor and lower shell areas',
                  'We may request additional photos if the initial submission is insufficient',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-600 mt-1">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Geographic */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Geographic scope</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                  <h3 className="font-semibold text-green-800 mb-2">Australia-wide</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>✓ Pool Check Report (photo-based)</li>
                    <li>✓ Quote Review</li>
                    <li>✓ Buyer Checklist</li>
                    <li>✓ Red Flags Guide</li>
                  </ul>
                </div>
                <div className="border border-slate-200 bg-slate-50 rounded-xl p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">South East Queensland only</h3>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>✓ On-Site Assessment</li>
                  </ul>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">SEQ includes Brisbane, Gold Coast, Sunshine Coast, Ipswich, and surrounds.</p>
                </div>
              </div>
            </div>

            {/* Not a guarantee */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Important note</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our assessments represent our specialist opinion based on the information available at the time. They are not guarantees of condition or performance. We recommend using our reports as one input into your decision-making, alongside other professional advice as appropriate for your situation.
              </p>
            </div>

            <div>
              <Link
                href="/Contact"
                className="inline-block border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Have a question about scope? Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
