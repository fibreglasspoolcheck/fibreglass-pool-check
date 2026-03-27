# BuyerChecklist Page Redesign

**Date:** 2026-03-27
**Status:** Design approved, pending implementation
**Scope:** Redesign `/BuyerChecklist` page to match current site quality

## Problem

The BuyerChecklist page was built early in the project and never updated. It lacks the trust signals, layout patterns, and conversion elements present on the rest of the site (PoolCheckReport, BuyingAHouse, homepage, About). As a $29 digital product on a new site with no sales history, the page needs to earn trust and convert cold Google traffic.

## Design Approach

**Match & Mirror** - Rebuild using the same proven patterns from PoolCheckReport and BuyingAHouse, adapted for the $29 instant-download price point. Informed by research into low-price digital product conversion best practices.

## Page Structure (5 sections)

### Section 1: Hero (two-column)

Pattern source: Homepage hero (two-column with image)

**Left column:**
- Badge: "DIY inspection guide" (orange, uppercase, tracking-wide)
- H1: "Inspect the pool yourself, like a specialist would"
- Body copy with price anchor: "A missed fibreglass pool defect can cost **$5,000 to $20,000+** in repairs. This step-by-step checklist, written by a specialist with 10+ years and 250+ pools assessed, tells you exactly what to look for, what to photograph, and when to walk away."
- Price: "$29 AUD" (same style as PoolCheckReport)
- CTA button: "Get the Checklist" (orange-600, same style as PoolCheckReport)
- Guarantee line directly below CTA: "Not what you expected? Get in touch and I'll make it right." (italic, small, slate-400)

**Right column:**
- Product mockup image: the checklist PDF rendered on a phone screen
- Caption: "Instant download. Use on your phone at the open home."
- Implementation note: create a static mockup image at build time (not a live component)

