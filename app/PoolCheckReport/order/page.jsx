'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const STATES = ['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT']
const AUDIENCE_TYPES = ['Buying a property', 'Pool owner', 'Selling a property', 'Other']
const MAX_PHOTOS = 10
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export default function PoolCheckReportOrder() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><p className="text-slate-400">Loading...</p></div>}>
      <PoolCheckReportOrderInner />
    </Suspense>
  )
}

function PoolCheckReportOrderInner() {
  const searchParams = useSearchParams()
  const isSuccess = searchParams.get('checkout') === 'success'
  const orderId = searchParams.get('orderId')

  const [step, setStep] = useState(isSuccess ? 'paid' : 'form') // form → upload → checkout → paid
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentOrderId, setCurrentOrderId] = useState(orderId || '')

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    poolAddress: '',
    state: '',
    audienceType: '',
    poolAge: '',
    poolBrand: '',
    issueSummary: '',
    confirmFibreglass: false,
    agreeBoundaries: false,
  })

  // Upload state
  const [photos, setPhotos] = useState([])
  const [uploadProgress, setUploadProgress] = useState(0)

  // Payment verification for success redirect
  useEffect(() => {
    if (isSuccess && orderId) {
      setStep('paid')
      // Fire Google Ads conversion event
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18010642704/pool_check_report',
          value: 149.0,
          currency: 'AUD',
          transaction_id: orderId,
        })
      }
    }
  }, [isSuccess, orderId])

  function updateForm(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  // Step 1: Submit form → create order in Supabase
  async function handleFormSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      const res = await fetch(`${supabaseUrl}/rest/v1/report_orders`, {
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
          pool_address: `${form.poolAddress}, ${form.state}`,
          audience_type: form.audienceType,
          pool_age: form.poolAge,
          pool_brand: form.poolBrand,
          issue_summary: form.issueSummary,
        }),
      })

      if (!res.ok) throw new Error('Failed to save order')

      const [order] = await res.json()
      setCurrentOrderId(order.id)
      setStep('upload')
    } catch (err) {
      setError('Something went wrong saving your order. Please try again or email help@fibreglasspoolcheck.com.au')
    }

    setLoading(false)
  }

  // Step 2: Upload photos
  function handleFileSelect(e) {
    const files = Array.from(e.target.files || [])
    const valid = files.filter(f => {
      if (f.size > MAX_FILE_SIZE) return false
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(f.type)) return false
      return true
    })
    setPhotos(prev => [...prev, ...valid].slice(0, MAX_PHOTOS))
  }

  function removePhoto(index) {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  async function uploadFilesDirectly(files, fieldName) {
    const urlRes = await fetch('/api/upload-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: currentOrderId,
        productType: 'pool_check_report',
        fieldName,
        files: files.map(f => ({ name: f.name })),
      }),
    })
    if (!urlRes.ok) throw new Error(`Failed to get upload URLs for ${fieldName}`)
    const { signedUrls } = await urlRes.json()

    const uploadedPaths = []
    for (let i = 0; i < signedUrls.length; i++) {
      const { signedUrl, path } = signedUrls[i]
      const file = files[i]
      const uploadRes = await fetch(signedUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      })
      if (!uploadRes.ok) { console.error(`Failed to upload ${file.name}`); continue }
      uploadedPaths.push(path)
    }
    if (uploadedPaths.length === 0) throw new Error(`All ${fieldName} uploads failed`)

    const confirmRes = await fetch('/api/confirm-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: currentOrderId,
        productType: 'pool_check_report',
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
      // Upload photos directly to Supabase Storage
      if (photos.length > 0) {
        await uploadFilesDirectly(photos, 'photos')
      }

      // Redirect to Stripe Checkout
      const checkoutRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'pool_check_report',
          orderId: currentOrderId,
        }),
      })

      if (!checkoutRes.ok) throw new Error('Failed to create checkout')

      const { checkoutUrl } = await checkoutRes.json()
      window.location.href = checkoutUrl
    } catch (err) {
      setError('Something went wrong. Please try again or email help@fibreglasspoolcheck.com.au')
      setLoading(false)
    }
  }

  // --- RENDER ---

  // Payment confirmed
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
          <p className="text-slate-600 mb-2">Thanks for your order. I've received your photos and payment.</p>
          <p className="text-slate-600 mb-6">Your Pool Check Report will be delivered to your email within <strong>2-3 business days</strong>.</p>
          <p className="text-sm text-slate-500 mb-8">If you have additional photos or notes, reply to the confirmation email and I'll include them.</p>
          <Link href="/" className="text-orange-600 hover:underline text-sm">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-10">
        <div className="max-w-2xl mx-auto px-4">
          <Link href="/PoolCheckReport" className="text-slate-400 text-sm hover:text-white mb-4 inline-block">&larr; Back to Pool Check Report</Link>
          <h1 className="text-3xl font-bold mb-2">Order Your Pool Check Report</h1>
          <p className="text-slate-300">$149 AUD — delivered within 2-3 business days</p>
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
            2. Upload photos
          </span>
          <span className="text-slate-300">&rarr;</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-400">
            3. Payment
          </span>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4 mb-6">
            {error}
          </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Pool address / suburb</label>
                <input type="text" value={form.poolAddress} onChange={e => updateForm('poolAddress', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. 12 Smith St, Kelvin Grove" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
                <select value={form.state} onChange={e => updateForm('state', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                  <option value="">Select</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">I am a...</label>
              <select value={form.audienceType} onChange={e => updateForm('audienceType', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value="">Select</option>
                {AUDIENCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Approximate pool age</label>
                <input type="text" value={form.poolAge} onChange={e => updateForm('poolAge', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. 10 years, unknown" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pool brand (if known)</label>
                <input type="text" value={form.poolBrand} onChange={e => updateForm('poolBrand', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. Compass, Leisure Pools" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Briefly describe your concern or what you'd like assessed</label>
              <textarea rows={3} value={form.issueSummary} onChange={e => updateForm('issueSummary', e.target.value)} className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="e.g. Noticed some blistering on the walls, buying at auction next week..." />
            </div>

            <div className="space-y-3 bg-slate-50 rounded-lg p-4">
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" required checked={form.confirmFibreglass} onChange={e => updateForm('confirmFibreglass', e.target.checked)} className="mt-0.5" />
                <span className="text-slate-700">I confirm the pool is a fibreglass (composite) pool, not concrete, vinyl or tiled.</span>
              </label>
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" required checked={form.agreeBoundaries} onChange={e => updateForm('agreeBoundaries', e.target.checked)} className="mt-0.5" />
                <span className="text-slate-700">I understand this is a photo-based assessment, not a physical inspection, and accept the <Link href="/ServiceBoundaries" className="text-orange-600 hover:underline">service scope</Link>.</span>
              </label>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors">
              {loading ? 'Saving...' : 'Continue to photo upload'}
            </button>
          </form>
        )}

        {/* STEP 2: Upload photos */}
        {step === 'upload' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Upload your pool photos</h2>
              <p className="text-slate-600 text-sm mb-1">The more I can see, the more thorough the report. Aim for 5-10 clear photos showing:</p>
              <ul className="text-sm text-slate-600 list-disc pl-5 mt-2 space-y-1">
                <li>Full pool overview from each end</li>
                <li>Close-ups of any damage, blistering, discolouration</li>
                <li>Pool coping and tile line</li>
                <li>Equipment pad (pump, filter, chlorinator)</li>
                <li>Any areas of concern</li>
              </ul>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileSelect}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="text-slate-400 text-4xl mb-2">&#128247;</div>
                <p className="text-sm text-slate-600 font-medium">Click to select photos</p>
                <p className="text-xs text-slate-400 mt-1">JPG, PNG or WebP. Max 5MB each. Up to {MAX_PHOTOS} photos.</p>
              </label>
            </div>

            {photos.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">{photos.length} photo{photos.length !== 1 ? 's' : ''} selected</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photos.map((file, i) => (
                    <div key={i} className="relative bg-slate-100 rounded-lg p-2 text-xs text-slate-600">
                      <button onClick={() => removePhoto(i)} className="absolute top-1 right-1 w-5 h-5 bg-red-100 text-red-600 rounded-full text-xs flex items-center justify-center hover:bg-red-200">&times;</button>
                      <p className="truncate">{file.name}</p>
                      <p className="text-slate-400">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleUploadAndCheckout}
                disabled={loading}
                className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {loading ? 'Processing...' : `Continue to payment — $149`}
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center">You can also email additional photos after ordering by replying to your confirmation email.</p>
          </div>
        )}
      </div>
    </div>
  )
}
