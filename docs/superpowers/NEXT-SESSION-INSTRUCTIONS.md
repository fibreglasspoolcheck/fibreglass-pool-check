# Site-Wide Redesign - Implementation Instructions

## What to say to Claude

Open a terminal in the project directory and run:

```
cd ~/projects/fibreglass-pool-check
claude
```

Then paste this:

```
Read the design spec at docs/superpowers/specs/2026-03-27-site-wide-redesign-design.md and the visual mockup at .superpowers/brainstorm/73517-1774579385/content/editorial-direction.html. This is an approved design for a full site-wide redesign of fibreglasspoolcheck.com.au.

Use the frontend-design skill for implementation. Use the writing-plans skill to create a detailed implementation plan first, then execute it using subagent-driven-development.

The design direction is editorial/magazine: DM Serif Display headings, DM Sans body, warm colour palette (cream/warm-white/deep charcoal), restrained orange accent on CTAs only. Every page needs a dark hero, alternating section backgrounds, and a dark final CTA block.

There are 16 implementation steps in the spec's "Implementation Order" section. Start with step 1 (global foundations: layout.jsx fonts, tailwind.config.js colours) and work through them in order.

Key rules:
- Use the frontend-design skill for all page implementations
- Run Playwright verification after each batch of pages (the audit script pattern from the previous session)
- Take screenshots and visually inspect every page after changes
- Push to main after each verified batch (Vercel auto-deploys)
- The editorial-direction.html mockup is the visual reference for tone, typography, colours, and component styling

Do NOT change any API routes, lib files, middleware, or payment flows. This is a visual-only redesign.
```

## Context for Claude

The previous session:
1. Redesigned the BuyerChecklist page (deployed, but has an SVG mockup issue that gets fixed in this redesign)
2. Did a full Playwright audit of every page on the site
3. Visually inspected every page and identified three "eras" of inconsistent design
4. Defined an editorial design system (typography, colours, structure rules)
5. Created an HTML mockup showing the target visual direction
6. Wrote a comprehensive spec covering every page and every change needed

The spec is at: `docs/superpowers/specs/2026-03-27-site-wide-redesign-design.md`
The visual mockup is at: `.superpowers/brainstorm/73517-1774579385/content/editorial-direction.html`

## What to watch for

- The implementation should use DM Serif Display for ALL headings (H1, H2, product card titles). If you see Inter/system fonts on any heading, it's wrong.
- Backgrounds should be warm (cream #faf8f5, warm-white #f5f2ee) not cold (pure white, slate-50). If it looks clinical/cold, the colours are wrong.
- Orange should ONLY appear on CTA buttons and labels/badges. If you see orange checkmark circles, orange urgency banners, or orange background sections, it's not following the spec.
- Every page must end with a dark CTA block before the footer. If a page just ends and hits the footer directly, it's missing.
- Content/resource pages (BuyingAHouse, PoolOwner, RedFlagsGuide, OnSiteAssessment, blog posts) must have the sticky sidebar. Sales pages (PoolCheckReport, BuyerChecklist) and utility pages (FAQ, Contact, ServiceBoundaries) must NOT have it.

## Rollback

If anything goes wrong, the last known good commit before this redesign starts is:

```
a94c2ed docs: add site-wide redesign spec
```

To rollback everything after that:
```
git log --oneline  # find the bad commits
git revert --no-commit <first-bad>..<last-bad> && git commit -m "revert: roll back site redesign" && git push
```
