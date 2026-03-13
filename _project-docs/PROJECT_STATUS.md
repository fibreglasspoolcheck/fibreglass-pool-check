# PROJECT_STATUS.md
## fibreglasspoolcheck.com.au — Master Source of Truth
**Last updated:** March 2026  
**Instructions:** Paste the full contents of this file at the start of every new Claude session. Claude treats this as gospel and updates it at the end of every session.

---

## 1. BUSINESS OVERVIEW

| Field | Detail |
|---|---|
| Business name | Fibreglass Pool Check |
| Owner / operator | Brady Smith |
| Website | fibreglasspoolcheck.com.au |
| Email | help@fibreglasspoolcheck.com.au |
| Email provider | Google Workspace |
| Domain registrar | VentraIP |

### Products
| Product | Price | Status |
|---|---|---|
| Pool Check Report | $149 AUD | Live |
| Quote Review | $79 AUD | Live |
| Buyer Checklist | $29 AUD | Live |
| Red Flags Guide | Free (lead magnet) | Live |
| On-Site Assessment | Request only | Live |

---

## 2. TECH STACK

| Component | Service | Notes |
|---|---|---|
| Frontend framework | Next.js (server-rendered) | Rebuilt from Base44 React SPA |
| Hosting / deployment | Vercel | Auto-deploys from GitHub on commit |
| Repository | GitHub — `fibreglass-pool-check` (private) | |
| Domain DNS | VentraIP | Pointed to Vercel |
| Orders / payments (current) | Base44 at `app.fibreglasspoolcheck.com.au` | To be replaced in Phase 2 |
| Payments processor | Stripe | Already integrated in Base44 |
| Email (current) | Resend via Base44 | To be replaced by Brevo in Phase 2 |
| Analytics | Google Analytics (GA4) | Present in site source |
| Google Ads tag | AW-18010642704 | In root layout on every page |
| Google site verification TXT | `google-site-verification=3EoSEdhGbyLvFmuHxDAbm6rJqulpv9yPy47ttGoy550` | Already in VentraIP DNS |
| Google site verification TXT 2 | `google-site-verification=N2Fg0uvjfbvYDF3VMyudrZGozeOk2HGwrv-B0W_i_S4` | Already in VentraIP DNS |

### Phase 2 Planned Stack (Base44 replacement)
| Component | Service |
|---|---|
| Database + file storage | Supabase (free tier) |
| Automated email | Brevo (free tier) |
| Payments | Stripe direct (Next.js API routes) |

---

## 3. DECISIONS ALREADY MADE

- ✅ **Platform:** Next.js on Vercel — decided and built. Do not suggest WordPress or other platforms.
- ✅ **Phase 1 first:** Marketing site goes live before Phase 2 (cutting Base44).
- ✅ **Keep Base44 running** until Phase 2 is fully built and tested.
- ✅ **Phase 2 backend:** Supabase + Brevo + Stripe direct. Decided.
- ✅ **Do NOT submit indexing request to Google** until audit fixes are implemented.
- ✅ **Verify Google Search Console** (ownership only) as soon as possible — the TXT record is already in DNS.
- ✅ **Instructions must be step-by-step** — do this, then that. Never skip ahead. Confirm each step is working before moving to the next.

---

## 4. WHAT HAS BEEN BUILT AND CONFIRMED WORKING

### Phase 1 — Next.js Marketing Site ✅ LIVE
- Site is live at `fibreglasspoolcheck.com.au`
- Deployed on Vercel, DNS correctly pointed via VentraIP
- All "Order Now" / "Get Report" links point to `app.fibreglasspoolcheck.com.au` (Base44) — orders still flowing
- Google Ads conversion tag `AW-18010642704` in root layout on every page
- Pages built (Next.js server-rendered):
  - `/` — Homepage
  - `/about` — About Brady
  - `/faq` — FAQ page
  - `/contact` — Contact form
  - `/pool-check-report` — Product page
  - `/quote-review` — Product page
  - `/buyer-checklist` — Product page
  - `/red-flags-guide` — Lead magnet page
  - `/on-site-assessment` — Request page
  - `/buying-a-house-with-a-pool` — Content page (built but needs content review)
  - `/pool-owner-advice` — Content page (built but needs content review)
  - `/service-scope` — Content page (built but needs content review)
  - `/red-flags-guide-access` — Post-signup thank you (set to noindex)

