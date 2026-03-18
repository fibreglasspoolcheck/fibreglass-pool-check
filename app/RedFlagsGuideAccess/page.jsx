export const metadata = {
  title: 'Your Red Flags Guide | Fibreglass Pool Check',
  robots: { index: false, follow: false },
}

export default function RedFlagsGuideAccess() {
  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-green-600 text-5xl mb-6">✓</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Your guide is on its way!</h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Check your inbox  -  I've sent the Fibreglass Pool Red Flags Guide to your email address. If you don't see it within a few minutes, check your spam or junk folder.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
          <h2 className="font-bold text-slate-900 mb-3">While you're here</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            If you're seriously considering buying a property with a fibreglass pool, my Pool Check Report gives you a full specialist assessment based on photos of the specific pool you're looking at.
          </p>
          <a
            href="/PoolCheckReport/order"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition-colors"
          >
            Order a Pool Check Report  -  $149
          </a>
        </div>
      </div>
    </section>
  )
}
