# FPC Security Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix 4 critical security issues found in FPC code review.

**Architecture:** All fixes are small, independent changes to existing files. No new features, no schema changes.

**Tech Stack:** Next.js 14, JavaScript, Supabase, Stripe, Vercel

**Spec:** `docs/superpowers/specs/2026-03-20-fpc-security-fixes-design.md`

---

### Task 1: Update Next.js to 14.2.35

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Update Next.js**

Run: `cd ~/projects/fibreglass-pool-check && npm install next@14.2.35`

- [ ] **Step 2: Verify build**

Run: `cd ~/projects/fibreglass-pool-check && npx next build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Verify no vulnerabilities remain**

Run: `cd ~/projects/fibreglass-pool-check && npm audit 2>&1 | tail -10`

- [ ] **Step 4: Commit**

```bash
cd ~/projects/fibreglass-pool-check
git add package.json package-lock.json
git commit -m "$(cat <<'EOF'
security: update Next.js 14.2.5 to 14.2.35

Patches 16 known vulnerabilities including critical auth bypass,
cache poisoning, SSRF, and multiple DoS vectors.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Remove DOWNLOAD_TOKEN_SECRET fallback

**Files:**
- Modify: `lib/download-token.js`

- [ ] **Step 1: Fix the secret handling**

Replace line 3 of `lib/download-token.js`:

```javascript
// OLD:
const SECRET = process.env.DOWNLOAD_TOKEN_SECRET || 'fallback-dev-secret-change-me'

// NEW:
const SECRET = process.env.DOWNLOAD_TOKEN_SECRET
if (!SECRET) throw new Error('DOWNLOAD_TOKEN_SECRET environment variable is required')
```

- [ ] **Step 2: Verify build**

Run: `cd ~/projects/fibreglass-pool-check && npx next build 2>&1 | tail -20`
Expected: Build succeeds (download-token.js is only imported at runtime, not during build)

- [ ] **Step 3: Commit**

```bash
cd ~/projects/fibreglass-pool-check
git add lib/download-token.js
git commit -m "$(cat <<'EOF'
security: remove hardcoded DOWNLOAD_TOKEN_SECRET fallback

Throws at runtime if env var is missing instead of silently using
a publicly known secret. Prevents forging download links to paid PDFs.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Whitelist fieldName in confirm-upload route

**Files:**
- Modify: `app/api/confirm-upload/route.js`

- [ ] **Step 1: Add whitelist**

In `app/api/confirm-upload/route.js`, after line 15 (`const { orderId, productType, fieldName, paths } = await request.json()`), add:

```javascript
// Whitelist allowed field names to prevent column injection
const ALLOWED_FIELDS = ['photos', 'quote_files', 'pool_photos']
const safeFieldName = ALLOWED_FIELDS.includes(fieldName) ? fieldName : 'photos'
```

Then replace all occurrences of `fieldName` on lines 36, 40, and 44 with `safeFieldName`:

Line 36: `.select(safeFieldName)`
Line 40: `const existingPaths = order?.[safeFieldName] || []`
Line 44: `.update({ [safeFieldName]: allPaths })`

Remove the `|| 'photos'` fallbacks since `safeFieldName` already defaults to 'photos'.

- [ ] **Step 2: Verify build**

Run: `cd ~/projects/fibreglass-pool-check && npx next build 2>&1 | tail -20`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
cd ~/projects/fibreglass-pool-check
git add app/api/confirm-upload/route.js
git commit -m "$(cat <<'EOF'
security: whitelist fieldName in confirm-upload route

Prevents column injection attack where an attacker could set
payment_status or other columns via the fieldName parameter.
Only photos, quote_files, and pool_photos are allowed.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Verify RLS policies on order tables

**Files:**
- No code changes (verification only, may need code changes if RLS is missing)

- [ ] **Step 1: Check RLS status via Supabase MCP**

Use: `mcp__claude_ai_Supabase__execute_sql` with project ID `rmbjqgkvtflzrqzxmnjm`

```sql
SELECT tablename, rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
AND tablename IN ('report_orders', 'checklist_orders', 'quote_review_orders');
```

- [ ] **Step 2: Check existing policies**

```sql
SELECT tablename, policyname, cmd, qual
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('report_orders', 'checklist_orders', 'quote_review_orders');
```

- [ ] **Step 3: If RLS is disabled or no INSERT policies exist**

BLOCKED - flag for Brady. Options:
a) Add RLS INSERT policies (need to define what's allowed)
b) Move order creation to server-side API routes (bigger change, more secure)

Brady decides which approach.

- [ ] **Step 4: If RLS is enabled with appropriate policies**

Mark as verified, no code changes needed. Commit a note in the spec.

---

### Task 5: Final verification

- [ ] **Step 1: Full build check**

Run: `cd ~/projects/fibreglass-pool-check && npx next build 2>&1 | tail -30`
Expected: Build succeeds

- [ ] **Step 2: Check git log**

Run: `cd ~/projects/fibreglass-pool-check && git log --oneline -5`
Expected: 3-4 security fix commits

- [ ] **Step 3: Update task queue**

Update `~/task-queue.md` marking FPC security tasks 6-9 as done or blocked.

**Note:** Do NOT push to remote or deploy. Brady will review and approve.
