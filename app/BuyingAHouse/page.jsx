import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'
import ContentSidebar from '../../components/ContentSidebar'

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
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Buying a House', url: '/BuyingAHouse' }
      ]} />
      {/* Hero */}
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Buyer's Guide</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Buying a house with a fibreglass pool?
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              A pool is often one of the most significant assets on a property  -  but it can also become one of the most expensive surprises. Here's what you need to know before you sign.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">The opportunity and the risk</h2>
                <p className="text-ink-light leading-relaxed mb-4">
                  A well-maintained fibreglass pool is a genuine asset. It adds lifestyle value, can support property resale, and  -  compared to concrete  -  is relatively low maintenance and long-lasting.
                </p>
                <p className="text-ink-light leading-relaxed">
                  But a fibreglass pool in poor condition is a different story. Resurfacing, structural repairs, and equipment replacement can run into the tens of thousands. And because most of the shell is below waterline and hidden by water, serious issues aren't always visible on a casual inspection.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">What standard building inspections miss</h2>
                <p className="text-ink-light leading-relaxed mb-4">
                  Standard building and pest inspections rarely include pools, and when they do, it's typically a visual-only check. This means issues like:
                </p>
                <ul className="space-y-2 text-ink-light">
                  {[
                    'Shell delamination (the outer gel coat separating from the laminate)',
                    'Osmotic blistering below the waterline',
                    'Structural cracking or ground movement damage',
                    'Failed bonding between fittings and shell',
                    'End-of-life equipment that will need immediate replacement',
                    'Non-compliant fencing or safety barriers',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-ink-light leading-relaxed mt-4">
                  ...can easily go undetected  -  and unmentioned in any pre-purchase documentation.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">What to ask the vendor or agent</h2>
                <p className="text-ink-light leading-relaxed mb-4">
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
                    <div key={q} className="flex items-start gap-3 p-3 bg-warm-white rounded-lg">
                      <span className="text-accent font-bold text-sm mt-0.5">Q</span>
                      <span className="text-ink-light text-sm">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-ink mb-4">Using a pool report in negotiations</h2>
                <p className="text-ink-light leading-relaxed mb-4">
                  A written pool assessment gives you documented evidence of the pool's condition before you're contractually committed. This can be used to:
                </p>
                <ul className="space-y-2 text-ink-light">
                  {[
                    'Negotiate a price reduction reflecting any remediation costs',
                    'Request the vendor address specific issues before settlement',
                    'Walk away with confidence if the issues are too significant',
                    'Build in a clause requiring equipment certification or pool fencing compliance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-warm-white border border-border-warm rounded-xl p-6">
                <h3 className="font-serif text-ink mb-2">Worth knowing</h3>
                <p className="text-ink-light text-sm leading-relaxed">
                  Fibreglass pool resurfacing typically costs between $8,000 and $20,000+ depending on pool size and the surface chosen. Even a small price negotiation based on legitimate findings can more than cover the cost of an independent assessment.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <ContentSidebar heading="Get an independent assessment" />
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  )
}
