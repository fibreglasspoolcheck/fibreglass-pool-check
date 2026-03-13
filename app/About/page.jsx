import Link from 'next/link'

export const metadata = {
  title: 'About Fibreglass Pool Check | Independent Fibreglass Pool Specialist',
  description: 'Meet Brady — a fibreglass pool specialist with 10+ years experience and 250+ pools assessed. Learn why independent pool checks matter before you buy.',
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-400 text-sm font-medium mb-4 uppercase tracking-wide">About</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Independent pool advice you can actually trust
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              No builder affiliations. No commissions. Just straight answers from someone who's seen inside 250+ fibreglass pools.
            </p>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.base44.com/media/0f905ecb1_BradyFounderPhoto.png"
                  alt="Brady — Fibreglass Pool Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Hi, I'm Brady</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I've spent over a decade working hands-on with fibreglass pools — assessing, inspecting, and advising buyers and owners across Australia.
                </p>
                <p>
                  After seeing the same problems show up again and again — buyers blindsided by defects, homeowners paying for unnecessary repairs, people accepting builder quotes without knowing if the price or scope was fair — I started Fibreglass Pool Check.
                </p>
                <p>
                  The idea is simple: give everyday people access to the same knowledge that industry insiders have, without the conflict of interest that comes when you ask a builder or repairer for advice.
                </p>
                <p>
                  Every report I write is based on what I'd tell a friend. Nothing hidden, no upselling, no referrals to anyone.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-slate-900">10+</div>
                  <div className="text-slate-500 text-sm mt-1">Years of experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">250+</div>
                  <div className="text-slate-500 text-sm mt-1">Pools assessed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why independent */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why independence matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'No builder ties',
                body: 'I'm not affiliated with any pool builder, repairer, or resurfacer. My advice isn't shaped by referral fees or ongoing business relationships.'
              },
              {
                title: 'No upselling',
                body: 'I don't sell products or services beyond the assessment itself. There's no incentive to find problems that aren't there — or to miss ones that are.'
              },
              {
                title: 'Straight talk',
                body: 'My reports say what they mean. If a pool is fine, I'll tell you. If it has serious issues, I'll tell you that too — in plain language you can act on.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-2xl">
              <p className="text-orange-400 text-sm font-medium mb-4 uppercase tracking-wide">Real example</p>
              <h2 className="text-3xl font-bold mb-4">The Mary Valley pool — what a real assessment looks like</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                A buyer in rural Queensland found what looked like a great pool deal. Before signing, they got a Pool Check Report. What we found changed their negotiation entirely — and saved them from a costly surprise.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ufrszbkjtoapxdmvpjug.supabase.co/storage/v1/object/public/app-assets/7d4f0f526_mary-valley-before.jpg"
                    alt="Pool before assessment"
                    className="w-full h-32 object-cover"
                  />
                  <p className="text-slate-400 text-xs mt-2">Before</p>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://ufrszbkjtoapxdmvpjug.supabase.co/storage/v1/object/public/app-assets/2a595edd5_mary-valley-after.jpg"
                    alt="Pool after assessment"
                    className="w-full h-32 object-cover"
                  />
                  <p className="text-slate-400 text-xs mt-2">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to get an independent view?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Choose the service that fits your situation — or grab the free Red Flags Guide to start learning what to look for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.fibreglasspoolcheck.com.au/PoolCheckReport"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a Pool Check Report — $149
            </Link>
            <Link
              href="/RedFlagsGuide"
              className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Free Red Flags Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
