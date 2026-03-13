import ContactForm from '../../components/ContactForm'
import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Contact Fibreglass Pool Check | Get in Touch',
  description: 'Have questions about fibreglass pool inspections or quote reviews? Get in touch — I typically respond within a few hours.',
}

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/Contact' }
      ]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
            <p className="text-slate-300 text-lg">
              Questions before ordering? Or need to follow up on an existing order?
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Before you message</h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                You might find your answer faster in our <Link href="/FAQ" className="text-orange-600 hover:underline">FAQ</Link>.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Email</div>
                    <div className="text-sm text-slate-500">help@fibreglasspoolcheck.com.au</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Response time</div>
                    <div className="text-sm text-slate-500">We aim to respond within 1 business day</div>
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
    </>
  )
}
