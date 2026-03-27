# Fibreglass Pool Check - Site-Wide Redesign

**Date:** 2026-03-27
**Status:** Design approved, pending implementation
**Scope:** Full visual redesign of every page on fibreglasspoolcheck.com.au

## Problem

The site was built incrementally over several weeks. Pages were created at different times with different design patterns, resulting in three visible "eras" of quality:

- Era 1 (minimal): FAQ, Contact, RedFlagsGuide - missing dark heroes, CTA blocks, or both
- Era 2 (content pages): BuyingAHouse, PoolOwner, OnSiteAssessment, ServiceBoundaries - inconsistent card styles, missing CTAs, no visual rhythm
- Era 3 (polished): Homepage, About, PoolCheckReport - full visual treatment

The site also uses generic system fonts, flat solid backgrounds, and an evenly-distributed orange accent that lacks editorial sophistication.

## Design Direction

**Tone:** Editorial/magazine. Think Architectural Digest for pools. Typography-led, photography-forward, generous whitespace. Says "this is premium content from a specialist."

**Visual identity reference:** Mockup at `.superpowers/brainstorm/73517-1774579385/content/editorial-direction.html`

## Typography

**Headings:** DM Serif Display (Google Fonts). Warm, editorial character. Used for all H1, H2, and product card titles. Letter-spacing: -0.01em. Line-height: 1.15 on H1, 1.2 on H2.

**Body:** DM Sans (Google Fonts). Clean, modern, pairs well with the serif. Used for all body text, labels, buttons, navigation.

