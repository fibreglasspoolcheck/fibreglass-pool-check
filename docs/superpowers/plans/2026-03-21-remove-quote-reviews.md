# Remove Quote Reviews Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely remove the Quote Review product ($79) from FPC so it does not compete with BRE Fibreglass.

**Architecture:** Delete QuoteReview pages, add redirects for old URLs, strip all references from 20+ files across the codebase. No new features, pure removal.

**Tech Stack:** Next.js 14, Stripe, Brevo (email), Supabase

**Spec:** `docs/superpowers/specs/2026-03-21-remove-quote-reviews-design.md`
**PRD:** `docs/superpowers/specs/2026-03-21-remove-quote-reviews-PRD.md`

---

### Task 1: Delete QuoteReview pages and add redirects

**Files:**
- Delete: `app/QuoteReview/page.jsx`
- Delete: `app/QuoteReview/order/page.jsx`
- Modify: `middleware.js`

- [ ] **Step 1: Delete QuoteReview pages**

```bash
cd ~/projects/fibreglass-pool-check
rm -rf app/QuoteReview
```

- [ ] **Step 2: Update middleware redirects**

In `middleware.js`, change the REDIRECTS object:
- Change `'/quotereview': '/QuoteReview'` to `'/quotereview': '/'`
- Add `'/QuoteReview': '/'`
- Add `'/QuoteReview/order': '/'`

The REDIRECTS object (lines 6-18) should become:

```javascript
const REDIRECTS = {
  '/contact': '/Contact',
  '/about': '/About',
  '/poolcheckreport': '/PoolCheckReport',
  '/quotereview': '/',
  '/QuoteReview': '/',
  '/QuoteReview/order': '/',
  '/buyerchecklist': '/BuyerChecklist',
  '/redflagsguide': '/RedFlagsGuide',
  '/onsiteassessment': '/OnSiteAssessment',
  '/buyingahouse': '/BuyingAHouse',
  '/poolowner': '/PoolOwner',
  '/serviceboundaries': '/ServiceBoundaries',
  '/FAQ': '/faq',
}
```

Update the matcher array (lines 36-48) to include the new paths:

```javascript
export const config = {
  matcher: [
    '/contact',
    '/about',
    '/poolcheckreport',
    '/quotereview',
    '/QuoteReview',
    '/QuoteReview/order',
    '/buyerchecklist',
    '/redflagsguide',
    '/onsiteassessment',
    '/buyingahouse',
    '/poolowner',
    '/serviceboundaries',
    '/FAQ',
  ],
}
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "refactor: remove QuoteReview pages and add redirects"
```

---

### Task 2: Remove Quote Review from Stripe, API routes, and email templates

**Files:**
- Modify: `lib/stripe.js:16-23` - remove quote_review product
- Modify: `lib/brevo.js:191-212` - remove sendQuoteReviewAcknowledgement function
- Modify: `app/api/confirm-upload/route.js:28-29` - remove quote_review from tableMap
- Modify: `app/api/webhook/route.js:7,103-121` - remove quote_review import and handling

- [ ] **Step 1: Remove quote_review from PRODUCTS in `lib/stripe.js`**

Delete lines 16-23 (the entire `quote_review` object). The PRODUCTS object should only contain `pool_check_report` and `buyer_checklist`.

- [ ] **Step 2: Remove sendQuoteReviewAcknowledgement from `lib/brevo.js`**

Delete the entire function at lines 191-212:
```javascript
// --- Quote Review order confirmation ---

export async function sendQuoteReviewAcknowledgement(fullName, email, orderId) {
  // ... entire function
}
```

- [ ] **Step 3: Remove quote_review from tableMap in `app/api/confirm-upload/route.js`**

Change the tableMap (lines 27-30) from:
```javascript
const tableMap = {
  pool_check_report: 'report_orders',
  quote_review: 'quote_review_orders',
}
```
To:
```javascript
const tableMap = {
  pool_check_report: 'report_orders',
}
```

Also remove `'quote_files'` and `'pool_photos'` from the ALLOWED_FIELDS array on line 22 since those were Quote Review fields:
```javascript
const ALLOWED_FIELDS = ['photos']
```

- [ ] **Step 4: Remove quote_review handling from `app/api/webhook/route.js`**

Remove `sendQuoteReviewAcknowledgement` from the import on line 7. The import should become:
```javascript
import {
  sendBuyerChecklistDelivery,
  sendReportAcknowledgement,
  notifyBradyNewOrder,
} from '../../../lib/brevo'
```

