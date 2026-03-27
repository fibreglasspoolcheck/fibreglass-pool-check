'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: name, email, message }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly at help@fibreglasspoolcheck.com.au')
      }
    } catch {
      setError('Something went wrong. Please email us directly at help@fibreglasspoolcheck.com.au')
    }
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-600 text-3xl mb-3">&#10003;</div>
        <h3 className="font-bold text-ink mb-2">Message sent!</h3>
        <p className="text-ink-light text-sm">We'll get back to you within 1 business day.</p>
      </div>
    )
  }

  return (
    <div className="bg-warm-white border border-border-warm rounded-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-ink-light mb-1">Your name</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink"
            placeholder="Full name"
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
        <div>
          <label className="block text-sm font-medium text-ink-light mb-1">Message</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full border border-border-warm rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ink resize-none"
            placeholder="How can we help?"
          />
        </div>
        {error && <p className="text-red-600 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-deep hover:bg-ink disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors"
        >
          {loading ? 'Sending\u2026' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
