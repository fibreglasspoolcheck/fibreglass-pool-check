import RedFlagsForm from '../../components/RedFlagsForm'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import DarkCTA from '../../components/DarkCTA'
import ContentSidebar from '../../components/ContentSidebar'

export const metadata = {
  title: 'Free Fibreglass Pool Red Flags Guide',
  description: 'Download our free guide to the 10 warning signs every fibreglass pool buyer needs to know. Written by a specialist with 250+ pools assessed.',
  alternates: {
    canonical: '/RedFlagsGuide',
  },
}

export default function RedFlagsGuide() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Resources', url: '/' },
        { name: 'Red Flags Guide', url: '/RedFlagsGuide' }
      ]} />

      <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">Free download</span>
            <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">Fibreglass Pool Red Flags Guide</h1>
            <p className="text-warm-grey text-lg leading-relaxed">
              The 10 warning signs every fibreglass pool buyer needs to know. Written by a specialist with 250+ pools assessed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl text-ink mb-6">What you will learn</h2>
                <div className="space-y-3">
                  {[
                    'The surface problems that look minor but signal major damage',
                    'How to spot osmotic blistering before it gets expensive',
                    'Fitting and plumbing red flags that builders miss',
                    'Structural signs that suggest the shell has moved',
                    'What staining patterns actually mean',
                    'The questions you should always ask before buying',
                    'When to walk away and when to negotiate hard',
                    'How to check if the pool has been repaired or patched before',
                    'Water line and tile condition clues that indicate neglect',
                    'The warranty and documentation red flags to watch for',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-ink-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <RedFlagsForm />
              </div>
            </div>
            <ContentSidebar heading="Get an independent assessment" hideRedFlagsGuide />
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  )
}
