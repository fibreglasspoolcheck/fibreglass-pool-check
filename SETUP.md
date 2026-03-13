# SETUP GUIDE — Base44 Replacement

Follow these steps in order. Each step must be completed before the next.

---

## Step 1: Run Supabase SQL Setup

1. Go to https://supabase.com/dashboard → your project
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open the file `supabase-setup.sql` from this repo
5. Copy the entire contents and paste into the SQL Editor
6. Click **Run** (or Ctrl+Enter)
7. You should see "Success" — 4 tables created, RLS policies set, storage bucket created

---

## Step 2: Set Vercel Environment Variables

Go to https://vercel.com → your project → **Settings** → **Environment Variables**

Add ALL of these (Production + Preview + Development):

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | *(from Supabase dashboard → Settings → API)* |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | *(from Supabase dashboard → Settings → API)* |
| `SUPABASE_SERVICE_ROLE_KEY` | *(from Supabase dashboard → Settings → API)* |
| `STRIPE_SECRET_KEY` | *(from Stripe dashboard → Developers → API keys)* |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | *(from Stripe dashboard → Developers → API keys)* |
| `STRIPE_WEBHOOK_SECRET` | *(from Step 3 below)* |
| `BREVO_API_KEY` | *(from Brevo dashboard → SMTP & API → API Keys)* |

After adding all variables, click **Redeploy** on the Deployments tab to apply them.

---

## Step 3: Create Stripe Webhook

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Endpoint URL: `https://fibreglasspoolcheck.com.au/api/webhook`
4. Events to listen for: `checkout.session.completed`
5. Click **Add endpoint**
6. On the webhook page, click **Reveal** next to the signing secret
7. Copy the `whsec_...` value
8. Go back to Vercel → Settings → Environment Variables
9. Add: `STRIPE_WEBHOOK_SECRET` = the `whsec_...` value you just copied
10. Redeploy

---

## Step 4: Commit & Push Code

The code changes need to be pushed to GitHub. If using GitHub Desktop:

1. Open GitHub Desktop
2. You should see all the new/changed files
3. Review the changes — they should include:
   - New files: `lib/`, `app/api/`, order pages
   - Updated files: all product pages (Base44 links replaced)
   - Updated `package.json` with new dependencies
4. Commit with message: `Add Stripe/Supabase/Brevo backend — replace Base44`
5. Push to `main`
6. Vercel will auto-deploy

---

## Step 5: Test Everything

After deployment:

1. **Red Flags Guide form** — Go to `/RedFlagsGuide`, enter test name/email, verify email arrives
2. **Pool Check Report order** — Go to `/PoolCheckReport`, click Order, fill form, upload a test photo, complete Stripe payment (use test card if possible), verify:
   - You get a notification email at help@fibreglasspoolcheck.com.au
   - Customer gets confirmation email
   - Order appears in Supabase dashboard → Table Editor → report_orders
   - Photos appear in Supabase → Storage → order-files
3. **Quote Review order** — Same flow as above for `/QuoteReview`
4. **Buyer Checklist** — Go to `/BuyerChecklist`, click Get Checklist, complete payment, verify customer receives checklist link email

---

## What's Changed (Summary)

- **All "Order Now" buttons** now go to `/PoolCheckReport/order`, `/QuoteReview/order`, `/BuyerChecklist/order` instead of Base44
- **Red Flags Guide form** now calls `/api/red-flags-guide` instead of Base44
- **New API routes**: `/api/checkout`, `/api/webhook`, `/api/red-flags-guide`, `/api/upload`
- **New dependencies**: `@supabase/supabase-js`, `stripe`
- **Base44 is no longer used anywhere** — you can shut it down after confirming everything works