Delete the entire `else if (productType === 'quote_review')` block at lines 103-121.

- [ ] **Step 5: Verify checkout route**

Check `app/api/checkout/route.js` has no hardcoded `quote_review` references. It uses `PRODUCTS[productType]` generically, so removing from PRODUCTS is sufficient. No changes needed.

- [ ] **Step 6: Commit**

```bash
git add lib/stripe.js lib/brevo.js app/api/confirm-upload/route.js app/api/webhook/route.js && git commit -m "refactor: remove Quote Review from Stripe, API routes, and email templates"
```

---

### Task 3: Update homepage, layout, nav, footer, sitemap, and 404 page

**Files:**
- Modify: `app/page.jsx:5,6,118` - title, description, hero h1
- Modify: `app/page.jsx:75-82` - schema hasOfferCatalog Quote Review entry
- Modify: `app/layout.jsx:9,12,65` - default title, description, schema description
- Modify: `components/Nav.jsx:58-60` - mobile menu Quote Review link
- Modify: `components/Footer.jsx:23` - Quote Review footer link
- Modify: `app/sitemap.js:17-22` - QuoteReview sitemap entry
- Modify: `app/not-found.jsx:48-57` - Quote Review product card

- [ ] **Step 1: Update homepage metadata and hero (`app/page.jsx`)**

Line 5 - change title:
```
'Independent Fibreglass Pool Checks & Quote Reviews Australia'
```
To:
```
'Independent Fibreglass Pool Checks Australia'
```

Line 6 - change description:
```
'Get an independent fibreglass pool inspection report, quote review, or buyer checklist from a specialist with 250+ pools assessed. Australia-wide.'
```
To:
```
'Get an independent fibreglass pool inspection report or buyer checklist from a specialist with 250+ pools assessed. Australia-wide.'
```

Line 118 - change hero h1:
```
Independent Fibreglass Pool Checks & Quote Reviews
```
To:
```
Independent Fibreglass Pool Checks
```

Line 15 - change HomeSchema description:
```
"Independent fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience."
```
To:
```
"Independent fibreglass pool inspection reports and buyer guidance from an independent specialist with 10+ years experience."
```

Lines 75-82 - delete the Quote Review entry from the schema `hasOfferCatalog.itemListElement` array:
```javascript
{
  "@type": "Offer",
  "itemOffered": {
    "@type": "Service",
    "name": "Quote Review",
    "description": "Expert second opinion on fibreglass pool repair or resurfacing quotes."
  },
  "price": "79",
  "priceCurrency": "AUD"
},
```

- [ ] **Step 2: Update layout (`app/layout.jsx`)**

Line 9 - change default title:
```
'Independent Fibreglass Pool Checks & Quote Reviews Australia'
```
To:
```
'Independent Fibreglass Pool Checks Australia'
```

Line 12 - change description:
```
'Expert fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience.'
```
To:
```
'Expert fibreglass pool inspection reports and buyer guidance from an independent specialist with 10+ years experience.'
```

Line 65 - change schema description:
```
"Independent fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience."
```
To:
```
"Independent fibreglass pool inspection reports and buyer guidance from an independent specialist with 10+ years experience."
```

- [ ] **Step 3: Remove Quote Review from mobile nav (`components/Nav.jsx`)**

Delete lines 58-60:
```jsx
<Link href="/QuoteReview" className="text-sm text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
  Quote Review
</Link>
```

- [ ] **Step 4: Remove Quote Review from footer (`components/Footer.jsx`)**

Delete line 23:
```jsx
<li><Link href="/QuoteReview" className="text-sm text-slate-400 hover:text-white transition-colors">Quote Review</Link></li>
```

- [ ] **Step 5: Remove QuoteReview from sitemap (`app/sitemap.js`)**

Delete lines 17-22:
```javascript
{
        url: `${baseUrl}/QuoteReview`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
},
```

- [ ] **Step 6: Remove Quote Review card from 404 page (`app/not-found.jsx`)**

Delete lines 48-57 (the entire Quote Review product card):
```jsx
<div className="border border-slate-200 rounded-xl p-6 text-left">
  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">$79 AUD</p>
  <h2 className="text-lg font-bold text-slate-900 mb-2">Quote Review</h2>
  <p className="text-slate-600 text-sm leading-relaxed mb-4">
    Expert second opinion on fibreglass pool repair or resurfacing quotes.
  </p>
  <Link href="/QuoteReview" className="text-sm font-medium text-slate-900 hover:text-orange-600 transition-colors">
    Review my quote &rarr;
  </Link>
</div>
```

