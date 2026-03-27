import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'

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
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-deep to-ink/80 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="text-accent text-sm font-medium tracking-wide uppercase mb-4">About</div>
            <h1 className="font-serif text-4xl mb-4">10+ years hands-on with fibreglass pools</h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              I've spent over a decade resurfacing, repairing, and assessing fibreglass pools across Queensland. Now I use that experience to give buyers, owners, and sellers the independent expertise they need before making expensive decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-24 h-24 bg-deep rounded-full mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-serif">BS</span>
              </div>
              <h2 className="font-serif text-2xl text-ink mb-2">Brady</h2>
              <div className="text-accent text-sm font-medium mb-4">Fibreglass Pool Specialist</div>
              <div className="space-y-4 text-ink-light leading-relaxed">
                <p>
                  I started Fibreglass Pool Check because I kept seeing the same thing: buyers getting burned by pool problems that could have been spotted by someone who knows what to look for. Building inspectors check the house  -  not the pool. And the repair bills that follow can run into tens of thousands of dollars.
                </p>
                <p>
                  Before launching this service, I spent over a decade on tools  -  resurfacing, repairing, and renovating fibreglass pools. I've seen every failure mode from the inside: osmotic blistering, delamination, gelcoat breakdown, structural flexing, fitting failures. That hands-on experience is what makes my assessments different from a desktop review.
                </p>
                <p>
                  With 250+ pools assessed, I know what problems look like at every stage  -  from early warning signs through to major structural issues. While my wife runs BRE Fibreglass (a pool resurfacing business), my assessments are completely independent  -  I have no financial interest in what you decide to do with your pool.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-warm-white border border-border-warm rounded-xl p-6">
                <h3 className="font-serif text-ink mb-4">By the numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '250+', label: 'Pools assessed' },
                    { stat: '10+', label: 'Years experience' },
                    { stat: 'AUS-wide', label: 'Digital reports' },
                    { stat: '100%', label: 'Independent' },
                  ].map((item) => (
                    <div key={item.label} className="text-center py-4 border border-border-warm rounded-lg bg-cream">
                      <div className="text-2xl font-serif text-ink">{item.stat}</div>
                      <div className="text-xs text-warm-grey mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-warm-white border border-border-warm rounded-xl p-6">
                <h3 className="font-serif text-ink mb-3">Case study: Mary Valley, QLD</h3>
                <p className="text-ink-light text-sm leading-relaxed mb-3">
                  A buyer under contract contacted me after a standard building inspection gave their pool a clean pass. My assessment identified significant osmotic blistering and early signs of delamination  -  repairs that would have cost tens of thousands of dollars.
                </p>
                <p className="text-ink-light text-sm leading-relaxed">
                  Armed with the written report, the buyer renegotiated the purchase price and proceeded with the purchase on much better terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on track record */}
      <section className="bg-warm-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-ink mb-3">Hands-on track record</h2>
          <p className="text-ink-light mb-8 max-w-2xl">
            Before launching Fibreglass Pool Check, I spent over a decade resurfacing and repairing fibreglass pools across Queensland. Here's what my clients had to say.
          </p>

          {/* Before/after gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-xl overflow-hidden border border-border-warm bg-cream">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/hooper-before.jpg" alt="Pool before renovation  -  Hooper project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-deep/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/hooper-after.jpg" alt="Pool after renovation  -  Hooper project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-accent/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-warm-grey text-xs">Jindalee, QLD  -  concrete to fibreglass conversion</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border-warm bg-cream">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/walsh-before.jpg" alt="Pool before renovation  -  Walsh project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-deep/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/walsh-after.jpg" alt="Pool after renovation  -  Walsh project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-accent/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-warm-grey text-xs">Gympie, QLD  -  full fibreglass resurface</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border-warm bg-cream">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image src="/images/fowler-before.jpg" alt="Pool before renovation  -  Fowler project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-deep/80 text-white text-[10px] px-1.5 py-0.5 rounded">Before</span>
                </div>
                <div className="relative">
                  <Image src="/images/fowler-after.jpg" alt="Pool after renovation  -  Fowler project" width={300} height={260} className="w-full h-32 object-cover" />
                  <span className="absolute bottom-1 left-1 bg-accent/90 text-white text-[10px] px-1.5 py-0.5 rounded">After</span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-warm-grey text-xs">QLD  -  complete pool renovation</p>
              </div>
            </div>
          </div>

          {/* Testimonials with pool photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "We bought a house with a pool, and the pool was not all it seemed to be. Brady displays amazing attention to detail. He loves doing what he does. And it shows, because our pool looks fantastic! From the painstaking prep work through to the final gel coats, the results speak for themselves. Even our water carter said he's never seen a better looking renovated pool.",
                name: "Warren & Allison Fowler",
                image: "/images/fowler-after.jpg",
              },
              {
                quote: "My fibreglass pool was an absolute mess and I had been putting off fixing it for ages. Brady was fantastic, a hard worker with very high standards and strangely, he loves what he does. In Brady's mind  -  the job had to be done right  -  and it certainly was. The pictures tell the story. After completion the pool looked so good I then had to do something with the landscaping.",
                name: "Russell Walsh",
                location: "Gympie",
                image: "/images/walsh-after.jpg",
              },
              {
                quote: "From our very first contact, we were impressed with the responsiveness and professionalism. Despite a few hiccups with inclement weather, the work was completed within the expected timeframe to a beautiful finish. The final result is perfect. I can unreservedly recommend Brady for both his quality workmanship and his commitment to customer satisfaction.",
                name: "Michael & Gaynor Hooper",
                location: "Jindalee",
                image: "/images/hooper-after.jpg",
              },
              {
                quote: "Brady arrived on time each day and would work all day without much of a break. I had a lot of osmosis in my pool but no problem for Brady, just got on with the job. My pool on completion looks fantastic. Thanks for all your hard work Brady.",
                name: "R. Evans",
                image: "/images/evans-after.jpg",
              },
              {
                quote: "From the beginning I was informed of the scope of works, possible variations and the time frames. Brady's knowledge of the pool industry, methods and equipment used to provide a quality finish was impressive. At the end of every day Brady cleaned the work site and left it in a safe condition. My pool has been renovated to a quality that will enhance the value of my house.",
                name: "Linton Passmore",
                image: "/images/passmore-after.jpg",
              },
              {
                quote: "My fibreglass pool was in very poor condition and Brady gave me excellent advice and very personal service to get it repaired and resurfaced. The final result looks fabulous.",
                name: "Andrew Newcombe",
                location: "Noosa Heads",
                image: "/images/newcombe-after.jpg",
              },
              {
                quote: "We approached resurfacing our grotty old pool with some trepidation. The marblesheen had either come off in chunks or was worn away in large patches. Brady worked hard to guide us through the process and the pool now looks fantastic. We are really pleased with the results! The original quote was very competitive.",
                name: "Glen & Tracey Leeder",
                image: "/images/leeder-after.jpg",
              },
              {
                quote: "The pool required extensive work on the entire surface. The work was long and tiring but everything was exactly right to achieve an excellent result. The pool was stripped and meticulously resurfaced with the utmost professionalism.",
                name: "R. & C. Lumsford",
                location: "Nanango",
                image: "/images/lumsford-after.jpg",
              },
              {
                quote: "Our pool had lost its gloss and stains were regularly appearing. Not to mention the severe osmosis all over the pool shell. Brady came to visit, saw the problem firsthand, and explained in detail what he could do. We received our quote  -  much much much less than a new pool  -  and straight away organised a time for Brady to start work. In just four days they had turned one very sad looking little pool into a sparkling gem. We cannot say enough about Brady's attention to detail and his determination to not be defeated by a little thing such as threatening bad weather.",
                name: "Leanne & Les Fleet",
                location: "Mary Valley",
                image: "/images/maryvalley-after.jpg",
              },
            ].map((item) => (
              <div key={item.name} className="bg-cream border border-border-warm rounded-xl overflow-hidden flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-40 sm:h-auto flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={`Fibreglass pool renovated by Brady  -  ${item.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <svg className="w-5 h-5 text-accent/30 mb-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-ink-light text-sm leading-relaxed mb-3">{item.quote}</p>
                  <div className="text-sm">
                    <span className="font-semibold text-ink">{item.name}</span>
                    {item.location && <span className="text-warm-grey ml-1"> -  {item.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-ink mb-8">How I work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Completely independent',
                body: 'My wife runs BRE Fibreglass, a pool resurfacing business  -  but my assessments are completely independent. I have no financial interest in what you decide to do with your pool.'
              },
              {
                title: 'Fibreglass specialist only',
                body: 'I assess fibreglass pools only. This focus means my knowledge is deeper and more current than any generalist inspector.'
              },
              {
                title: 'Plain language',
                body: 'My reports are written to be understood by people who are not pool experts. No jargon  -  just clear findings and actionable guidance.'
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-white border border-border-warm rounded-xl p-6">
                <h3 className="font-serif text-ink mb-2">{item.title}</h3>
                <p className="text-ink-light text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
