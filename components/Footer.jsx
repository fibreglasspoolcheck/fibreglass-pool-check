import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14 Q9 4 15 14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="9" cy="7" r="2" fill="#ea580c"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">
                Fibreglass Pool Check
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Independent fibreglass pool assessments from a specialist with 10+ years experience.
            </p>
          </div>

          {/* Reports & Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Reports & Services</h3>
            <ul className="space-y-2">
              <li><Link href="/PoolCheckReport" className="text-sm text-slate-400 hover:text-white transition-colors">Pool Check Report</Link></li>
              <li><Link href="/QuoteReview" className="text-sm text-slate-400 hover:text-white transition-colors">Quote Review</Link></li>
              <li><Link href="/BuyerChecklist" className="text-sm text-slate-400 hover:text-white transition-colors">Buyer Checklist</Link></li>
              <li><Link href="/OnSiteAssessment" className="text-sm text-slate-400 hover:text-white transition-colors">On-Site Assessment</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/RedFlagsGuide" className="text-sm text-slate-400 hover:text-white transition-colors">Free Red Flags Guide</Link></li>
              <li><Link href="/BuyingAHouse" className="text-sm text-slate-400 hover:text-white transition-colors">Buying a House with a Pool</Link></li>
              <li><Link href="/PoolOwner" className="text-sm text-slate-400 hover:text-white transition-colors">Pool Owner Advice</Link></li>
              <li><Link href="/FAQ" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/About" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/Contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/ServiceBoundaries" className="text-sm text-slate-400 hover:text-white transition-colors">Service Scope</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Fibreglass Pool Check. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Independent assessments. Not affiliated with any pool builder or contractor.
          </p>
          <p className="text-xs text-slate-500">
            ABN: 26 533 957 536
          </p>
        </div>
      </div>
    </footer>
  )
}
