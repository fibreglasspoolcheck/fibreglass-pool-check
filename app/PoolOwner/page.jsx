import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'
import ContentSidebar from '../../components/ContentSidebar'

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
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pool Owner', url: '/PoolOwner' }
      ]} />
      {/* Hero */}
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Pool Owner Guide</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Already own a fibreglass pool?
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              Understand what's normal, what's worth worrying about, and when it pays to get an independent view before spending money on repairs or resurfacing.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">What's normal wear  -  and what isn't</h2>
                <p className="text-ink-light leading-relaxed mb-6">
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
                      <h3 className={`font-serif mb-3 text-sm ${colour === 'green' ? 'text-green-800' : colour === 'orange' ? 'text-orange-800' : 'text-red-800'}`}>{type}</h3>
                      <ul className="space-y-1">
                        {items.map(item => (
                          <li key={item} className="text-ink-light text-sm flex items-start gap-2">
                            <span className="mt-1">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">Resurfacing  -  do you actually need it?</h2>
                <p className="text-ink-light leading-relaxed mb-4">
                  Resurfacing is a significant expense  -  typically $8,000 to $20,000 or more depending on pool size and the surface chosen. Repairers and resurfacers have an incentive to recommend it, even when it's not strictly necessary.
                </p>
                <p className="text-ink-light leading-relaxed mb-4">
                  Before committing to resurfacing work, it's worth getting an independent assessment. I can review the condition of your pool and tell you honestly whether resurfacing is warranted, what to look for in quotes, and whether there are any underlying issues that need addressing first.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">Maintenance basics that extend your pool's life</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Water chemistry', body: 'Maintain correct pH (7.2–7.6), alkalinity (80–120 ppm), and sanitiser levels. Poor chemistry accelerates surface degradation and equipment wear.' },
                    { title: 'Regular brushing', body: 'Brush the shell surface weekly to prevent algae and calcium buildup, particularly around fittings and steps.' },
                    { title: 'Equipment servicing', body: 'Annual equipment check  -  pump seals, filter cartridges or media, and chlorinator cell  -  extends life significantly.' },
                    { title: 'Waterline attention', body: 'The waterline is often the first area to show wear. Keep it clean and watch for early signs of gel coat breakdown.' },
                  ].map(({ title, body }) => (
                    <div key={title} className="border border-border-warm rounded-xl p-4">
                      <h3 className="font-serif text-ink mb-2 text-sm">{title}</h3>
                      <p className="text-warm-grey text-sm leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <ContentSidebar hideBuyerChecklist hideRedFlagsGuide />
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  )
}
