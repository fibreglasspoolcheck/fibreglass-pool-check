import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-white font-bold text-base block mb-3">
              Fibreglass Pool Check
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialist fibreglass pool assessment. Independent, practical, and honest.
            </p>
          </div>

          {/* Reports & Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Reports & Services</h3>
            <ul className="space-y-2">
              <li><Link href="/PoolCheckReport" className="text-sm text-slate-400 hover:text-white transition-colors">Pool Check Report</Link></li>
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
              <li><Link href="/faq" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
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
            Independent assessments. Full transparency about our background on the <a href="/About" className="underline hover:text-white">About</a> page.
          </p>
          <p className="text-xs text-slate-500">
            ABN: 26 533 957 536
          </p>
        </div>
      </div>
    </footer>
  )
}
