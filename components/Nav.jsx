'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-slate-900 text-lg tracking-tight">
            Fibreglass Pool Check
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/PoolCheckReport" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Get Report
            </Link>
            <Link href="/FAQ" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              FAQ
            </Link>
            <Link href="/About" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/Contact" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4l12 12M16 4L4 16"/>
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h14M3 10h14M3 14h14"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-slate-100 py-4 flex flex-col gap-4">
            <Link href="/PoolCheckReport" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Pool Check Report
            </Link>
            <Link href="/QuoteReview" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Quote Review
            </Link>
            <Link href="/BuyerChecklist" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Buyer Checklist
            </Link>
            <Link href="/blog" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Articles
            </Link>
            <Link href="/FAQ" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/About" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/Contact" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link
              href="/PoolCheckReport/order"
              className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg text-center hover:bg-slate-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
