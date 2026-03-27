import ContactForm from '../../components/ContactForm'
import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'

export const metadata = {
  title: 'Contact Fibreglass Pool Check | Get in Touch',
  description: 'Have questions about fibreglass pool inspections? Get in touch  -  I typically respond within a few hours.',
  alternates: {
    canonical: '/Contact',
  },
}

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/Contact' }
      ]} />
      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Get in touch</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
              Get in touch
            </h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              Questions before ordering? Or need to follow up on an existing order?
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-xl text-ink mb-4">Before you message</h2>
              <p className="text-ink-light text-sm mb-6 leading-relaxed">
                You might find your answer faster in our <Link href="/faq" className="text-accent hover:underline">FAQ</Link>.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-warm-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-ink-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-sm text-ink">Email</div>
                    <div className="text-sm text-warm-grey">help@fibreglasspoolcheck.com.au</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-warm-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-ink-light" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-sm text-ink">Response time</div>
                    <div className="text-sm text-warm-grey">We aim to respond within 1 business day</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <DarkCTA />
    </>
  )
}
