import Link from 'next/link'

export const metadata = {
  title: 'Fibreglass Pool Owner Guide | Maintenance, Repairs & What to Expect',
  description: 'Practical information for fibreglass pool owners  -  maintenance basics, common issues, repair costs, and when to get an independent assessment before paying for work.',
  alternates: {
    canonical: '/PoolOwner',
  },
}

export default function PoolOwner() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 text-sm font-medium mb-4 uppercase tracking-wide">Pool Owner Guide</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Already own a fibreglass pool?
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Understand what's normal, what's worth worrying about, and when it pays to get an independent view before spending money on repairs or resurfacing.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What's normal wear  -  and what isn't</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Fibreglass pools are durable and low maintenance, but they're not maintenance-free. Over time, the gel coat surface can show signs of age. The key is knowing what's cosmetic, what's structural, and what's urgent.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      type: 'Normal / cosmetic',
                      colour: 'green',
                      items: [
                        'Fine surface crazing (spider-web cracks in the gel coat)',
                        'Fading or colour variation from UV exposure',
                        'Minor waterline calcium or algae buildup',
                        'Surface roughness in older pools (10+ years)',
                      ],
                    },
                    {
                      type: 'Worth monitoring',
                      colour: 'orange',
                      items: [
                        'Larger cracks that have appeared suddenly or grown',
                        'Blistering or bubbling of the gel coat surface',
                        'Persistent water loss beyond normal evaporation',
                        'Fittings that feel loose or are showing sealant failure',
                      ],
                    },
                    {
                      type: 'Get assessed now',
                      colour: 'red',
                      items: [
                        'Structural cracking through the shell layer (not just gel coat)',
                        'Delamination  -  sections of surface lifting or separating',
                        'Significant unexplained water loss (potential structural leak)',
                        'Ground movement causing shell displacement or visible bowing',
                      ],
                    },
                  ].map(({ type, colour, items }) => (
                    <div key={type} className={`rounded-xl p-5 border ${colour === 'green' ? 'border-green-200 bg-green-50' : colour === 'orange' ? 'border-orange-200 bg-orange-50' : 'border-red-200 bg-red-50'}`}>
                      <h3 className={`font-semibold mb-3 text-sm ${colour === 'green' ? 'text-green-800' : colour === 'orange' ? 'text-orange-800' : 'text-red-800'}`}>{type}</h3>
                      <ul className="space-y-1">
                        {items.map(item => (
                          <li key={item} className="text-slate-700 text-sm flex items-start gap-2">
                            <span className="mt-1">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Resurfacing  -  do you actually need it?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Resurfacing is a significant expense  -  typically $8,000 to $20,000 or more depending on pool size and the surface chosen. Repairers and resurfacers have an incentive to recommend it, even when it's not strictly necessary.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Before committing to resurfacing work, it's worth getting an independent assessment. I can review the condition of your pool and tell you honestly whether resurfacing is warranted, what to look for in quotes, and whether there are any underlying issues that need addressing first.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  I can also review quotes you've received to assess whether the pricing and scope are reasonable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Maintenance basics that extend your pool's life</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Water chemistry', body: 'Maintain correct pH (7.2–7.6), alkalinity (80–120 ppm), and sanitiser levels. Poor chemistry accelerates surface degradation and equipment wear.' },
                    { title: 'Regular brushing', body: 'Brush the shell surface weekly to prevent algae and calcium buildup, particularly around fittings and steps.' },
                    { title: 'Equipment servicing', body: 'Annual equipment check  -  pump seals, filter cartridges or media, and chlorinator cell  -  extends life significantly.' },
                    { title: 'Waterline attention', body: 'The waterline is often the first area to show wear. Keep it clean and watch for early signs of gel coat breakdown.' },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-slate-200 rounded-xl p-4">
                      <h3 className="font-semibold text-slate-900 mb-2 text-sm">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="border border-slate-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Get an independent view</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Pool Check Report</div>
                    <div className="text-orange-600 font-bold mb-2">$149</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Submit photos, get a written condition assessment. Good before any major repair decision.</p>
                    <Link
                      href="/PoolCheckReport/order"
                      className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Report
                    </Link>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Quote Review</div>
                    <div className="text-orange-600 font-bold mb-2">$79</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Got a resurfacing or repair quote? I'll tell you if it's fair and what to watch out for.</p>
                    <Link
                      href="/QuoteReview/order"
                      className="block border border-slate-300 hover:border-slate-400 text-slate-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Get Quote Reviewed
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
