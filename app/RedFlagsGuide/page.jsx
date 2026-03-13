import RedFlagsForm from '../../components/RedFlagsForm'

export const metadata = {
  title: 'Free Fibreglass Pool Red Flags Guide',
  description: 'Download our free guide to the 10 warning signs every fibreglass pool buyer needs to know. Written by a specialist with 250+ pools assessed.',
}

export default function RedFlagsGuide() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 text-xs px-3 py-1.5 rounded-full mb-6">
              Free download
            </div>
            <h1 className="text-4xl font-bold mb-4">Fibreglass Pool Red Flags Guide</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              The 10 warning signs every fibreglass pool buyer needs to know. Written by a specialist with 250+ pools assessed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What you will learn</h2>
              <div className="space-y-3">
                {[
                  'The surface problems that look minor but signal major damage',
                  'How to spot osmotic blistering before it gets expensive',
                  'Fitting and plumbing red flags that builders miss',
                  'Structural signs that suggest the shell has moved',
                  'What staining patterns actually mean',
                  'The questions you should always ask before buying',
                  'When to walk away and when to negotiate hard',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <RedFlagsForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
