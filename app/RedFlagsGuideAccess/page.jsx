import DarkCTA from '../../components/DarkCTA'

export const metadata = {
  title: 'Your Red Flags Guide',
  robots: { index: false, follow: false },
}

export default function RedFlagsGuideAccess() {
  return (
    <>
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Confirmed</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Your guide is on its way!
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              I've sent the Fibreglass Pool Red Flags Guide to your email address. If you don't see it within a few minutes, check your spam or junk folder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warm-white border border-border-warm rounded-xl p-8 text-left">
            <h2 className="font-serif text-xl text-ink mb-3">While you're here</h2>
            <p className="text-ink-light text-sm leading-relaxed mb-6">
              If you're seriously considering buying a property with a fibreglass pool, my Pool Check Report gives you a full specialist assessment based on photos of the specific pool you're looking at.
            </p>
            <a
              href="/PoolCheckReport/order"
              className="inline-block bg-accent hover:bg-accent-hover text-white text-sm px-5 py-2.5 rounded-lg font-semibold font-sans transition-colors"
            >
              Order a Pool Check Report  -  $149
            </a>
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
