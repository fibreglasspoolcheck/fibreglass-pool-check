import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'About Fibreglass Pool Check | Independent Fibreglass Pool Specialist',
  description: 'Meet Brady, the independent fibreglass pool specialist behind Fibreglass Pool Check. 10+ years experience, 250+ pools assessed across Australia.',
  alternates: {
    canonical: '/About',
  },
}

function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brady Smith",
    "jobTitle": "Fibreglass Pool Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Fibreglass Pool Check",
      "url": "https://fibreglasspoolcheck.com.au"
    },
    "knowsAbout": [
      "Fibreglass pool inspection",
      "Fibreglass pool resurfacing",
      "Osmotic blistering",
      "Pool gelcoat assessment",
      "Fibreglass pool repair",
      "Pool structural assessment"
    ],
    "description": "Independent fibreglass pool specialist with 10+ years hands-on experience and 250+ pools assessed across Australia."
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function About() {
  return (
    <>
      <AboutSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/About' }
      ]} />
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">About Fibreglass Pool Check</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Independent assessment from a specialist who has spent over a decade working with fibreglass pools — not selling them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-24 h-24 bg-slate-200 rounded-full mb-6 overflow-hidden">
                <Image
                  src="/images/Photo of Brady.jpg"
                  alt="Brady Smith — fibreglass pool specialist"
                  width={100}
                  height={100}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Brady</h2>
              <div className="text-orange-600 text-sm font-medium mb-4">Fibreglass Pool Specialist</div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fibreglass Pool Check exists because buyers keep getting burned. Standard building inspectors routinely miss the specific failure modes that fibreglass pools are prone to — and the repair bills that follow can run into tens of thousands of dollars.
                </p>
                <p>
                  With over 10 years working hands-on with fibreglass pools and 250+ assessments completed, I provide the independent expertise that buyers, owners and sellers need to make informed decisions.
                </p>
                <p>
                  I have no affiliation with pool builders, contractors or suppliers. My assessment is yours alone.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">By the numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '250+', label: 'Pools assessed' },
                    { stat: '10+', label: 'Years experience' },
                    { stat: 'AUS-wide', label: 'Digital reports' },
                    { stat: '100%', label: 'Independent' },
                  ].map((item) => (
                    <div key={item.label} className="text-center py-4 border border-slate-200 rounded-lg bg-white">
                      <div className="text-2xl font-bold text-slate-900">{item.stat}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Case study: Mary Valley, QLD</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  A buyer under contract contacted us after a standard building inspection gave their pool a clean pass. Our specialist assessment identified significant osmotic blistering and early signs of delamination — repairs that would have cost tens of thousands of dollars.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Armed with the written report, the buyer renegotiated the purchase price and proceeded with the purchase on much better terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on track record */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Hands-on track record</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Before launching Fibreglass Pool Check, Brady spent over a decade resurfacing and repairing fibreglass pools across Queensland. Here's what his clients had to say about his work.
          </p>

          {/* Before/after gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/hooper-before.jpg" alt="Pool before renovation — Hooper project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-slate-900/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/hooper-after.jpg" alt="Pool after renovation — Hooper project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-orange-600/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-500 text-xs">Jindalee, QLD — concrete to fibreglass conversion</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/walsh-before.jpg" alt="Pool before renovation — Walsh project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-slate-900/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/walsh-after.jpg" alt="Pool after renovation — Walsh project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-orange-600/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-500 text-xs">Gympie, QLD — full fibreglass resurface</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/fowler-before.jpg" alt="Pool before renovation — Fowler project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-slate-900/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/fowler-after.jpg" alt="Pool after renovation — Fowler project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-orange-600/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-500 text-xs">QLD — complete pool renovation</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            {[
              {
                quote: "He really knows his stuff. Everything that he said he would do he did — on time and with a smile. He took every opportunity to minimise the inconvenience. His boys just covered up and got stuck into it. The new pool looks absolutely amazing.",
                name: "Kelvin O'Reilly",
                context: "Pool renovation client"
              },
              {
                quote: "Brady displays amazing attention to detail. He loves doing what he does. And it shows, because our pool looks fantastic! Even our water carter said he's never seen a better looking renovated pool.",
                name: "Warren & Allison Fowler",
                context: "Pool renovation client"
              },
              {
                quote: "My pool on completion looks fantastic. I would recommend Brady to all and already have, even my local pool shop is recommending them to their customers.",
                name: "R. Evans",
                context: "Pool renovation client"
              },
              {
                quote: "From our very first contact, we were impressed with the responsiveness and professionalism of Brady and his team. The final result is perfect. I can unreservedly recommend Brady and team for both their quality workmanship, and their commitment to customer satisfaction.",
                name: "Michael & Gaynor Hooper",
                context: "Jindalee, QLD"
              },
              {
                quote: "Brady's knowledge of the pool industry, methods and equipment used to provide a quality finish was impressive. The final result is my pool has been renovated in a timely manner to a quality that will enhance the value of my house.",
                name: "Linton Passmore",
                context: "Pool renovation client"
              },
            ].map((item) => (
              <div key={item.name} className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4">
                <svg className="w-6 h-6 text-orange-600/30 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">{item.quote}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-slate-900">{item.name}</span>
                    <span className="text-slate-400 ml-2">— {item.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Completely independent',
                body: 'No affiliation with any pool builder, contractor, or supplier. We have no financial interest in what you decide to do with your pool.'
              },
              {
                title: 'Specialist knowledge only',
                body: 'We assess fibreglass pools only. This focus means our knowledge is deeper and more current than any generalist inspector.'
              },
              {
                title: 'Plain language',
                body: 'Our reports are written to be understood by people who are not pool experts. No jargon — just clear findings and actionable guidance.'
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-slate-300 mb-8 max-w-md mx-auto text-sm">
            Order a report, review your quote, or grab the free Red Flags Guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/PoolCheckReport/order"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order a Pool Check Report
            </Link>
            <Link
              href="/Contact"
              className="border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
