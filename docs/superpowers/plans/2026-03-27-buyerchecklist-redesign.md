# BuyerChecklist Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the `/BuyerChecklist` page to match the quality and conversion patterns of the rest of the site.

**Architecture:** Complete rewrite of `app/BuyerChecklist/page.jsx` (server component) plus a new small client component for the mobile sticky buy bar. One new image asset for the product mockup. No changes to order flow, payment, API routes, or other pages.

**Tech Stack:** Next.js 14, Tailwind CSS, JSX (not TypeScript - matches existing codebase)

**Spec:** `docs/superpowers/specs/2026-03-27-buyerchecklist-redesign-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `app/BuyerChecklist/page.jsx` | Rewrite | Server component: metadata, schema, all 5 page sections |
| `components/MobileStickyBar.jsx` | Create | Client component: Intersection Observer show/hide logic |
| `public/images/checklist-mockup.png` | Create | Product mockup image (phone showing checklist PDF) |

---

### Task 1: Create Product Mockup Image

**Files:**
- Create: `public/images/checklist-mockup.png`

This must be done first since the hero section references this image.

- [ ] **Step 1: Generate a phone mockup image**

Create an SVG-based phone frame with checklist content rendered inside it, then export as a static image. The mockup should show a phone screen with a simplified version of checklist items visible.

Create the image using an HTML file rendered to a screenshot, or use a simple SVG approach. The image should be:
- Approximately 600x800px
- Phone frame with rounded corners
- Screen showing checklist-style content (checkboxes, section headers)
- Light background, professional appearance
- Saved as optimised PNG in `public/images/`

Alternative: If generating a realistic mockup proves complex, use a simpler approach - a clean illustration-style representation of the checklist on a device. The key requirement is that something visual exists in the hero; a placeholder image that looks intentional is better than no image.

- [ ] **Step 2: Verify the image loads**

Run: `ls -la public/images/checklist-mockup.png`
Expected: File exists, reasonable file size (under 500KB)

- [ ] **Step 3: Commit**

```bash
git add public/images/checklist-mockup.png
git commit -m "feat: add buyer checklist product mockup image"
```

---

### Task 2: Create Mobile Sticky Buy Bar Component

**Files:**
- Create: `components/MobileStickyBar.jsx`

- [ ] **Step 1: Create the client component**

```jsx
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
```

- [ ] **Step 2: Verify no syntax errors**

Run: `cd /home/brady/projects/fibreglass-pool-check && npx next lint --file components/MobileStickyBar.jsx 2>&1 | head -20`
Expected: No errors (warnings are acceptable)

- [ ] **Step 3: Commit**

```bash
git add components/MobileStickyBar.jsx
git commit -m "feat: add mobile sticky buy bar component for BuyerChecklist"
```

---

### Task 3: Rewrite BuyerChecklist Page

**Files:**
- Rewrite: `app/BuyerChecklist/page.jsx`

**Reference files to match patterns from:**
- `app/PoolCheckReport/page.jsx` (hero, urgency banner, "how it works" steps, final CTA)
- `app/BuyingAHouse/page.jsx:126-163` (sticky sidebar structure)
- `app/page.jsx:100-140` (two-column hero with image)

- [ ] **Step 1: Rewrite the complete page**

Replace the entire contents of `app/BuyerChecklist/page.jsx` with the following:

```jsx
import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '../../components/BreadcrumbSchema'
import MobileStickyBar from '../../components/MobileStickyBar'

export const metadata = {
  title: 'Fibreglass Pool Buyer Inspection Checklist | What to Look For $29',
  description: 'Know what to look for when buying a house with a fibreglass pool. This expert inspection checklist covers surface defects, structural red flags, and questions to ask. Instant download. $29 AUD.',
  alternates: {
    canonical: '/BuyerChecklist',
  },
}

function BuyerChecklistSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fibreglass Pool Buyer Checklist",
    "description": "Expert checklist that tells you exactly what to look for when inspecting a fibreglass pool. Covers surface condition, shell integrity, fittings, red flags, and photography tips in plain language.",
    "brand": {
      "@type": "Organization",
      "name": "Fibreglass Pool Check"
    },
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "AUD",
      "url": "https://fibreglasspoolcheck.com.au/BuyerChecklist/order",
      "availability": "https://schema.org/InStock"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function BuyerChecklist() {
  return (
    <>
      <BuyerChecklistSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Reports & Services', url: '/' },
        { name: 'Buyer Checklist', url: '/BuyerChecklist' }
      ]} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-medium text-orange-400 uppercase tracking-wide mb-3">DIY inspection guide</div>
              <h1 className="text-4xl font-bold mb-4">Inspect the pool yourself, like a specialist would</h1>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                A missed fibreglass pool defect can cost <strong className="text-white">$5,000 to $20,000+</strong> in repairs. This step-by-step checklist, written by a specialist with 10+ years and 250+ pools assessed, tells you exactly what to look for, what to photograph, and when to walk away.
              </p>
              <div className="text-3xl font-bold mb-6">$29 <span className="text-slate-400 text-lg font-normal">AUD</span></div>
              <div id="hero-cta">
                <Link
                  href="/BuyerChecklist/order"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Get the Checklist
                </Link>
              </div>
              <p className="text-slate-400 text-xs mt-3 italic">Not what you expected? Get in touch and I&apos;ll make it right.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/checklist-mockup.png"
                alt="Fibreglass Pool Buyer Checklist shown on a phone screen"
                width={500}
                height={600}
                priority
                className="w-full max-w-sm h-auto rounded-2xl"
              />
              <p className="text-slate-400 text-xs text-center mt-3">Instant download. Use on your phone at the open home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="bg-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm font-medium text-center">
            <strong>Viewing this weekend?</strong> Instant delivery after purchase. Have it on your phone before the open home.
          </p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s inside</h2>
                <div className="space-y-4">
                  {[
                    'The surface patterns that indicate hidden structural damage',
                    'How to tell cosmetic wear from problems that cost thousands',
                    'Fitting and plumbing checks most buyers overlook',
                    'The questions vendors and agents don\u2019t want you to ask',
                    'Red flags that mean \u201Cget a specialist, or walk away\u201D',
                    'Exactly what to photograph and why it matters later',
                    'Written in plain language, no technical jargon',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How it works</h2>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Place your order', body: 'Enter your name and email, pay securely via Stripe.' },
                    { step: '2', title: 'Instant delivery', body: 'Your checklist PDF is delivered to your inbox immediately.' },
                    { step: '3', title: 'Use it at the open home', body: 'Pull it up on your phone and work through each checkpoint at the property.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <div className="text-slate-600 text-sm mt-0.5">{item.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-slate-900 mb-4">Need more than a checklist?</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Pool Check Report</div>
                    <div className="text-orange-600 font-bold mb-2">$149</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">Submit photos, get a written report covering condition, defects, and recommendations. 2-3 business days.</p>
                    <Link
                      href="/PoolCheckReport/order"
                      className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Order Report
                    </Link>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-slate-900 text-sm mb-1">Free Red Flags Guide</div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3">10 warning signs every pool buyer should know.</p>
                    <Link
                      href="/RedFlagsGuide"
                      className="block text-orange-600 hover:text-orange-700 text-center py-2 px-4 rounded-lg text-sm font-medium border border-orange-300 hover:border-orange-400 transition-colors"
                    >
                      Get Free Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Not sure which is right for you?</h2>
          <p className="text-slate-600 mb-8">The checklist is your starting point. The report is the deep dive.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-slate-900 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">You&apos;re here</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Buyer Checklist</h3>
              <div className="text-orange-600 font-bold text-lg mb-3">$29</div>
              <p className="text-slate-500 text-xs mb-4">Best for: early-stage buyers attending open homes</p>
              <div className="space-y-2">
                {[
                  'Self-guided inspection',
                  'Use at multiple properties',
                  'Know what to photograph',
                  'Instant download',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-orange-600 text-sm">&#10003;</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-1">Pool Check Report</h3>
              <div className="text-orange-600 font-bold text-lg mb-3">$149</div>
              <p className="text-slate-500 text-xs mb-4">Best for: serious buyers or under contract</p>
              <div className="space-y-2 mb-6">
                {[
                  'Expert photo-based assessment',
                  'Written condition report',
                  'Red flags and recommendations',
                  'Use in price negotiations',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-orange-600 text-sm">&#10003;</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/PoolCheckReport/order"
                className="block bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Order Report Instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to inspect with confidence?</h2>
            <p className="text-slate-300 mb-6 max-w-md mx-auto text-sm">
              Secure payment via Stripe. Checklist delivered to your inbox instantly.
            </p>
            <Link
              href="/BuyerChecklist/order"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get the Checklist
            </Link>
            <p className="text-slate-400 text-xs mt-3 italic">Not what you expected? Get in touch and I&apos;ll make it right.</p>
            <p className="text-xs text-slate-500 mt-4">
              Questions first? <Link href="/faq" className="underline hover:text-slate-300">Read the FAQ</Link> or <Link href="/Contact" className="underline hover:text-slate-300">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile sticky buy bar */}
      <MobileStickyBar targetId="hero-cta" />
    </>
  )
}
```

- [ ] **Step 2: Run lint check**

Run: `cd /home/brady/projects/fibreglass-pool-check && npx next lint --file app/BuyerChecklist/page.jsx 2>&1 | head -20`
Expected: No errors

- [ ] **Step 3: Run dev server and verify page loads**

Run: `cd /home/brady/projects/fibreglass-pool-check && npx next dev --port 3099 &`
Then visit: `http://localhost:3099/BuyerChecklist`
Expected: Page renders with all 5 sections, no console errors. The product mockup image displays in the hero. Mobile sticky bar appears when scrolling on narrow viewport.

- [ ] **Step 4: Commit**

```bash
git add app/BuyerChecklist/page.jsx
git commit -m "feat: redesign BuyerChecklist page to match site quality

- Two-column hero with product mockup and price anchoring
- Curiosity-gap bullet copy for what's inside
- 3-step how it works process
- Sticky sidebar with report upsell and free guide
- Side-by-side checklist vs report comparison
- Mobile sticky buy bar
- Removed BRE cross-promo (conversion leak)
- Removed mismatched testimonials (add later with real reviews)"
```

---

### Task 4: Visual QA and Polish

**Files:**
- Modify: `app/BuyerChecklist/page.jsx` (if adjustments needed)
- Modify: `components/MobileStickyBar.jsx` (if adjustments needed)

- [ ] **Step 1: Desktop visual check**

Open `http://localhost:3099/BuyerChecklist` at full desktop width (1280px+).
Verify:
- Hero: two columns, image on right, copy on left
- Urgency banner: full-width orange
- Content section: 2/3 + 1/3 grid, sidebar sticks on scroll
- Comparison: two cards side by side, "You're here" badge visible
- Final CTA: dark rounded block, centered

- [ ] **Step 2: Mobile visual check**

Open at 375px width (iPhone SE).
Verify:
- Hero: stacks to single column (image below copy)
- Sidebar: stacks below content
- Comparison cards: stack vertically
- Mobile sticky bar: appears after scrolling past hero CTA
- Mobile sticky bar: hidden when hero CTA is visible

- [ ] **Step 3: Tablet visual check**

Open at 768px width (iPad).
Verify: Layout transitions are clean, no awkward in-between states.

- [ ] **Step 4: Link check**

Click every link on the page and verify it goes to the correct destination:
- "Get the Checklist" (hero) -> `/BuyerChecklist/order`
- "Order Report" (sidebar) -> `/PoolCheckReport/order`
- "Get Free Guide" (sidebar) -> `/RedFlagsGuide`
- "Order Report Instead" (comparison) -> `/PoolCheckReport/order`
- "Get the Checklist" (final CTA) -> `/BuyerChecklist/order`
- "Read the FAQ" -> `/faq`
- "get in touch" -> `/Contact`
- "Get it" (mobile sticky) -> `/BuyerChecklist/order`

- [ ] **Step 5: Fix any issues found and commit**

If adjustments were needed:
```bash
git add -u
git commit -m "fix: visual polish for BuyerChecklist redesign"
```

If no adjustments needed, skip this step.

---

### Task 5: Run /simplify and Final Review

- [ ] **Step 1: Run /simplify**

Invoke the simplify skill to review the changed code for reuse, quality, and efficiency.

- [ ] **Step 2: Apply any simplify recommendations and commit**

If changes suggested:
```bash
git add -u
git commit -m "refactor: apply simplify recommendations to BuyerChecklist"
```

- [ ] **Step 3: Stop dev server**

```bash
kill %1 2>/dev/null || true
```
