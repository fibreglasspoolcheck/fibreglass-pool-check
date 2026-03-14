# PROJECT_STATUS.md
## fibreglasspoolcheck.com.au — Master Source of Truth
**Last updated:** March 14, 2026 (Session 3)
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
| Orders / database | Supabase | Free tier, tables for all 3 products + red_flags_leads |
| Payments processor | Stripe | Direct integration via Next.js API routes |
| File storage | Supabase Storage | Direct browser-to-storage uploads via signed URLs |
| Email (transactional) | Brevo | Domain authenticated, DKIM/DMARC/SPF verified |
| Email (marketing/nurture) | Brevo | Automation created in Brevo (ID #1), trigger configured for "Red Flags Guide" list (#3). Email templates need content. Brevo MCP server configured for future sessions. |
| Analytics | Google Analytics (GA4) | Present in site source |
| Google Ads tag | AW-18010642704 | In root layout on every page, conversion events on all checkout success pages + Red Flags Guide download |
| Google site verification TXT | `google-site-verification=3EoSEdhGbyLvFmuHxDAbm6rJqulpv9yPy47ttGoy550` | Already in VentraIP DNS |
| Google site verification TXT 2 | `google-site-verification=N2Fg0uvjfbvYDF3VMyudrZGozeOk2HGwrv-B0W_i_S4` | Already in VentraIP DNS |

### Phase 2 Stack — BUILT AND LIVE
| Component | Service | Status |
|---|---|---|
| Database | Supabase (free tier) | ✅ Live — tables for all products |
| File storage | Supabase Storage | ✅ Live — direct signed-URL uploads |
| Transactional email | Brevo (free tier) | ✅ Live — domain authenticated |
| Email nurture | Brevo Automations | ✅ Automation #1 created, trigger set to "Red Flags Guide" list #3. API code connects guide downloads to list. Email template content pending. |
| Payments | Stripe direct (Next.js API routes) | ✅ Live |

---

## 3. DECISIONS ALREADY MADE

- ✅ **Platform:** Next.js on Vercel — decided and built. Do not suggest WordPress or other platforms.
- ✅ **Phase 1 first:** Marketing site goes live before Phase 2 (cutting Base44).
- ✅ **Keep Base44 running** until Phase 2 is fully built and tested.
- ✅ **Phase 2 backend:** Supabase + Brevo + Stripe direct. Decided.
- ✅ **Google indexing submitted** — audit fixes implemented and pages submitted via GSC (March 14, 2026).
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
- CNAME: `brevo1._domainkey` → `b1.fibreglasspoolcheck-com-au.dkim.brevo.com` ✅
- CNAME: `brevo2._domainkey` → `b2.fibreglasspoolcheck-com-au.dkim.brevo.com` ✅
- TXT: `_dmarc` → `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com` ✅
- TXT: Brevo code `brevo-code:967603705bb8823ad51729018d7381e8` ✅
- Sendgrid CNAMEs for Resend (Base44 email): still present — remove when ready
- Base44 ALIAS and CNAME records: **deleted** ✅

---

## 5. CURRENT OUTSTANDING ISSUES (Audit Findings)

These are confirmed problems that need fixing, in priority order:

### 🔴 Critical — Fix Immediately
| # | Issue | Impact | Status |
|---|---|---|---|
| 1 | Google Search Console not yet verified/submitted | Cannot measure SEO performance | ✅ Verified, pages submitted for indexing |
| 2 | No robots.txt — returns 404 | Google has no crawl guidance | ✅ Fixed |
| 3 | No sitemap.xml — returns 404 | Pages may not be discovered | ✅ Fixed |
| 4 | No canonical tags on any page | Duplicate content risk | ✅ Fixed |
| 5 | No schema markup anywhere | Missing rich results, lower CTR | ✅ Added Organization, LocalBusiness, BreadcrumbList schemas |
| 6 | No OG / Twitter Card meta tags | Social shares look broken | ✅ Fixed |
| 7 | Duplicate title tag on FAQ page | "FAQ \| Fibreglass Pool Check \| Fibreglass Pool Check" | ✅ Fixed |

### 🟠 High Priority — Trust & Conversion
| # | Issue | Impact | Status |
|---|---|---|---|
| 8 | No customer testimonials or reviews | Primary conversion barrier | Still open |
| 9 | No professional photo of Brady | Reduces trust in personal service | ✅ Photo added and compressed (14MB → 295KB) |
| 10 | No satisfaction guarantee stated anywhere | Removes purchase hesitation | ✅ Already present on homepage and all product pages |
| 11 | No urgency copy for under-contract buyers | Missing highest-intent segment | ✅ Added urgency banners to all product pages (homepage already had one) |
| 12 | Zero images on entire site | Feels sparse, no emotional pull | ✅ Before/after case study images added and compressed |
| 13 | H2s are brand narrative, not keyword-optimised | SEO weakness | ✅ Rewritten with target keywords |
| 14 | H1 doesn't contain primary keyword | SEO weakness | ✅ Updated to "Fibreglass pool inspection reports" |

### 🟡 Medium Priority — Content & SEO Growth
| # | Issue | Impact | Status |
|---|---|---|---|
| 15 | No blog / educational content | Invisible to early-stage buyers | ✅ Blog launched with 2 articles, sitemap updated, nav link added |
| 16 | No state-specific landing pages | Missing geo-targeted search traffic | Still open |
| 17 | Product pages lead with features not benefits | Lower conversion on product pages | ✅ Rewrote hero copy on all 3 product pages to lead with benefits |
| 18 | About page undersells Brady | Missed trust opportunity | ✅ Rewritten to lead with hands-on expertise, stronger bio copy |
| 19 | No ABN visible on site | Australian trust signal missing | ✅ Added to Organization schema |
| 20 | No Google Business Profile | No review platform, no map presence | Still open |
| 21 | No Facebook Pixel / retargeting | No remarketing capability | Still open |
| 22 | Voice inconsistency — "we" vs "I" across pages | Minor brand trust issue | ✅ Fixed — About page "we" → "I" throughout |

### 🔵 New Issues Found (March 2026 Audit)
| # | Issue | Impact | Status |
|---|---|---|---|
| 23 | No Google Ads conversion events | Can't measure ROAS, flying blind on ad spend | ✅ Added to all 3 checkout success pages + Red Flags Guide download |
| 24 | No email nurture sequence after Red Flags Guide download | Leads captured but never followed up | ✅ Partial — Copy written (6 emails), Brevo list #3 created, API code adds contacts to list on guide download, automation #1 created with trigger. Email template content still needs populating. |
| 25 | Quote Review upload failing with 413 error on large files | Customers can't complete orders with multiple/large photos | ✅ Fixed — direct-to-Supabase uploads via signed URLs |
| 26 | Desktop nav missing Quote Review and Buyer Checklist links | Products only visible in mobile hamburger menu | ✅ Fixed — added to desktop nav |
| 27 | Red Flags Guide page claims "10 warning signs" but only shows 7 | Trust/credibility issue | ✅ Fixed — added 3 more items |
| 28 | Brady photo 14MB uncompressed causing 38s LCP on mobile | Terrible mobile performance, high bounce rate | ✅ Compressed to 295KB, converted to Next.js Image component |
| 29 | No cross-links between service pages | Poor internal linking, weak SEO | ✅ Added cross-links between product pages |
| 30 | Brevo domain not authenticated (DKIM failing) | Emails may land in spam | ✅ DNS records correct, domain now authenticated |
| 31 | Brevo nurture email templates need content | Automation workflow has placeholder template, 5 emails need HTML content from EMAIL_NURTURE_SEQUENCE.md | Open — use Brevo MCP in next session |
| 32 | Google Ads conversion labels are placeholders | Labels like `AW-18010642704/buyer_checklist` need replacing with real labels from Google Ads console | Open — Brady needs to create conversion actions in Google Ads |
| 33 | BREVO_API_KEY in .env.production may need updating | New API key generated for MCP (`oddwuOmd1PTA065a` suffix). Check if Vercel env var needs updating. | Needs verification |
| 34 | Brevo MCP server not yet connected | Config file created but Claude Desktop needs restart with config applied | Pending Brady action |

---

## 6. MASTER ACTION PLAN — STEP BY STEP

Work through these steps in order. Do not skip ahead. Mark each ✅ when confirmed complete.

### PHASE A — Technical Foundation ✅ COMPLETE

- [x] **A1** — Verify Google Search Console ownership ✅
- [x] **A2** — Add `robots.txt` to Next.js site ✅
- [x] **A3** — Add `sitemap.xml` to Next.js site ✅
- [x] **A4** — Add canonical tags to every page ✅
- [x] **A5** — Fix FAQ page duplicate title tag ✅
- [x] **A6** — Add OG tags and Twitter Cards to all pages ✅
- [x] **A7** — Add JSON-LD schema markup (Organization, LocalBusiness, BreadcrumbList) ✅
- [x] **A8** — Submit sitemap to Google Search Console and request indexing ✅

### PHASE B — Trust & Conversion Assets (Run alongside Phase A)

- [x] **B1** — Brady photo added to About page and homepage ✅ (compressed from 14MB to 295KB)
- [x] **B2** — Pool before/after case study images added ✅ (Hooper, Fowler, Walsh)
- [ ] **B3** — Collect 5+ written testimonials from past clients
- [ ] **B4** — Set up Google Business Profile
- [x] **B5** — Add headshot to About page and homepage ✅
- [ ] **B6** — Add testimonials to homepage (adjacent to primary CTA)
- [x] **B7** — Satisfaction guarantee already present on homepage + all product pages ✅
- [x] **B8** — Urgency banners added to all product pages ✅ (homepage already had one)
- [x] **B9** — Add pool imagery throughout site ✅
- [x] **B10** — Add ABN to Organization schema ✅

### PHASE C — SEO Content (Start after Phase A complete)

- [x] **C1** — Blog launched with 2 articles ✅ (buying house with pool, osmotic blistering). 3 more briefs pending.
- [ ] **C2** — Create state-specific landing pages (NSW, VIC, QLD, SA, WA, TAS)
- [x] **C3** — Optimised H1 and H2s across homepage + product pages for keyword targets ✅
- [x] **C4** — Rewrote product page heroes: benefits-first, keyword-rich ✅
- [x] **C5** — Rewrote About page: leads with expertise, stronger bio, "we" → "I" voice fix ✅

### PHASE D — Base44 Removal ✅ COMPLETE

- [x] **D1** — Supabase account created and configured ✅
- [x] **D2** — Brevo account created, domain authenticated ✅
- [x] **D3** — Phase 2 backend built (Stripe + Supabase + Brevo + direct uploads) ✅
- [x] **D4** — Checkout flows tested — Quote Review 413 error fixed with signed upload URLs ✅
- [ ] **D5** — Retire Base44 subdomain and remove old DNS records (when ready)

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
| March 2026 | Step-by-step action plan confirmed | Phases A, B, C, D defined in order |
| March 14, 2026 | Quote Review 413 upload error fixed | Implemented direct-to-Supabase signed URL uploads, bypassing Vercel 4.5MB limit |
| March 14, 2026 | Full site audit fixes implemented | Image compression (14MB→295KB Brady photo), Next.js Image components, desktop nav fix, schema markup (Organization, LocalBusiness, BreadcrumbList), cross-links between product pages, Red Flags Guide "10 items" fix |
| March 14, 2026 | Phase A (Technical Foundation) completed | robots.txt, sitemap.xml, canonical tags, OG tags, schema markup, GSC verification, pages submitted for indexing |
| March 14, 2026 | Brevo domain authentication completed | DKIM, DMARC, SPF, Brevo code all verified in VentraIP DNS |
| March 14, 2026 | Google Ads conversion tracking added | Events on all 3 checkout success pages (with value/currency/transaction_id) + Red Flags Guide lead event |
| March 14, 2026 | Email nurture sequence written | 6-email sequence for Red Flags Guide leads → paid product conversion. Copy in `_project-docs/EMAIL_NURTURE_SEQUENCE.md`. Needs manual setup in Brevo Automations UI |
| March 14, 2026 | PROJECT_STATUS.md updated | Reflects all work done, Phase A complete, Phase D mostly complete |
| March 14, 2026 (S2) | Brevo nurture automation infrastructure built | Created "Red Flags Guide" list (#3) in Brevo. Added `addContactToBrevoList()` to `lib/brevo.js`. Updated `/api/red-flags-guide/route.js` to add contacts to Brevo list on guide download. Created automation #1 in Brevo with "contact added to list" trigger. |
| March 14, 2026 (S2) | Brevo MCP server configured | Generated MCP API key in Brevo, created `claude_desktop_config.json` for Claude Desktop MCP integration. Will allow direct Brevo management in future sessions. |
| March 14, 2026 (S2) | Deleted old `/api/upload/route.js` | Had `export const config` (Pages Router pattern) breaking Next.js 14 build. Pool Check Report migrated to signed URL uploads. |
| March 14, 2026 (S2) | Blog launched | 2 articles live: "Buying a house with a fibreglass pool" and "Fibreglass pool osmotic blistering". Blog index page, nav link, sitemap entries added. |
| March 14, 2026 (S2) | All product page heroes rewritten | Benefits-first copy, urgency banners, keyword-optimised H1/H2s on all 3 product pages + homepage |
| March 14, 2026 (S2) | About page rewritten | Leads with expertise, "we" → "I" voice fix throughout |
| March 14, 2026 (S3) | PROJECT_STATUS.md updated with available connectors | Added Section 11 documenting all connected tools (GitHub, Google Drive, Gmail, Google Calendar, Notion, Stripe, Supabase, Vercel, Wix, Claude in Chrome, Brevo MCP pending) |

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

## 11. AVAILABLE CONNECTORS & TOOLS

These connectors are configured in Claude Desktop / Cowork and available for use in sessions:

| Connector | Status | Notes |
|---|---|---|
| GitHub | Connected | Repo access for `fibreglass-pool-check` |
| Google Drive | Connected | File access |
| Gmail | Connected | Email read/draft/search |
| Google Calendar | Connected | Event management |
| Notion | Connected | Page/database management |
| Stripe | Connected | Payment data, customers, subscriptions |
| Supabase | Connected | Database queries, migrations, edge functions |
| Vercel | Connected | Deployments, logs, project management. Team: `team_CRXCCm5mIgwhtD7mp2EdV86C`, Project: `fibreglass-pool-check` |
| Wix | Connected | Site management (not currently used) |
| Claude in Chrome | Connected | Browser automation for tasks requiring web UI interaction |
| Brevo MCP | Pending | Config file created (`claude_desktop_config.json`). Brady needs to paste config into Claude Desktop Developer settings and restart. |

---

## 12. PROJECT DOCS FOLDER STRUCTURE

All non-code project documents live in `_project-docs/` in the repo root. The underscore keeps it sorted at the top, separate from the Next.js app code. Vercel ignores this folder entirely.

| File | Purpose |
|---|---|
| `PROJECT_STATUS.md` | This file — master source of truth, updated every session |
| `AUDIT_REPORT.md` | Original CRO/UX/SEO/Marketing audit (March 2026) — do not edit |
| `EMAIL_NURTURE_SEQUENCE.md` | 6-email nurture sequence copy for Red Flags Guide leads — ready to copy into Brevo Automations |
| *(future)* `COPY_DRAFTS.md` | Copywriting drafts for pages, emails, testimonial requests |

### Rules for this folder
- `PROJECT_STATUS.md` is the only file that gets updated regularly
- Original documents (audit, briefs) are never edited — they are the historical record
- Every commit to this folder should have a clear message explaining what changed and why
