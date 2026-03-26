# Fibreglass Pool Check

Educational site about fibreglass pool inspections. SEO-focused content.

## Stack
- Next.js 14, TypeScript, Tailwind CSS
- Supabase (database)
- Stripe (payments, webhook integration)
- Vercel deployment
- URL: fibreglasspoolcheck.com.au

## Gotchas
- NEVER put redirects in next.config.js. They cause infinite 308 loops (case-insensitive matching). All redirects go in middleware.js.
- www must 301 redirect to non-www (fixed 23 Mar 2026).
- Supabase project (abqlapacywxfwgirxrtz) is under org `brefibreglass`, NOT accessible via Claude MCP.
- GA4: G-GGKLMQL660.

## Email
- Account: fibreglasspoolcheck@gmail.com