**Why two-column:** The homepage uses this pattern. It makes the product feel tangible (digital products with visual previews convert 25-40% better). Single-column hero is reserved for PoolCheckReport where no product image exists (it's a service, not a download).

### Section 2: Urgency Banner

Pattern source: PoolCheckReport urgency banner (identical structure)

- Background: orange-600
- Copy: "**Viewing this weekend?** Instant delivery after purchase. Have it on your phone before the open home."

### Section 3: Main Content + Sticky Sidebar (lg:grid-cols-3)

Pattern source: BuyingAHouse page (2/3 content + 1/3 sticky sidebar)

**Main content (lg:col-span-2):**

"What's inside" - checklist bullet points rewritten as curiosity gaps:
- The surface patterns that indicate hidden structural damage
- How to tell cosmetic wear from problems that cost thousands
- Fitting and plumbing checks most buyers overlook
- The questions vendors and agents don't want you to ask
- Red flags that mean "get a specialist, or walk away"
- Exactly what to photograph and why it matters later
- Written in plain language, no technical jargon

Each bullet uses orange-600 checkmark icon (same component as PoolCheckReport "What's in the report" section).

"How it works" - 3-step numbered process:
1. **Place your order** - Enter your name and email, pay securely via Stripe.
2. **Instant delivery** - Your checklist PDF is delivered to your inbox immediately.
3. **Use it at the open home** - Pull it up on your phone and work through each checkpoint at the property.

Uses same numbered circle style as PoolCheckReport (slate-900 bg, white text, rounded-full).

**Sidebar (sticky top-24):**

Heading: "Need more than a checklist?"

Two product cards (NOT three - checklist is excluded since you're already on that page):

1. Pool Check Report ($149) - slate-50 bg, dark CTA button "Order Report"
   - Copy: "Submit photos, get a written report covering condition, defects, and recommendations. 2-3 business days."
2. Free Red Flags Guide - orange-50 bg, orange outline CTA "Get Free Guide"
   - Copy: "10 warning signs every pool buyer should know."

Sidebar structure matches BuyingAHouse exactly, minus the checklist card.

### Section 4: Comparison (Checklist vs Report)

Pattern source: Current BuyerChecklist comparison box (refined)

Full-width section. Heading: "Not sure which is right for you?" Subheading: "The checklist is your starting point. The report is the deep dive."

Two-column comparison grid:

**Left - Buyer Checklist:**
- "You're here" badge (dark pill, absolute positioned)
- Border: 2px solid slate-900
- "Best for: early-stage buyers attending open homes"
- Checkmarks: Self-guided inspection, Use at multiple properties, Know what to photograph, Instant download

**Right - Pool Check Report:**
- Border: 1px solid slate-200, bg slate-50
- "Best for: serious buyers or under contract"
- Checkmarks: Expert photo-based assessment, Written condition report, Red flags and recommendations, Use in price negotiations
- CTA: "Order Report Instead" (dark button)

No crossed-out items on the checklist side. Positive framing only.

### Section 5: Final CTA

Pattern source: PoolCheckReport final CTA block

- Dark rounded block (slate-900, rounded-2xl, p-8 lg:p-12)
- Heading: "Ready to inspect with confidence?"
- Body: "Secure payment via Stripe. Checklist delivered to your inbox instantly."
- CTA: "Get the Checklist" (orange-600 button)
- Guarantee: "Not what you expected? Get in touch and I'll make it right."
- Links: "Read the FAQ" and "get in touch" (underlined, slate-400/500)

### Mobile Sticky Buy Bar (NEW)

Not present on any current page. New pattern for this product.

- Fixed bottom, visible on mobile only (lg:hidden)
- Appears after scrolling past the hero CTA (use Intersection Observer)
- White background, top border slate-200
- Left: product name + "$29 AUD - Instant download"
- Right: "Get it" button (orange-600)
- Links to /BuyerChecklist/order

## What's Removed

1. **BRE Fibreglass cross-promo** - Conversion leak on a sales page. BRE promo already appears on homepage, PoolCheckReport page, and in post-purchase delivery emails.
2. **Testimonials section** - Current testimonials are from Brady's resurfacing work, not checklist buyers. Empty or mismatched testimonials hurt conversion. Add this section once real checklist reviews exist (3+ minimum).
3. **"Who this is for" persona cards** - Audience context folded into hero copy and comparison "Best for" lines. Keeps the page shorter for the $29 price point.

## SEO / Schema

**Metadata:**
- Title: "Fibreglass Pool Buyer Inspection Checklist | What to Look For $29"
- Description: Keep current (already good)
- Canonical: /BuyerChecklist

**Schema:** Keep existing Product schema (type, name, price, availability). No changes needed.

**Breadcrumbs:** Keep current BreadcrumbSchema. Note: "Reports & Services" links to '/' which is acceptable (no dedicated services page exists).

## Product Mockup Image

Create a static image showing the checklist PDF on a phone screen. Options at implementation:
- Use a free device mockup template with a screenshot of the actual PDF first page
- Save as optimised image in /public/images/
- Use Next.js Image component with priority loading

## Files Changed

- `app/BuyerChecklist/page.jsx` - Complete rewrite of page content
- `public/images/` - Add product mockup image

## Files NOT Changed

- `app/BuyerChecklist/order/page.jsx` - Order flow unchanged
- `api/checkout/route.js` - Payment flow unchanged
- `lib/stripe.js` - Product config unchanged
- `middleware.js` - Redirects unchanged
- `components/Nav.jsx` - Navigation unchanged
- `components/Footer.jsx` - Footer unchanged

## Implementation Notes

- Use frontend-design skill for implementation to ensure design quality
- Run /simplify after implementation to check for extractable patterns
- Mobile sticky bar: use a small client component with Intersection Observer to show/hide based on hero CTA visibility. This is the only client component on the page; the rest remains a server component.
- Test on mobile viewport - this page will primarily be found via mobile Google search
- Product mockup image should be created before page implementation begins
