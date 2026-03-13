import Link from 'next/link'

export const metadata = {
  title: 'About Fibreglass Pool Check | Independent Fibreglass Pool Specialist',
  description: 'Meet Brady, the independent fibreglass pool specialist behind Fibreglass Pool Check. 10+ years experience, 250+ pools assessed across Australia.',
}

function AboutSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brady Smith',
    jobTitle: 'Fibreglass Pool Specialist',
    description: 'Independent fibreglass pool specialist with 10+ years hands-on experience and 250+ pools assessed across Australia.',
    worksFor: {
      '@type': 'ProfessionalService',
      name: 'Fibreglass Pool Check',
      url: 'https://fibreglasspoolcheck.com.au',
    },
    knowsAbout: [
      'Fibreglass pool inspection',
      'Fibreglass pool resurfacing',
      'Osmotic blistering assessment',
      'Pool condition assessment',
      'Fibreglass pool delamination',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function About() {
  return (
    <>
      <AboutSchema />
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">About Fibreglass Pool Check</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Independent assessment from a specialist who has spent over a decade working with fibreglass pools — not selling them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-24 h-24 bg-slate-200 rounded-full mb-6 overflow-hidden">
                <img
                  src="https://media.base44.com/0f905ecb1_BradyFounderPhoto.png"
                  alt="Brady — fibreglass pool specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Brady</h2>
              <div className="text-orange-600 text-sm font-medium mb-4">Fibreglass Pool Specialist</div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fibreglass Pool Check exists because buyers keep getting burned. Standard building inspectors routinely miss the specific failure modes that fibreglass pools are prone to — and the repair bills that follow can run into tens of thousands of dollars.
                </p>
                <p>
                  With over 10 years working hands-on with fibreglass pools and 250+ assessments completed, I provide the independent expertise that buyers, owners and sellers need to make informed decisions.
                </p>
                <p>
                  I have no affiliation with pool builders, contractors or suppliers. My assessment is yours alone.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">By the numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '250+', label: 'Pools assessed' },
                    { stat: '10+', label: 'Years experience' },
                    { stat: 'AUS-wide', label: 'Digital reports' },
                    { stat: '100%', label: 'Independent' },
                  ].map((item) => (
                    <div key={item.label} className="text-center py-4 border border-slate-200 rounded-lg bg-white">
                      <div className="text-2xl font-bold text-slate-900">{item.stat}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Case study: Mary Valley, QLD</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  A buyer under contract contacted us after a standard building inspection gave their pool a clean pass. Our specialist assessment identified significant osmotic blistering and early signs of delamination — repairs that would have cost tens of thousands of dollars.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Armed with the written report, the buyer renegotiated the purchase price and proceeded with the purchase on much better terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Completely independent', body: 'No affiliation with any pool builder, contractor, or supplier. We have no financial interest in what you decide to do with your pool.' },
              { title: 'Specialist knowledge only', body: 'We assess fibreglass pools only. This focus means our knowledge is deeper and more current than any generalist inspector.' },
              { title: 'Plain language', body: 'Our reports are written to be understood by people who are not pool experts. No jargon — just clear findings and actionable guidance.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto text-sm">
            Order a report, review your quote, or grab the free Red Flags Guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order a Pool Check Report
            </Link>
            <Link
              href="/Contact"
              className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
