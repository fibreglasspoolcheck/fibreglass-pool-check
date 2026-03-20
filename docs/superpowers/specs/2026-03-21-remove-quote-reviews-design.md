# Remove Quote Reviews from FPC

## Date: 2026-03-21

## Goal

Completely remove the Quote Review product ($79) from Fibreglass Pool Check so it does not compete with BRE Fibreglass (which does the actual resurfacing/repair work). FPC finds problems, BRE fixes them. Quote Reviews undermine this funnel by helping customers evaluate BRE's competitors.

## Product Lineup After

| Product | Price | Type |
|---------|-------|------|
| Pool Check Report | $149 | Paid (Stripe) |
| Buyer Checklist | $29 | Paid (Stripe) |
| Red Flags Guide | Free | Download |
| On-Site Assessment | By request | Contact form |

Quote Review ($79) is removed entirely.

## Changes Required

### 1. Delete Pages
- `app/QuoteReview/page.jsx` - product info page
- `app/QuoteReview/order/page.jsx` - order form

### 2. Homepage (`app/page.jsx`)
- Hero h1: "Independent Fibreglass Pool Checks" (remove "& Quote Reviews")
- Metadata title: "Independent Fibreglass Pool Checks Australia" (remove "& Quote Reviews")
- Metadata description: remove quote review mention
- Schema markup: remove Quote Review from `hasOfferCatalog`
- Remove any Quote Review CTAs or product cards

### 3. Layout (`app/layout.jsx`)
- Default title: remove "& Quote Reviews"

### 4. Navigation (`components/Nav.jsx`)
- Remove Quote Review link from nav menu

### 5. Footer (`components/Footer.jsx`)
- Remove Quote Review link

### 6. Sitemap (`app/sitemap.js`)
- Remove `/QuoteReview` URL

### 7. Middleware (`middleware.js`)
- Remove any QuoteReview route handling
- Add redirect: `/QuoteReview` and `/QuoteReview/*` -> `/` (homepage)

### 8. Stripe Config (`lib/stripe.js`)
- Remove Quote Review product/price configuration

### 9. API Routes
- `app/api/confirm-upload/route.js` - remove Quote Review field handling
- `app/api/webhook/route.js` - remove Quote Review order processing

### 10. Email Templates (`lib/brevo.js`)
- Remove Quote Review email template references

### 11. Other Pages (strip text references)
- `app/faq/page.jsx` - remove Quote Review FAQ items
- `app/Contact/page.jsx` - remove Quote Review mentions
- `app/PoolCheckReport/page.jsx` - remove Quote Review cross-references
- `app/BuyerChecklist/page.jsx` - remove Quote Review cross-references
- `app/PoolOwner/page.jsx` - remove Quote Review mentions
- `app/ServiceBoundaries/page.jsx` - remove Quote Review mentions
- `app/not-found.jsx` - remove Quote Review link

### 12. Blog Posts (strip text references)
- `app/blog/fibreglass-pool-delamination/page.jsx`
- `app/blog/fibreglass-pool-osmotic-blistering/page.jsx`
- `app/blog/fibreglass-pool-resurfacing-cost-australia/page.jsx`

### 13. Redirect
- `/QuoteReview` -> `/` (301 redirect via middleware or next.config.js)
- `/QuoteReview/order` -> `/` (301 redirect)
- Prevents 404s from any Google-indexed or bookmarked URLs

## Out of Scope
- Stripe dashboard changes (Brady handles manually)
- Google Ads changes (separate task)
- New product creation
- Design/layout changes beyond removing Quote Review content

## Verification
- `npm run build` passes
- No references to "Quote Review" or "QuoteReview" in any source files (except redirect config)
- `/QuoteReview` returns 301 redirect to homepage
- Nav and footer only show remaining products
- Homepage hero shows updated tagline
