'use client'

import Link from 'next/link'

export default function Error({ error, reset }) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-4">
          Something went wrong
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          An unexpected error occurred
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Something went wrong on our end. You can try again or head back to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg font-medium text-center transition-colors cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
