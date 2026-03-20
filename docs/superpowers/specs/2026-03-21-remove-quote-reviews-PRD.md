# PRD: Remove Quote Reviews from FPC

## Date: 2026-03-21

## Problem

Fibreglass Pool Check (FPC) currently sells a Quote Review product ($79) that helps customers evaluate resurfacing/repair quotes from pool contractors. This directly competes with BRE Fibreglass, Brady's pool resurfacing business. FPC should funnel customers toward BRE, not help them compare BRE against competitors.

## Business Context

- **FPC** (Brady's business): Identifies pool problems via photo-based assessments. Digital products, Australia-wide.
- **BRE Fibreglass** (Rachel's trust, Brady is beneficiary): Fixes pool problems. Physical resurfacing/repair work, Gold Coast/Brisbane/SEQ.
- **The funnel:** FPC finds problems -> BRE fixes them. Cross-linked in footers.
- **The conflict:** Quote Reviews help customers evaluate quotes from ANY contractor, including BRE's competitors. This undermines the funnel.

## Decision

Remove Quote Reviews entirely from FPC. No replacement product. The remaining lineup:

| Product | Price | Purpose |
|---------|-------|---------|
| Pool Check Report | $149 | Assess pool condition from photos |
| Buyer Checklist | $29 | DIY checklist before buying a house with a pool |
| Red Flags Guide | Free | Lead magnet, educates, builds trust |
| On-Site Assessment | By request | High-touch, local (Gold Coast area) |

## Success Criteria

1. No visitor to FPC can find, order, or reference Quote Reviews
2. Existing Google-indexed URLs redirect cleanly (no 404s)
3. Build passes, no broken links or references
4. FPC messaging is cleaner and more focused on assessment (not quote evaluation)

## Risks

- **Lost revenue:** Quote Review was $79/order. Mitigated by: no evidence of significant Quote Review sales, and the product was cannibalising BRE leads.
- **SEO impact:** Removing indexed pages could temporarily affect rankings. Mitigated by 308 redirects to homepage.
- **Existing customers:** Anyone who previously purchased a Quote Review still has their deliverable. No action needed.

## Related Documents

- Technical spec: `2026-03-21-remove-quote-reviews-design.md`
