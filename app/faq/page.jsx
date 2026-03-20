import Link from 'next/link'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'

export const metadata = {
  title: 'Fibreglass Pool FAQ  -  Common Questions Answered',
  description: 'Common questions about fibreglass pool inspections and what to look for before buying a property with a pool.',
  alternates: {
    canonical: '/faq',
  },
}

const faqs = [
  {
    q: 'What is a fibreglass pool check report?',
    a: 'A Pool Check Report is a detailed written assessment of a fibreglass pool\'s condition, prepared by an independent specialist. You submit photos of the pool, and we provide a comprehensive written report covering the condition, any identified problems, red flags, and recommendations.',
  },
  {
    q: 'How does the photo-based assessment work?',
    a: 'You order the report online, then follow our photo guide to photograph the pool from the required angles and areas. You upload those photos through our secure portal. Our specialist reviews them and prepares your report. The photo guide tells you exactly what to photograph.',
  },
  {
    q: 'How long does it take to get my report?',
    a: 'Reports are delivered within 2\u20133 business days from when we receive your photos. If there\'s anything unusual about your situation, we\'ll let you know by email.',
  },
  {
    q: 'Can a photo-based report replace an in-person inspection?',
    a: 'A photo-based report is different from an on-site inspection and has limitations \u2014 particularly around things that can only be assessed by touch or by moving through the water. However, for the vast majority of common fibreglass pool problems, a thorough photo assessment by a specialist is significantly more useful than a non-specialist on-site inspection. If you\'re in South East Queensland and need on-site assessment, see our On-Site Assessment service.',
  },
  {
    q: 'What do you look for in the photos?',
    a: 'Surface condition (blistering, delamination, crazing, staining), structural signs (shell movement, cracks), fittings and plumbing condition, waterline tile condition, equipment visible in photos, and any other visible indicators of pool health.',
  },
  {
    q: 'I\'m buying a house with a pool. Do I need this?',
    a: 'Yes \u2014 if the pool matters to you. Standard building inspectors do not have fibreglass pool specialist knowledge. They routinely miss problems that cost buyers tens of thousands of dollars. A $149 report is one of the most cost-effective pieces of due diligence you can do before exchanging contracts.',
  },
  {
    q: 'Can the report be used to negotiate the purchase price?',
    a: 'Absolutely. A written specialist report documenting pool problems gives you documented evidence to negotiate a price reduction, request repairs before settlement, or walk away from the purchase with confidence.',
  },
  {
    q: 'What is the Buyer Checklist?',
    a: 'The Buyer Checklist is a document that tells you what to look for when inspecting a fibreglass pool yourself. It\'s ideal for early-stage property hunting \u2014 open homes, pre-offer inspections. If you\'re serious about a specific pool, the Pool Check Report provides expert assessment of that pool specifically.',
  },
  {
    q: 'What\'s the difference between the Buyer Checklist and the Pool Check Report?',
    a: 'The Buyer Checklist ($29) is a guide for doing your own inspection. The Pool Check Report ($149) is an expert assessment of a specific pool based on photos you submit. The checklist is great for screening; the report is for due diligence on a specific purchase.',
  },
  {
    q: 'Do you do on-site inspections?',
    a: 'We offer on-site assessment for South East Queensland only. This is a request-based service and may not be available in all SEQ areas. Visit our On-Site Assessment page for details. Australia-wide, we offer our photo-based Pool Check Report.',
  },
  {
    q: 'Are you affiliated with any pool builders or contractors?',
    a: 'We operate independently. While Brady\'s wife runs BRE Fibreglass (a pool resurfacing business), all assessments are conducted without any influence from that relationship. We have no financial interest in what you decide to do with your pool.',
  },
  {
    q: 'What types of pools do you assess?',
    a: 'We specialise exclusively in fibreglass pools. We do not assess concrete or vinyl liner pools.',
  },
  {
    q: 'What areas do you service?',
    a: 'Our photo-based reports (Pool Check Report, Buyer Checklist) are available Australia-wide. Our on-site assessment is available in South East Queensland only.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment is made securely online via credit or debit card at the time of ordering. We use Stripe for payment processing.',
  },
  {
    q: 'What if I have questions about my report?',
    a: 'Email us at help@fibreglasspoolcheck.com.au and we\'ll be happy to clarify anything in your report.',
  },
  {
    q: 'What if the pool turns out to be fine?',
    a: 'That\'s a great result. A clean report means you can proceed with confidence \u2014 and that peace of mind has real value. Many buyers find the $149 worthwhile just to remove uncertainty from the decision.',
  },
]

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FAQ() {
  return (
    <>
      <FAQSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq' }
      ]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
            <p className="text-slate-300 text-lg">
              Everything you need to know about our reports and services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <h2 className="font-semibold text-slate-900 mb-3 text-base">{faq.q}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
            <h2 className="font-bold text-slate-900 mb-2">Still have questions?</h2>
            <p className="text-slate-600 text-sm mb-4">We&apos;re happy to help before you order.</p>
            <Link href="/Contact" className="text-sm font-medium text-slate-900 underline hover:text-orange-600 transition-colors">
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
