import Link from 'next/link'

export default function ContentSidebar({
  heading = 'Get an independent assessment',
  hidePoolCheckReport = false,
  hideBuyerChecklist = false,
  hideRedFlagsGuide = false,
}) {
  return (
    <div className="space-y-6">
      <div className="border border-border-warm rounded-xl p-6 sticky top-24">
        <h3 className="font-serif text-lg text-ink mb-4">{heading}</h3>
        <div className="space-y-4">
          {!hidePoolCheckReport && (
            <div className="p-4 bg-warm-white rounded-lg">
              <div className="font-semibold text-ink text-sm mb-1">Pool Check Report</div>
              <div className="text-accent font-bold mb-2">$149</div>
              <p className="text-warm-grey text-xs leading-relaxed mb-3">
                Submit photos, get a written report covering condition, defects, and recommendations.
              </p>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-deep hover:bg-ink text-white text-center py-2 px-4 rounded-lg text-sm font-medium font-sans transition-colors"
              >
                Order Report
              </Link>
            </div>
          )}
          {!hideBuyerChecklist && (
            <div className="p-4 bg-warm-white rounded-lg">
              <div className="font-semibold text-ink text-sm mb-1">Buyer Checklist</div>
              <div className="text-accent font-bold mb-2">$29</div>
              <p className="text-warm-grey text-xs leading-relaxed mb-3">
                Know exactly what to look for when you inspect the pool yourself.
              </p>
              <Link
                href="/BuyerChecklist/order"
                className="block border border-border-warm hover:border-warm-grey text-ink text-center py-2 px-4 rounded-lg text-sm font-medium font-sans transition-colors"
              >
                Get Checklist
              </Link>
            </div>
          )}
          {!hideRedFlagsGuide && (
            <div className="p-4 bg-[#fdf8f5] rounded-lg">
              <div className="font-semibold text-ink text-sm mb-1">Free Red Flags Guide</div>
              <p className="text-warm-grey text-xs leading-relaxed mb-3">
                10 warning signs every pool buyer should know.
              </p>
              <Link
                href="/RedFlagsGuide"
                className="block text-accent hover:text-accent-hover text-center py-2 px-4 rounded-lg text-sm font-medium border border-accent/30 hover:border-accent/50 font-sans transition-colors"
              >
                Get Free Guide
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
