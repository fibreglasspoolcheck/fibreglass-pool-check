# FPC - Security Fixes Spec
**Date:** 20/03/2026
**Scope:** Critical security issues only
**Site:** fibreglasspoolcheck.com.au
**Codebase:** ~/projects/fibreglass-pool-check (Next.js 14.2.5, Vercel, Supabase, Stripe)

---

## 1. Update Next.js to latest 14.2.x patch

**Problem:** Next.js 14.2.5 has 16 known vulnerabilities including critical auth bypass (GHSA-f82v-jwr5-mffw), cache poisoning, SSRF, and multiple DoS vectors.

**File:** package.json line 13

**Fix:** `npm install next@14.2.35` (latest 14.2.x patch). Patch-level update, low risk.

**Impact:** 16 known vulnerabilities patched. No functional changes expected.

---

## 2. Remove DOWNLOAD_TOKEN_SECRET hardcoded fallback

**Problem:** lib/download-token.js line 3 falls back to `'fallback-dev-secret-change-me'` if the env var is missing. Anyone could forge download links to paid PDFs (Buyer Checklist, Red Flags Guide) using this publicly known string.

**File:** lib/download-token.js line 3

**Fix:** Remove the fallback. Throw an error if the secret is missing so it fails loudly instead of silently using a known secret.

**Impact:** If DOWNLOAD_TOKEN_SECRET is not set in Vercel, the app will crash on download token generation instead of silently using a guessable secret. The env var is already set in Vercel (confirmed in todo.md).

---

## 3. Whitelist fieldName in confirm-upload route

**Problem:** app/api/confirm-upload/route.js line 15 accepts `fieldName` from the client request body and uses it as both a `.select()` column and an `.update()` key on lines 36 and 44. An attacker could send `fieldName: "payment_status"` with `paths: ["paid"]` to mark an unpaid order as paid.

**File:** app/api/confirm-upload/route.js lines 36-45

**Fix:** Whitelist allowed field names. Only `photos`, `quote_files`, and `pool_photos` are valid columns.

**Impact:** Prevents column injection. Only legitimate photo/file columns can be updated.

---

## 4. Verify RLS policies on order tables

**Problem:** All three order forms (PoolCheckReport, QuoteReview, BuyerChecklist) POST directly to Supabase from the browser using the anon key. Without RLS INSERT policies, anyone can insert arbitrary rows.

**Tables:** report_orders, checklist_orders, quote_review_orders

**Fix:** Check if RLS is enabled with appropriate INSERT policies. If not, either add them or move order creation to server-side API routes.

**Impact:** Prevents junk order injection. This may be BLOCKED if we can't verify RLS from the CLI (need Supabase dashboard or MCP).

---

## Deployment

All fixes deploy together. No database migrations needed. No new env vars needed (DOWNLOAD_TOKEN_SECRET already set).

## Testing

- Build: `npm run build` passes
- Download tokens: verify Red Flags Guide download still works (need live test or check env var is set)
- Confirm upload: verify file upload still works on order forms
- RLS: verify orders can still be created from the browser