### VentraIP DNS — Confirmed Correct Records
- A record: `fibreglasspoolcheck.com.au` → `76.76.21.21` (Vercel) ✅
- CNAME: `www.fibreglasspoolcheck.com.au` → `cname.vercel-dns.com` ✅  
- MX records: Google Workspace email ✅
- TXT records: Google Workspace verification + SPF ✅
- Sendgrid CNAMEs for Resend (Base44 email): still present — remove in Phase 2
- Base44 ALIAS and CNAME records: **deleted** ✅

---

## 5. CURRENT OUTSTANDING ISSUES (Audit Findings)

These are confirmed problems that need fixing, in priority order:

### 🔴 Critical — Fix Immediately
| # | Issue | Impact |
|---|---|---|
| 1 | Google Search Console not yet verified/submitted | Cannot measure SEO performance |
| 2 | No robots.txt — returns 404 | Google has no crawl guidance |
| 3 | No sitemap.xml — returns 404 | Pages may not be discovered |
| 4 | No canonical tags on any page | Duplicate content risk |
| 5 | No schema markup anywhere | Missing rich results, lower CTR |
| 6 | No OG / Twitter Card meta tags | Social shares look broken |
| 7 | Duplicate title tag on FAQ page | "FAQ \| Fibreglass Pool Check \| Fibreglass Pool Check" |

### 🟠 High Priority — Trust & Conversion
| # | Issue | Impact |
|---|---|---|
| 8 | No customer testimonials or reviews | Primary conversion barrier |
| 9 | No professional photo of Brady | Reduces trust in personal service |
| 10 | No satisfaction guarantee stated anywhere | Removes purchase hesitation |
| 11 | No urgency copy for under-contract buyers | Missing highest-intent segment |
| 12 | Zero images on entire site | Feels sparse, no emotional pull |
| 13 | H2s are brand narrative, not keyword-optimised | SEO weakness |
| 14 | H1 doesn't contain primary keyword | SEO weakness |

### 🟡 Medium Priority — Content & SEO Growth
| # | Issue | Impact |
|---|---|---|
| 15 | No blog / educational content | Invisible to early-stage buyers |
| 16 | No state-specific landing pages | Missing geo-targeted search traffic |
| 17 | Product pages lead with features not benefits | Lower conversion on product pages |
| 18 | About page undersells Brady | Missed trust opportunity |
| 19 | No ABN visible on site | Australian trust signal missing |
| 20 | No Google Business Profile | No review platform, no map presence |
| 21 | No Facebook Pixel / retargeting | No remarketing capability |
| 22 | Voice inconsistency — "we" vs "I" across pages | Minor brand trust issue |

---

## 6. MASTER ACTION PLAN — STEP BY STEP

Work through these steps in order. Do not skip ahead. Mark each ✅ when confirmed complete.

### PHASE A — Technical Foundation (Do before requesting Google indexing)

- [ ] **A1** — Verify Google Search Console ownership (TXT record already in DNS — just needs verification click)
- [ ] **A2** — Add `robots.txt` to Next.js site
- [ ] **A3** — Add `sitemap.xml` to Next.js site (auto-generated from page list)
- [ ] **A4** — Add canonical tags to every page (via Next.js layout)
- [ ] **A5** — Fix FAQ page duplicate title tag
- [ ] **A6** — Add OG tags and Twitter Cards to all pages (needs pool photo first — see B1)
- [ ] **A7** — Add JSON-LD schema markup:
  - FAQPage schema on `/faq`
  - Service schema on each product page
  - Person schema on `/about`
  - ProfessionalService schema on homepage
- [ ] **A8** — Submit sitemap to Google Search Console and request indexing

### PHASE B — Trust & Conversion Assets (Run alongside Phase A)

- [ ] **B1** — Brady gets professional headshot taken (at or near a pool)
- [ ] **B2** — Photograph pool defects for site imagery (blistering, crazing, delamination + one clean pool)
- [ ] **B3** — Collect 5+ written testimonials from past clients (Claude to write the email template)
- [ ] **B4** — Set up Google Business Profile
- [ ] **B5** — Add headshot to About page and homepage
- [ ] **B6** — Add testimonials to homepage (adjacent to primary CTA)
- [ ] **B7** — Add satisfaction guarantee to homepage and all product pages
- [ ] **B8** — Add urgency copy for under-contract buyers to homepage hero and product pages
- [ ] **B9** — Add pool imagery throughout site
- [ ] **B10** — Add ABN to footer

### PHASE C — SEO Content (Start after Phase A complete)

- [ ] **C1** — Write and publish 5 core blog articles (briefs below)
- [ ] **C2** — Create state-specific landing pages (NSW, VIC, QLD, SA, WA, TAS)
- [ ] **C3** — Optimise H1 and H2s across homepage for keyword targets
- [ ] **C4** — Rewrite product pages: benefits-first, not features-first
- [ ] **C5** — Rewrite About page to lead with Brady's expertise, not disclaimers

