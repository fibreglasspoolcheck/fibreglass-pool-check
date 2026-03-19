import Link from 'next/link'

export const metadata = {
  title: 'Buying a House with a Fibreglass Pool | What You Need to Know',
  description: 'A fibreglass pool can add value  -  or cost a fortune. Here\'s what every buyer needs to know before purchasing a home with a fibreglass pool in Australia.',
  alternates: {
    canonical: '/BuyingAHouse',
  },
}

export default function BuyingAHouse() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 text-sm font-medium mb-4 uppercase tracking-wide">Buyer's Guide</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Buying a house with a fibreglass pool?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A pool is often one of the most significant assets on a property  -  but it can also become one of the most expensive surprises. Here's what you need to know before you sign.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The opportunity and the risk</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A well-maintained fibreglass pool is a genuine asset. It adds lifestyle value, can support property resale, and  -  compared to concrete  -  is relatively low maintenance and long-lasting.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  But a fibreglass pool in poor condition is a different story. Resurfacing, structural repairs, and equipment replacement can run into the tens of thousands. And because most of the shell is below waterline and hidden by water, serious issues aren't always visible on a casual inspection.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What standard building inspections miss</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Standard building and pest inspections rarely include pools, and when they do, it's typically a visual-only check. This means issues like:
                </p>
                <ul className="space-y-2 text-slate-600">
                  {[
                    'Shell delamination (the outer gel coat separating from the laminate)',
                    'Osmotic blistering below the waterline',
                    'Structural cracking or ground movement damage',
                    'Failed bonding between fittings and shell',
                    'End-of-life equipment that will need immediate replacement',
                    'Non-compliant fencing or safety barriers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed mt-4">
                  ...can easily go undetected  -  and unmentioned in any pre-purchase documentation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to ask the vendor or agent</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Before making an offer  -  or at minimum before settlement  -  ask specifically:
                </p>
                <div className="space-y-3">
                  {[
                    'When was the pool last resurfaced?',
                    'Has the shell had any repairs? If so, what and when?',
                    'What is the age and service history of the equipment?',
                    'Are there any known leaks or drainage issues?',
                    'Is the fencing and safety barrier council-compliant?',
                    'Are there copies of any previous inspection or service reports?',
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <span className="text-orange-600 font-bold text-sm mt-0.5">Q</span>
                      <span className="text-slate-700 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Using a pool report in negotiations</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A written pool assessment gives you documented evidence of the pool's condition before you're contractually committed. This can be used to:
                </p>
                <ul className="space-y-2 text-slate-600">
                  {[
                    'Negotiate a price reduction reflecting any remediation costs',
                    'Request the vendor address specific issues before settlement',
                    'Walk away with confidence if the issues are too significant',
                    'Build in a clause requiring equipment certification or pool fencing compliance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Worth knowing</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Fibreglass pool resurfacing typically costs between $8,000 and $20,000+ depending on pool size and the surface chosen. Even a small price negotiation based on legitimate findings can more than cover the cost of an independent assessment.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Get an independent assessment</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Pool Check Report</div>
                    <div className="text-orange-600 font-bold mb-2">$149</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Submit photos, get a written report covering condition, defects, and recommendations.</p>
                    <Link
                      href="/PoolCheckReport/order"
                      className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Report
                    </Link>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Buyer Checklist</div>
                    <div className="text-orange-600 font-bold mb-2">$29</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Know exactly what to look for when you inspect the pool yourself.</p>
                    <Link
                      href="/BuyerChecklist/order"
                      className="block border border-slate-300 hover:border-slate-400 text-slate-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Get Checklist
                    </Link>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Free Red Flags Guide</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Learn the 7 warning signs that every pool buyer should know.</p>
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
    </>
  )
}
