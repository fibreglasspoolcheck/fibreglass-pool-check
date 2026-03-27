'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function BuyerChecklistOrder() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center"><p className="text-warm-grey">Loading...</p></div>}>
      <BuyerChecklistOrderInner />
    </Suspense>
  )
}

function BuyerChecklistOrderInner() {
  const searchParams = useSearchParams()
  const isSuccess = searchParams.get('checkout') === 'success'
  const orderId = searchParams.get('orderId')

  const [step, setStep] = useState(isSuccess ? 'paid' : 'form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (isSuccess && orderId) {
      setStep('paid')
      // Fire Google Ads conversion event
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18010642704/buyer_checklist',
          value: 29.0,
          currency: 'AUD',
          transaction_id: orderId,
        })
      }
    }
  }, [isSuccess, orderId])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Create order in Supabase
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      const res = await fetch(`${supabaseUrl}/rest/v1/checklist_orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=representation',
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
        }),
      })

      if (!res.ok) throw new Error('Failed to save order')

      const [order] = await res.json()

      // Redirect to Stripe Checkout
      const checkoutRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'buyer_checklist',
          orderId: order.id,
          email: email,
        }),
      })

      if (!checkoutRes.ok) throw new Error('Checkout failed')

      const { checkoutUrl } = await checkoutRes.json()
      window.location.href = checkoutUrl
    } catch (err) {
      setError('Something went wrong. Please try again or email help@fibreglasspoolcheck.com.au')
      setLoading(false)
    }
  }

  // Payment confirmed  -  checklist auto-delivered via email
  if (step === 'paid') {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold font-serif text-ink mb-4">Payment confirmed</h1>
          <p className="text-ink-light mb-6">Your Buyer Checklist has been emailed to you. Check your inbox (and spam folder)  -  it should arrive within a few minutes.</p>
          <hr className="my-8 border-border-warm" />
          <p className="text-ink-light text-sm mb-4">Looking at a specific pool? A full Pool Check Report gives you an expert written assessment based on your photos.</p>
          <Link href="/PoolCheckReport" className="inline-block bg-deep hover:bg-ink text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
            Learn about Pool Check Reports
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-deep text-white py-10">
        <div className="max-w-xl mx-auto px-4">
          <Link href="/BuyerChecklist" className="text-warm-grey text-sm hover:text-white mb-4 inline-block">&larr; Back to Buyer Checklist</Link>
          <h1 className="text-3xl font-bold font-serif mb-2">Get Your Buyer Checklist</h1>
          <p className="text-warm-grey">$29 AUD  -  delivered instantly via email</p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-4 py-10">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 mb-6">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink-light mb-1">Full name *</label>
            <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)} className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-light mb-1">Email *</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink" placeholder="The checklist will be sent here" />
          </div>

          <div className="bg-warm-white rounded-lg p-4 text-sm text-ink-light">
            <p>After payment, the checklist PDF will be emailed to you immediately. No waiting.</p>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors">
            {loading ? 'Processing...' : 'Pay $29  -  Get Instant Access'}
          </button>

          <p className="text-xs text-warm-grey text-center italic">If it doesn't meet your expectations, get in touch and I'll make it right.</p>
        </form>
      </div>
    </div>
  )
}
