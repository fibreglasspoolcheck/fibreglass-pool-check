'use client'

import Link from 'next/link'

export default function Error({ error, reset }) {
  return (
    <>
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Error</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Something went wrong
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              An unexpected error occurred. You can try again or head back to the homepage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-lg font-semibold font-sans text-center transition-colors cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="border border-border-warm hover:border-ink text-ink px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