Also change the grid from `md:grid-cols-3` to `md:grid-cols-2` on line 36 since there are now only 2 product cards.

- [ ] **Step 7: Commit**

```bash
git add app/page.jsx app/layout.jsx components/Nav.jsx components/Footer.jsx app/sitemap.js app/not-found.jsx && git commit -m "refactor: remove Quote Review from homepage, nav, footer, sitemap, and 404"
```

---

### Task 4: Strip Quote Review references from content pages

**Files:**
- Modify: `app/faq/page.jsx:6,42-47` - description and 2 FAQ items
- Modify: `app/Contact/page.jsx:7` - description
- Modify: `app/PoolCheckReport/page.jsx:161-169` - cross-link section
- Modify: `app/BuyerChecklist/page.jsx:147-155` - cross-link section
- Modify: `app/PoolOwner/page.jsx:96,136-145` - body text and sidebar CTA
- Modify: `app/ServiceBoundaries/page.jsx:39` - list item

- [ ] **Step 1: Update FAQ page (`app/faq/page.jsx`)**

Line 6 - change description:
```
'Answers to 17 common questions about fibreglass pool inspections, quote reviews, and what to look for before buying a property with a pool.'
```
To:
```
'Common questions about fibreglass pool inspections and what to look for before buying a property with a pool.'
```

Delete the two Quote Review FAQ items at lines 42-47:
```javascript
{
  q: 'What is a Quote Review?',
  a: 'A Quote Review is an expert assessment of a repair or resurfacing quote you\'ve already received. We review the scope of work, the methods and materials specified, and the price \u2014 and give you a written opinion on whether it\'s reasonable, what questions to ask, and any concerns.',
},
{
  q: 'How many quotes can be included in a Quote Review?',
  a: 'Up to 3 quotes can be reviewed for the single $79 fee. If you have multiple quotes, sending them all gives us useful context for the review.',
},
```

- [ ] **Step 2: Update Contact page (`app/Contact/page.jsx`)**

Line 7 - change description:
```
'Have questions about fibreglass pool inspections or quote reviews? Get in touch  -  I typically respond within a few hours.'
```
To:
```
'Have questions about fibreglass pool inspections? Get in touch  -  I typically respond within a few hours.'
```

- [ ] **Step 3: Remove Quote Review cross-link from Pool Check Report page (`app/PoolCheckReport/page.jsx`)**

Delete the entire cross-link section at lines 161-169:
```jsx
<p className="text-slate-700 text-sm mb-3">
  Already have a repair or resurfacing quote? Get it reviewed for $79 →
</p>
<Link
  href="/QuoteReview"
  className="inline-block text-orange-600 hover:text-orange-700 font-medium text-sm underline"
>
  Get a Quote Review
</Link>
```

- [ ] **Step 4: Remove Quote Review cross-link from Buyer Checklist page (`app/BuyerChecklist/page.jsx`)**

Delete the entire cross-link section at lines 147-155:
```jsx
<p className="text-slate-700 text-sm mb-3">
  Already have a repair quote? Get an expert second opinion for $79 →
</p>
<Link
  href="/QuoteReview"
  className="inline-block text-orange-600 hover:text-orange-700 font-medium text-sm underline"
>
  Get a Quote Review
</Link>
```

- [ ] **Step 5: Remove Quote Review references from Pool Owner page (`app/PoolOwner/page.jsx`)**

Line 96 - remove the sentence:
```
I can also review quotes you've received to assess whether the pricing and scope are reasonable.
```

Delete the entire Quote Review sidebar CTA box at lines 136-145:
```jsx
<div className="p-4 bg-slate-50 rounded-lg">
  <div className="font-semibold text-slate-900 text-sm mb-1">Quote Review</div>
  <div className="text-orange-600 font-bold mb-2">$79</div>
  <p className="text-slate-500 text-xs leading-relaxed mb-3">Got a resurfacing or repair quote? I'll tell you if it's fair and what to watch out for.</p>
  <Link
    href="/QuoteReview/order"
    className="block border border-slate-300 hover:border-slate-400 text-slate-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors"
  >
    Get Quote Reviewed
  </Link>
</div>
```

- [ ] **Step 6: Remove Quote Review from Service Boundaries page (`app/ServiceBoundaries/page.jsx`)**

Delete line 39:
```
'A quote review service for resurfacing and repair quotes',
```

- [ ] **Step 7: Commit**

