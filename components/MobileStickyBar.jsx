'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileStickyBar({ targetId }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [targetId])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-3 lg:hidden z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <div className="font-semibold text-slate-900 text-sm">Buyer Checklist</div>
          <div className="text-slate-500 text-xs">$29 AUD - Instant download</div>
        </div>
        <Link
          href="/BuyerChecklist/order"
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Get it
        </Link>
      </div>
    </div>
  )
}