**Labels/Badges:** DM Sans, 11px, font-weight 600, uppercase, letter-spacing 0.1em. Orange (#d4622b) colour.

**Load via Google Fonts in layout.jsx:**
```
DM Serif Display:wght@400
DM Sans:wght@400;500;600;700
```

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| --ink | #1a1a1a | Primary text |
| --ink-light | #3d3d3d | Secondary text |
| --warm-grey | #6b6560 | Tertiary text, descriptions |
| --cream | #faf8f5 | Primary background (replaces pure white) |
| --warm-white | #f5f2ee | Alternating section background (replaces slate-50) |
| --accent | #d4622b | CTA buttons, labels, key accents only |
| --accent-hover | #b8531f | Button hover state |
| --deep | #141211 | Hero backgrounds, CTA blocks, nav, footer (replaces slate-900/#1e293b) |

**Key change from current site:** Orange is restrained to CTAs and labels. It no longer appears in checkmark bullets, urgency banners, or background fills. Checkmark bullets use --ink or --warm-grey. The urgency banner becomes a subtle strip in --deep with --accent text, not a full orange block.

**Backgrounds use warm tones (cream, warm-white) instead of cold whites and greys.** This gives the site editorial warmth.

## Texture and Depth

- Hero sections: subtle radial gradient `rgba(212,98,43,0.06)` from top-right corner for warmth
- Dark CTA blocks: centred radial gradient behind the CTA button for focal glow
- Cards: white background with `border: 1px solid #e8e4df` (warm border, not cold slate)
- No flat solid backgrounds anywhere. Every dark section has at least a subtle gradient or texture.

## Page Structure Rules

### Every Page Must Have

1. **Nav** (shared component, unchanged structure but updated colours/fonts)
2. **Hero section** (dark --deep background, except homepage which keeps unique white hero)
3. **Content sections** (alternating --cream and --warm-white backgrounds)
4. **Dark final CTA block** (--deep background, centred, serif heading, primary CTA button)
5. **Footer** (shared component, updated colours/fonts)

### Three Page Categories

**Sales pages** (full-width, no sidebar):
- PoolCheckReport, BuyerChecklist
- Dark hero with price, CTA, guarantee
- Urgency/context banner (subtle, not full orange)
- Feature list, process steps, comparison or persona cards
- Dark final CTA

**Content/resource pages** (2/3 content + 1/3 sticky sidebar):
- BuyingAHouse, PoolOwner, RedFlagsGuide, OnSiteAssessment, blog posts
- Dark hero (no price/CTA in hero)
- Content in lg:grid-cols-3 with lg:col-span-2 for content
- Sticky sidebar with product cards (omit card for current page's own product)
- Dark final CTA

**Utility pages** (full-width, no sidebar):
- FAQ, Contact, ServiceBoundaries, order pages
- Dark hero
- Content sections
- Dark final CTA

### Hero Standard

All pages except homepage:
```
Background: var(--deep)
Padding: py-16 lg:py-20
Max-width container: max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
Content: max-w-2xl or max-w-3xl

Elements:
1. Label (DM Sans, 11px, uppercase, --accent colour)
2. H1 (DM Serif Display, text-4xl, white)
3. Body (DM Sans, text-lg, warm-grey, leading-relaxed)
4. [Sales pages only] Price block + CTA button + guarantee
```

Homepage exception: keeps its current unique white/cream two-column hero with real pool photography.

### Alternating Section Backgrounds

Every content section alternates between --cream and --warm-white:
```
Section 1: var(--cream)    (#faf8f5)
Section 2: var(--warm-white) (#f5f2ee)
Section 3: var(--cream)
Section 4: var(--warm-white)
...
Final: Dark CTA block (var(--deep))
```

### Dark Final CTA Block

Every page ends with this before the footer:
```
Background: var(--deep) with centred radial gradient glow
Border-radius: rounded-2xl (when not full-width) or none (when full-width)
Padding: p-8 lg:p-12
Text-align: centre

Elements:
1. H2 (DM Serif Display, white)
2. Supporting copy (--warm-grey)
3. Primary CTA button (--accent bg)
4. Optional secondary links (FAQ, contact)
```

Primary CTA is always the Pool Check Report ($149) unless you're already on that page, in which case use the Buyer Checklist or contextual alternative.

### Sticky Sidebar

Content/resource pages only. Structure from BuyingAHouse page, adapted to new colours:
```
Container: border 1px solid #e8e4df, rounded-xl, p-6, sticky top-24
Heading: contextual (e.g., "Get an independent assessment")

Product cards (omit card for current page's product):
1. Pool Check Report ($149) - warm-white bg, dark CTA button
2. Buyer Checklist ($29) - warm-white bg, outline button
3. Free Red Flags Guide - light accent bg, accent outline button
```

### Urgency/Context Banner

Sales pages only. Replaces the current full-orange banner:
```
Background: var(--deep) or subtle dark strip
Border-top: 1px solid rgba(212,98,43,0.15)
Text: --accent colour for the bold keyword, --warm-grey for the rest
Font-size: text-sm
Padding: py-3
```

This is more restrained than the current full orange-600 block. The information is still prominent but doesn't scream.

### Card Styles

All cards across the site use the same base:
```
Background: white
Border: 1px solid #e8e4df
Border-radius: rounded-xl (12px)
Padding: p-6 or p-8
```

Featured/highlighted cards:
```
Border: 2px solid var(--ink)
Optional "Most popular" badge (--ink bg, white text, absolute positioned)
```

No yellow/cream cards (removes OnSiteAssessment inconsistency). No different card styles per page.

### Checkmark Bullets

Replace orange circle + SVG checkmark with a simpler editorial style:
```
Accent colour checkmark character or small SVG
Text in --ink-light
No background circle
```

This is cleaner and doesn't overuse the accent colour.

### Photography Rules

- **Homepage:** Real pool photography in hero (already has it)
- **About:** Before/after photography and testimonial photos (already has it)
- **Sales pages:** Photography where available (PoolCheckReport could add a sample report preview or pool photo)
- **Content/resource pages:** Photography where it adds value
- **Utility pages:** No photography
- **BuyerChecklist:** No SVG mockup. Single-column hero, no image.

## Page-by-Page Changes

### No Changes (already at standard or close)
- **Homepage:** Update typography and colours only. Structure unchanged.
- **About:** Update typography and colours only. Structure unchanged.

### Structural + Visual Updates
- **PoolCheckReport:** New typography/colours, alternating section bgs, restrained urgency banner
- **BuyerChecklist:** Remove SVG mockup, single-column hero, new typography/colours, alternating bgs
- **BuyingAHouse:** New typography/colours, add dark final CTA block, alternating bgs
- **PoolOwner:** New typography/colours, add dark final CTA block, alternating bgs
- **FAQ:** Add dark hero section, new typography/colours, add dark final CTA block, alternating bgs
- **Contact:** Expand hero to full dark treatment, new typography/colours, add dark final CTA block
- **RedFlagsGuide:** New typography/colours, add sticky sidebar, add dark final CTA block, alternating bgs
- **OnSiteAssessment:** Fix card styles to match site standard (remove yellow/cream cards), new typography/colours, add sticky sidebar, add dark final CTA block, alternating bgs
- **ServiceBoundaries:** Fix badge style, new typography/colours, add dark final CTA block, alternating bgs

### Blog
- **Blog index:** New typography/colours, switch from horizontal-rule list to card-based layout, add dark final CTA block
- **All 10 blog posts:** New typography/colours, add sticky sidebar, add dark final CTA block

### Shared Components
- **Nav (components/Nav.jsx):** Update bg to --deep, update font to DM Sans, update link colours
- **Footer (components/Footer.jsx):** Update bg to --deep, update font to DM Sans, update text colours to warm palette
- **BreadcrumbSchema:** No changes (invisible component)

### Global
- **app/layout.jsx:** Add Google Fonts link for DM Serif Display + DM Sans, add CSS variables to root
- **tailwind.config.js:** Extend theme with custom colours (ink, cream, warm-white, accent, deep) and font families

## Implementation Order

1. **Global foundations:** layout.jsx (fonts), tailwind.config.js (colours/fonts), CSS variables
2. **Shared components:** Nav, Footer
3. **Homepage:** Typography and colour updates (structure unchanged)
4. **About:** Typography and colour updates (structure unchanged)
5. **PoolCheckReport:** Full update
6. **BuyerChecklist:** Remove SVG, single-column hero, full update
7. **BuyingAHouse:** Add CTA block, full update
8. **PoolOwner:** Add CTA block, full update
9. **FAQ:** Add dark hero, add CTA block, full update
10. **Contact:** Expand hero, add CTA block, full update
11. **RedFlagsGuide:** Add sidebar, add CTA block, full update
12. **OnSiteAssessment:** Fix cards, add sidebar, add CTA block, full update
13. **ServiceBoundaries:** Fix badge, add CTA block, full update
14. **Blog index:** Card layout, add CTA block, full update
15. **Blog posts (10):** Add sidebar, add CTA block, full update
16. **Order pages:** Typography and colour updates

## Files Changed

### Created/Modified
- `app/layout.jsx` - Google Fonts, CSS variables
- `tailwind.config.js` - Custom theme extensions
- `components/Nav.jsx` - Colour/font updates
- `components/Footer.jsx` - Colour/font updates
- `app/page.jsx` - Typography/colour updates
- `app/About/page.jsx` - Typography/colour updates
- `app/PoolCheckReport/page.jsx` - Full update
- `app/BuyerChecklist/page.jsx` - Remove SVG, single-column hero, full update
- `app/BuyingAHouse/page.jsx` - Add CTA, full update
- `app/PoolOwner/page.jsx` - Add CTA, full update
- `app/faq/page.jsx` - Add hero, add CTA, full update
- `app/Contact/page.jsx` - Expand hero, add CTA, full update
- `app/RedFlagsGuide/page.jsx` - Add sidebar, add CTA, full update
- `app/OnSiteAssessment/page.jsx` - Fix cards, add sidebar, add CTA, full update
- `app/ServiceBoundaries/page.jsx` - Fix badge, add CTA, full update
- `app/blog/page.jsx` - Card layout, add CTA, full update
- `app/blog/fibreglass-pool-delamination/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/buying-house-with-fibreglass-pool/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/fibreglass-pool-cracks-hairline-vs-structural/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/how-long-does-fibreglass-pool-last/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/fibreglass-pool-osmotic-blistering/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/fibreglass-pool-inspection-vs-building-inspection/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/fibreglass-pool-fading-discolouration/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/fibreglass-pool-resurfacing-cost-australia/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/things-building-inspectors-miss-about-pools/page.jsx` - Add sidebar, add CTA, full update
- `app/blog/real-cost-owning-pool-australia/page.jsx` - Add sidebar, add CTA, full update
- `app/PoolCheckReport/order/page.jsx` - Typography/colour updates
- `app/BuyerChecklist/order/page.jsx` - Typography/colour updates

### Deleted
- `public/images/checklist-mockup.svg` - No longer needed
- `components/MobileStickyBar.jsx` - Remove if single-column hero removes the need (evaluate during implementation)

### Not Changed
- `app/api/*` - No API changes
- `lib/*` - No backend changes
- `middleware.js` - No redirect changes
- `app/RedFlagsGuideAccess/page.jsx` - Internal page, low priority

## Verification

After implementation, run Playwright audit (same script used in this session) to verify:
- All pages return 200
- All links work
- Consistent dark hero on every page (except homepage)
- Dark CTA block on every page
- Sidebar on all content/resource pages
- No broken images
- Mobile responsive (no overflow)
- Typography loads correctly (DM Serif Display + DM Sans)

Visual inspection of every page screenshot to verify editorial consistency.
