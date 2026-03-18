'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const MAX_FILES = 10
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export default function QuoteReviewOrder() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><p className="text-slate-400">Loading...</p></div>}>
      <QuoteReviewOrderInner />
    </Suspense>
  )
}

function QuoteReviewOrderInner() {
  const searchParams = useSearchParams()
  const isSuccess = searchParams.get('checkout') === 'success'
  const orderId = searchParams.get('orderId')

  const [step, setStep] = useState(isSuccess ? 'paid' : 'form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentOrderId, setCurrentOrderId] = useState(orderId || '')

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    poolAddress: '',
    numQuotes: 1,
    mainConcern: '',
    notes: '',
  })

  // Upload state
  const [quoteFiles, setQuoteFiles] = useState([])
  const [poolPhotos, setPoolPhotos] = useState([])

  useEffect(() => {
    if (isSuccess && orderId) {
      setStep('paid')
      // Fire Google Ads conversion event
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18010642704/quote_review',
          value: 79.0,
          currency: 'AUD',
          transaction_id: orderId,
        })
      }
    }
  }, [isSuccess, orderId])

  function updateForm(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      const res = await fetch(`${supabaseUrl}/rest/v1/quote_review_orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=representation',
        },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          pool_address: form.poolAddress,
          num_quotes: form.numQuotes,
          main_concern: form.mainConcern,
          notes: form.notes,
        }),
      })

      if (!res.ok) throw new Error('Failed to save order')

      const [order] = await res.json()
      setCurrentOrderId(order.id)
      setStep('upload')
    } catch (err) {
      setError('Something went wrong. Please try again or email help@fibreglasspoolcheck.com.au')
    }
    setLoading(false)
  }

  function handleQuoteFileSelect(e) {
    const files = Array.from(e.target.files || []).filter(f => {
      if (f.size > MAX_FILE_SIZE) return false
      if (!['image/jpeg', 'image/png', 'image/webp', 'application/pdf'].includes(f.type)) return false
      return true
    })
    setQuoteFiles(prev => [...prev, ...files].slice(0, MAX_FILES))
  }

  function handlePoolPhotoSelect(e) {
    const files = Array.from(e.target.files || []).filter(f => {
      if (f.size > MAX_FILE_SIZE) return false
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(f.type)) return false
      return true
    })
    setPoolPhotos(prev => [...prev, ...files].slice(0, MAX_FILES))
  }

  async function uploadFilesDirectly(files, fieldName) {
    // 1. Get signed upload URLs from our API
    const urlRes = await fetch('/api/upload-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: currentOrderId,
        productType: 'quote_review',
        fieldName,
        files: files.map(f => ({ name: f.name })),
      }),
    })
    if (!urlRes.ok) throw new Error(`Failed to get upload URLs for ${fieldName}`)
    const { signedUrls } = await urlRes.json()

    // 2. Upload each file directly to Supabase Storage
    const uploadedPaths = []
    for (let i = 0; i < signedUrls.length; i++) {
      const { signedUrl, path } = signedUrls[i]
      const file = files[i]

      const uploadRes = await fetch(signedUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      })
      if (!uploadRes.ok) {
        console.error(`Failed to upload ${file.name}`)
        continue
      }
      uploadedPaths.push(path)
    }

    if (uploadedPaths.length === 0) throw new Error(`All ${fieldName} uploads failed`)

    // 3. Confirm upload  -  save paths to database
    const confirmRes = await fetch('/api/confirm-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: currentOrderId,
        productType: 'quote_review',
        fieldName,
        paths: uploadedPaths,
      }),
    })
    if (!confirmRes.ok) throw new Error(`Failed to confirm ${fieldName} upload`)
  }

  async function handleUploadAndCheckout() {
    setLoading(true)
    setError('')

    try {
      // Upload quote files directly to Supabase Storage
      if (quoteFiles.length > 0) {
        await uploadFilesDirectly(quoteFiles, 'quote_files')
      }

      // Upload pool photos directly to Supabase Storage
      if (poolPhotos.length > 0) {
        await uploadFilesDirectly(poolPhotos, 'pool_photos')
      }

      // Redirect to Stripe Checkout
      const checkoutRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'quote_review',
          orderId: currentOrderId,
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

  // --- RENDER ---

  if (step === 'paid') {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Payment confirmed</h1>
          <p className="text-slate-600 mb-2">Thanks for your order. I've received your quote documents and payment.</p>
          <p className="text-slate-600 mb-6">Your Quote Review will be delivered to your email within <strong>2-3 business days</strong>.</p>
          <p className="text-sm text-slate-500 mb-8">If you have additional quotes to add, reply to the confirmation email.</p>
          <Link href="/" className="text-orange-600 hover:underline text-sm">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-2xl mx-auto px-4">
          <Link href="/QuoteReview" className="text-slate-400 text-sm hover:text-white mb-4 inline-block">&larr; Back to Quote Review</Link>
          <h1 className="text-3xl font-bold mb-2">Order Your Quote Review</h1>
          <p className="text-slate-300">$79 AUD  -  delivered within 2-3 business days</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Progress steps */}
        <div className="flex items-center justify-center gap-2 mb-10 text-sm">
          <span className={`px-3 py-1 rounded-full ${step === 'form' ? 'bg-slate-900 text-white' : 'bg-green-100 text-green-800'}`}>
            1. Your details
          </span>
          <span className="text-slate-300">&rarr;</span>
          <span className={`px-3 py-1 rounded-full ${step === 'upload' ? 'bg-slate-900 text-white' : step === 'form' ? 'bg-slate-100 text-slate-400' : 'bg-green-100 text-green-800'}`}>
            2. Upload files
          </span>
          <span className="text-slate-300">&rarr;</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-400">
            3. Payment
          </span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 mb-6">{error}</div>
        )}

        {/* STEP 1: Form */}
        {step === 'form' && (
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full name *</label>
                <input type="text" required value={form.fullName} onChange={e => updateForm('fullName', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input type="email" required value={form.email} onChange={e => updateForm('email', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pool address / suburb</label>
              <input type="text" value={form.poolAddress} onChange={e => updateForm('poolAddress', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">How many quotes do you have?</label>
              <select value={form.numQuotes} onChange={e => updateForm('numQuotes', parseInt(e.target.value))} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value={1}>1 quote</option>
                <option value={2}>2 quotes</option>
                <option value={3}>3 quotes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Main concern or question</label>
              <textarea rows={3} value={form.mainConcern} onChange={e => updateForm('mainConcern', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. Is this resurfacing quote reasonable for a 7m pool?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Anything else I should know?</label>
              <textarea rows={2} value={form.notes} onChange={e => updateForm('notes', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors">
              {loading ? 'Saving...' : 'Continue to file upload'}
            </button>
          </form>
        )}

        {/* STEP 2: Upload files */}
        {step === 'upload' && (
          <div className="space-y-8">
            {/* Quote documents */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Upload your quote document(s) *</h2>
              <p className="text-slate-600 text-sm mb-3">PDF, JPG or PNG of your repair/resurfacing quote(s).</p>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <input type="file" multiple accept="image/jpeg,image/png,image/webp,application/pdf" onChange={handleQuoteFileSelect} className="hidden" id="quote-upload" />
                <label htmlFor="quote-upload" className="cursor-pointer text-sm text-slate-600 font-medium">Click to select quote files</label>
              </div>
              {quoteFiles.length > 0 && (
                <div className="mt-2 space-y-1">
                  {quoteFiles.map((f, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50 rounded px-3 py-2 text-xs">
                      <span className="truncate">{f.name}</span>
                      <button onClick={() => setQuoteFiles(prev => prev.filter((_, j) => j !== i))} className="text-red-500 ml-2">&times;</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pool photos */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Pool photos (optional but helpful)</h2>
              <p className="text-slate-600 text-sm mb-3">Photos of the pool help me assess whether the quoted work is appropriate.</p>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <input type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={handlePoolPhotoSelect} className="hidden" id="pool-photo-upload" />
                <label htmlFor="pool-photo-upload" className="cursor-pointer text-sm text-slate-600 font-medium">Click to select pool photos</label>
              </div>
              {poolPhotos.length > 0 && (
                <div className="mt-2 space-y-1">
                  {poolPhotos.map((f, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-50 rounded px-3 py-2 text-xs">
                      <span className="truncate">{f.name}</span>
                      <button onClick={() => setPoolPhotos(prev => prev.filter((_, j) => j !== i))} className="text-red-500 ml-2">&times;</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleUploadAndCheckout}
              disabled={loading || quoteFiles.length === 0}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors"
            >
              {loading ? 'Processing...' : 'Continue to payment  -  $79'}
            </button>
            <p className="text-xs text-slate-400 text-center">You can also email additional files after ordering by replying to your confirmation email.</p>
          </div>
        )}
      </div>
    </div>
  )
}