### PHASE D — Base44 Removal (Run in parallel, deploy when ready)

- [ ] **D1** — Confirm Supabase account created
- [ ] **D2** — Confirm Brevo account created
- [ ] **D3** — Claude builds Phase 2 Next.js backend (Stripe + Supabase + Brevo)
- [ ] **D4** — Test Phase 2 checkout flows thoroughly in staging
- [ ] **D5** — Deploy Phase 2 and retire Base44

---

## 7. BLOG ARTICLE BRIEFS (Phase C1)

Write in this priority order:

| Priority | Working Title | Target Keyword | Links To |
|---|---|---|---|
| 1 | What to look for when buying a house with a fibreglass pool | buying house fibreglass pool australia | Pool Check Report |
| 2 | Fibreglass pool osmotic blistering: causes, cost, and what to do | fibreglass pool osmotic blistering | Quote Review |
| 3 | How much does fibreglass pool resurfacing cost in Australia? | fibreglass pool resurfacing cost australia | Quote Review |
| 4 | Fibreglass pool inspection vs building inspection: what's the difference? | fibreglass pool inspection vs building inspection | Pool Check Report |
| 5 | Fibreglass pool delamination: what it looks like and how serious it is | fibreglass pool delamination | Pool Check Report |

---

## 8. COPY DECISIONS & BRAND RULES

- **Voice:** First person singular — Brady speaks as "I", not "we". Be consistent everywhere.
- **Tone:** Direct, expert, no jargon, reassuring. Not corporate. Not salesy.
- **Primary emotional trigger:** Fear of financial loss → relief through certainty
- **Price anchor:** Always pair $149 with "$5,000–$30,000+ surprise repair bills"
- **Urgency hook:** "Under contract? Don't wait — reports delivered within 2–3 business days, fast enough to act before your finance clause expires."
- **Guarantee line:** "If our report doesn't give you clear, actionable findings, get in touch and we'll make it right."
- **Differentiator:** Independent — no affiliation with any pool builder, contractor or supplier

---

## 9. SESSION LOG

| Date | What was done | Outcome |
|---|---|---|
| Early 2026 | Full site audit (Base44 React SPA) | Identified Google-invisible SPA as core problem |
| Early 2026 | Rebuilt site in Next.js | 13 pages, server-rendered, SEO-ready |
| Early 2026 | Deployed to Vercel, pointed domain via VentraIP DNS | Site live at fibreglasspoolcheck.com.au |
| March 2026 | Comprehensive CRO/UX/SEO/Marketing audit completed | Audit document produced, 10 priority fixes identified |
| March 2026 | PROJECT_STATUS.md created | Master source of truth established |
| March 2026 | `_project-docs/` folder created in GitHub repo | All project documents stored here, original files kept permanently for reference, GitHub version history used as backup system |
| March 2026 | Step-by-step action plan confirmed | Phases A, B, C, D defined in order. Next step: A1 — verify Google Search Console |

---

## 10. HOW TO USE THIS FILE

**At the start of every Claude session:**
Paste this entire file into the chat and say: "Here is my project status file. Please read it and confirm you understand where we are before we proceed."

**At the end of every Claude session:**
Say: "Please give me an updated PROJECT_STATUS.md reflecting what we did today." Copy the updated file and replace the old one in your GitHub repo.

**In GitHub:**
- File location: `_project-docs/` folder in `fibreglass-pool-check` repo
- Filename: `PROJECT_STATUS.md`
- Commit message each update: `Update project status - [date]`
- **Never delete old versions** — GitHub keeps full version history automatically. You can always click "History" on the file in GitHub to see and restore any previous version.

---

## 11. PROJECT DOCS FOLDER STRUCTURE

All non-code project documents live in `_project-docs/` in the repo root. The underscore keeps it sorted at the top, separate from the Next.js app code. Vercel ignores this folder entirely.

| File | Purpose |
|---|---|
| `PROJECT_STATUS.md` | This file — master source of truth, updated every session |
| `AUDIT_REPORT.md` | Original CRO/UX/SEO/Marketing audit (March 2026) — do not edit |
| *(future)* `COPY_DRAFTS.md` | Copywriting drafts for pages, emails, testimonial requests |
| *(future)* `SCHEMA_MARKUP.md` | All JSON-LD schema blocks ready to paste into code |

### Rules for this folder
- `PROJECT_STATUS.md` is the only file that gets updated regularly
- Original documents (audit, briefs) are never edited — they are the historical record
- Every commit to this folder should have a clear message explaining what changed and why
