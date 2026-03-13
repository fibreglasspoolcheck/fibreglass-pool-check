# fibreglasspoolcheck.com.au — Phase 1 Deployment Guide

## What this is
A Next.js marketing site that makes all your pages fully Google-indexable.
"Order Now" buttons link to your existing Base44 app — nothing in your current
order/payment flow changes.

---

## Before you start — what you need
- [ ] GitHub account (github.com)
- [ ] Vercel account (vercel.com — sign up with GitHub)
- [ ] Brevo account (brevo.com) with your API key
- [ ] Access to your domain DNS (wherever fibreglasspoolcheck.com.au is registered)

---

## Step 1 — Upload the code to GitHub

1. Go to **github.com** and click **New** (green button, top left)
2. Name the repository: `fpc-website`
3. Set it to **Private**
4. Click **Create repository**
5. On your computer, open the folder you downloaded from Claude
6. Open **Terminal** (Mac) or **Command Prompt** (Windows) in that folder
7. Run these commands one at a time:

```bash
git init
git add .
git commit -m "Initial Next.js site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/fpc-website.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

---

## Step 2 — Deploy to Vercel

1. Go to **vercel.com** and sign in with GitHub
2. Click **Add New → Project**
3. Find `fpc-website` in the list and click **Import**
4. Leave all settings as default — Vercel will auto-detect Next.js
5. Click **Deploy**

Wait about 2 minutes. Vercel will give you a URL like:
`fpc-website-xxx.vercel.app`

You can test your site there before pointing your real domain to it.

---

## Step 3 — Add your Brevo API key to Vercel

The contact form sends emails via Brevo. You need to add your API key:

1. In Vercel, go to your project → **Settings → Environment Variables**
2. Click **Add New**
3. Name: `BREVO_API_KEY`
4. Value: your Brevo API key (from app.brevo.com → Account → SMTP & API → API Keys)
5. Click **Save**
6. Go to **Deployments** and click **Redeploy** on the latest deployment

---

## Step 4 — Set up your sending domain in Brevo

The contact form sends from `deliver@send.fibreglasspoolcheck.com.au`.
You need to verify this domain in Brevo:

1. In Brevo: **Senders & IP → Domains → Add a Domain**
2. Enter: `send.fibreglasspoolcheck.com.au`
3. Brevo will give you DNS records to add
4. Add those records to your domain registrar (where you bought fibreglasspoolcheck.com.au)
5. Click Verify in Brevo (can take up to 24 hours to propagate)

---

## Step 5 — Set up the app subdomain in Base44

Before pointing your main domain to Vercel, you need Base44 running on a subdomain:

1. In your domain registrar, add a new **CNAME record**:
   - Name: `app`
   - Value: your current Base44 app URL (e.g. `fibreglasspoolcheck.base44.app`)
2. In Base44, add `app.fibreglasspoolcheck.com.au` as a custom domain

Test that `https://app.fibreglasspoolcheck.com.au` loads your Base44 app correctly.

---

## Step 6 — Point your main domain to Vercel

Once Base44 is working on the subdomain:

1. In Vercel: **Settings → Domains → Add Domain**
2. Enter: `fibreglasspoolcheck.com.au`
3. Vercel will give you DNS records
4. Update your domain registrar's DNS:
   - If they support ANAME/ALIAS: point `@` to `cname.vercel-dns.com`
   - Otherwise: add an A record pointing to `76.76.21.21`
5. Also add a CNAME for `www` → `cname.vercel-dns.com`

DNS can take up to 24 hours to propagate, but usually takes 15–30 minutes.

---

## Step 7 — Verify everything works

Check each of these:
- [ ] `https://fibreglasspoolcheck.com.au` loads the home page
- [ ] `https://fibreglasspoolcheck.com.au/About` loads correctly
- [ ] `https://fibreglasspoolcheck.com.au/PoolCheckReport` loads correctly
- [ ] "Get a Pool Check Report" button goes to `app.fibreglasspoolcheck.com.au/PoolCheckReport`
- [ ] Contact form submits and you receive the email at help@fibreglasspoolcheck.com.au
- [ ] `https://fibreglasspoolcheck.com.au/RedFlagsGuide` has the email capture form working
- [ ] Google Search Console → add property → verify via DNS → submit sitemap

---

## Step 8 — Submit to Google

1. Go to **search.google.com/search-console**
2. Add property: `fibreglasspoolcheck.com.au`
3. Verify via DNS TXT record (add it in your registrar)
4. Once verified, go to **Sitemaps** and submit: `https://fibreglasspoolcheck.com.au/sitemap.xml`

Next.js automatically generates a sitemap — just submit that URL.

---

## Troubleshooting

**Contact form not sending?**
→ Check Vercel Environment Variables has `BREVO_API_KEY` set
→ Check Brevo domain verification is complete
→ Check Vercel function logs: Vercel → Deployments → Functions

**"Order Now" links going to wrong place?**
→ Check `app.fibreglasspoolcheck.com.au` is set up (Step 5)
→ All order links in the code go to `https://app.fibreglasspoolcheck.com.au/...`

**Images not loading?**
→ The images are still hosted on Base44/Supabase CDN URLs — they'll work as
   long as your Base44 account is active. In Phase 2 we'll move them.

---

## What's NOT changing (Phase 1)

- Base44 app: still handles orders, payments, file uploads
- Stripe: still processes payments exactly as before
- Emails to customers: still sent by Base44/Resend
- Admin dashboard: still in Base44

The Next.js site is purely the marketing layer. Everything that takes money
still runs through Base44 until Phase 2.

---

## Need help?

Come back to Claude and say "Phase 1 deployment issue" with what's happening.
