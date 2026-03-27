'use client'

import { useState } from 'react'

export default function RedFlagsForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/red-flags-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: name, email }),
      })
      if (res.ok) {
        setSubmitted(true)
        // Fire Google Ads lead conversion event
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18010642704/red_flags_guide',
            value: 0,
            currency: 'AUD',
          })
        }
      } else {
        setError('Something went wrong. Please try again or email help@fibreglasspoolcheck.com.au')
      }
    } catch {
      setError('Something went wrong. Please try again or email help@fibreglasspoolcheck.com.au')
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-600 text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-ink mb-2">Check your inbox!</h3>
        <p className="text-ink-light text-sm">
          I've sent the Red Flags Guide to <strong>{email}</strong>. Check your spam folder if you don't see it within a few minutes.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-warm-white border border-border-warm rounded-xl p-8">
      <h3 className="text-xl font-serif text-ink mb-2">Get the free guide</h3>
      <p className="text-ink-light text-sm mb-6">Enter your details below and I'll email it to you right away.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink-light mb-1">First name</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-light mb-1">Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink"
            placeholder="you@example.com"
          />
        </div>
        {error && <p className="text-red-600 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors"
        >
          {loading ? 'Sending...' : 'Send me the guide'}
        </button>
        <p className="text-xs text-warm-grey">No spam. You can unsubscribe at any time.</p>
      </form>
    </div>
  )
}