```bash
git add app/faq/page.jsx app/Contact/page.jsx app/PoolCheckReport/page.jsx app/BuyerChecklist/page.jsx app/PoolOwner/page.jsx app/ServiceBoundaries/page.jsx && git commit -m "refactor: remove Quote Review references from content pages"
```

---

### Task 5: Strip Quote Review references from blog posts

**Files:**
- Modify: `app/blog/fibreglass-pool-delamination/page.jsx:233-234,259-263`
- Modify: `app/blog/fibreglass-pool-osmotic-blistering/page.jsx:85-86,201-205,222-226`
- Modify: `app/blog/fibreglass-pool-resurfacing-cost-australia/page.jsx:245-246,262-263,283-287`

- [ ] **Step 1: Update delamination blog post**

Lines 233-234 - replace the Quote Review mention. Change:
```
If you're outside SEQ, the <Link href="/QuoteReview" ...>Quote Review service</Link> can help you evaluate quotes you've received from local repairers  -  so you know whether the price is fair and the scope of work is right.
```
To:
```
If you're outside SEQ, the <Link href="/PoolCheckReport" className="text-orange-600 hover:underline font-medium">Pool Check Report</Link> can help you understand the condition of your pool before committing to repairs.
```

Lines 259-263 - delete the Quote Review CTA button:
```jsx
<Link
  href="/QuoteReview"
  className="inline-block bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
>
  Get a Quote Review  -  $99
</Link>
```

- [ ] **Step 2: Update osmotic blistering blog post**

Lines 85-86 - change the sentence that mentions Quote Review. Replace:
```
If you've already got a resurfacing quote, get it reviewed for <Link href="/QuoteReview/order" className="underline font-medium">$79</Link>.
```
With nothing (just delete that sentence portion after the Pool Check Report link).

Lines 201-205 - delete the entire Quote Review paragraph:
```
If you've already been told your pool needs resurfacing and you have a quote, the <Link href="/QuoteReview/order" ...>Quote Review ($79)</Link> is worth doing before you sign. I'll check whether the recommended scope of work is appropriate, the materials are right, and the price is within the expected range.
```

Lines 222-226 - delete the Quote Review CTA button:
```jsx
<Link
  href="/QuoteReview/order"
  className="inline-block border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg font-medium transition-colors"
>
  Get a Quote Review  -  $79
</Link>
```

- [ ] **Step 3: Update resurfacing cost blog post**

Lines 245-246 - replace Quote Review mention. Change:
```
Use the <Link href="/QuoteReview" ...>Quote Review service</Link>  -  send me your quote and pool photos, and I'll tell you whether the scope, pricing, and approach look reasonable for your specific pool.
```
To:
```
Use the <Link href="/PoolCheckReport" className="underline font-medium">Pool Check Report</Link>  -  send me your pool photos and I'll assess the condition and recommend what work is actually needed.
```

Lines 262-263 - replace Quote Review mention. Change:
```
If you've already got a quote and want to know whether it's fair, the <Link href="/QuoteReview" ...>Quote Review</Link> is designed exactly for that.
```
To:
```
If you want to understand what your pool actually needs before committing to repairs, the <Link href="/PoolCheckReport" className="text-orange-600 hover:underline font-medium">Pool Check Report</Link> gives you an independent assessment.
```

Lines 283-287 - delete the Quote Review CTA button:
```jsx
<Link
  href="/QuoteReview"
  className="inline-block bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
>
  Get a Quote Review
</Link>
```

- [ ] **Step 4: Commit**

```bash
git add app/blog/ && git commit -m "refactor: remove Quote Review references from blog posts"
```

---

### Task 6: Final verification

- [ ] **Step 1: Grep for any remaining Quote Review references**

```bash
cd ~/projects/fibreglass-pool-check
grep -ri "quotereview\|quote.review\|quote_review\|quote-review" --include="*.jsx" --include="*.js" --include="*.json" . | grep -v node_modules | grep -v .next | grep -v docs/
```

Expected: only middleware.js redirect entries (pointing to `/`).

- [ ] **Step 2: Build verification**

```bash
npm run build
```

Expected: build passes with no errors.

- [ ] **Step 3: Final commit if any fixes needed**

If grep found missed references or build failed, fix and commit:
```bash
git add -A && git commit -m "fix: clean up remaining Quote Review references"
```

- [ ] **Step 4: Review git log**

```bash
git log --oneline -10
```

Verify all commits are clean and in order.

---

## Post-Implementation (Brady does manually)

- Deactivate Quote Review product in Stripe dashboard
- Update Google Ads if any ads reference Quote Review
- Resubmit sitemap in Google Search Console
