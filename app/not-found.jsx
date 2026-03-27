import Link from 'next/link'
import DarkCTA from '../components/DarkCTA'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <>
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">404</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              This page does not exist
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              The page you are looking for may have moved or never existed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link
              href="/"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold font-sans text-center transition-colors"
            >
              Back to Homepage
            </Link>
            <Link
              href="/PoolCheckReport/order"
              className="border border-border-warm hover:border-ink text-ink px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
            >
              Order Pool Check Report
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="border border-border-warm rounded-xl p-6 text-left bg-warm-white">
              <p className="text-xs font-medium text-warm-grey uppercase tracking-wide mb-2">$149 AUD</p>
              <h2 className="font-serif text-lg text-ink mb-2">Pool Check Report</h2>
              <p className="text-ink-light text-sm leading-relaxed mb-4">
                Photo-based fibreglass pool assessment for buyers and owners.
              </p>
              <Link href="/PoolCheckReport/order" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                Order report &rarr;
              </Link>
            </div>

            <div className="border border-border-warm rounded-xl p-6 text-left bg-warm-white">
              <p className="text-xs font-medium text-warm-grey uppercase tracking-wide mb-2">$29 AUD</p>
              <h2 className="font-serif text-lg text-ink mb-2">Buyer Checklist</h2>
              <p className="text-ink-light text-sm leading-relaxed mb-4">
                Structured due-diligence tool for buyers assessing a fibreglass pool.
              </p>
              <Link href="/BuyerChecklist" className="text-sm font-medium text-ink hover:text-accent transition-colors">
                Get the checklist &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
