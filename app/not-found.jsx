import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Fibreglass Pool Check',
}

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-sm font-medium text-slate-500 tracking-wide uppercase mb-4">
          404 &middot; Page Not Found
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          This page does not exist
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          The page you are looking for may have moved or never existed. Head back to the homepage or go directly to one of our services below.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Link
            href="/"
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/PoolCheckReport/order"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3.5 rounded-lg font-medium text-center transition-colors"
          >
            Order Pool Check Report
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="border border-slate-200 rounded-xl p-6 text-left">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">$149 AUD</p>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Pool Check Report</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Photo-based fibreglass pool assessment for buyers and owners.
            </p>
            <Link href="/PoolCheckReport/order" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              Order report &rarr;
            </Link>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 text-left">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">$79 AUD</p>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Quote Review</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Expert second opinion on fibreglass pool repair or resurfacing quotes.
            </p>
            <Link href="/QuoteReview" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              Review my quote &rarr;
            </Link>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 text-left">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">$29 AUD</p>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Buyer Checklist</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Structured due-diligence tool for buyers assessing a fibreglass pool.
            </p>
            <Link href="/BuyerChecklist" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
              Get the checklist &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
