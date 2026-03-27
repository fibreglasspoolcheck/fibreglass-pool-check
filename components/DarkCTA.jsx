import Link from 'next/link'

export default function DarkCTA({
  heading = "Ready to find out what you're really dealing with?",
  description = 'Submit your pool photos. Receive a specialist assessment within 2\u20133 business days.',
  ctaText = 'Order Pool Check Report \u2014 $149',
  ctaHref = '/PoolCheckReport/order',
  guarantee,
  showSecondaryLinks = true,
}) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,98,43,0.06)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="font-serif text-2xl lg:text-3xl text-white mb-3 relative">
            {heading}
          </h2>
          <p className="text-warm-grey text-[15px] mb-8 max-w-md mx-auto relative">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold font-sans transition-colors relative"
          >
            {ctaText}
          </Link>
          {guarantee && (
            <p className="text-warm-grey text-xs mt-3 italic relative">{guarantee}</p>
          )}
          {showSecondaryLinks && (
            <p className="text-[13px] text-warm-grey mt-5 relative">
              Questions?{' '}
              <Link href="/faq" className="text-warm-grey underline hover:text-white transition-colors">
                Read the FAQ
              </Link>
              {' '}or{' '}
              <Link href="/Contact" className="text-warm-grey underline hover:text-white transition-colors">
                get in touch
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
