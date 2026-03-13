-- =============================================
-- Fibreglass Pool Check — Supabase Database Setup
-- Run this ONCE in: Supabase Dashboard → SQL Editor → New Query → Paste → Run
-- =============================================

-- 1. TABLES
-- ---------

CREATE TABLE IF NOT EXISTS report_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  pool_address TEXT,
  audience_type TEXT,
  pool_age TEXT,
  pool_brand TEXT,
  issue_summary TEXT,
  notes TEXT,
  price INTEGER DEFAULT 14900,
  payment_status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  ack_status TEXT DEFAULT 'pending',
  ack_sent_at TIMESTAMPTZ,
  photos TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quote_review_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  pool_address TEXT,
  num_quotes INTEGER DEFAULT 1,
  main_concern TEXT,
  notes TEXT,
  price INTEGER DEFAULT 7900,
  payment_status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  ack_status TEXT DEFAULT 'pending',
  ack_sent_at TIMESTAMPTZ,
  quote_files TEXT[] DEFAULT '{}',
  pool_photos TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS checklist_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  price INTEGER DEFAULT 2900,
  payment_status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  delivery_status TEXT DEFAULT 'pending',
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS red_flags_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  guide_status TEXT DEFAULT 'pending',
  guide_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ROW LEVEL SECURITY
-- ---------------------

ALTER TABLE report_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_review_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE checklist_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE red_flags_leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon (website visitors creating orders)
CREATE POLICY "Allow anon insert" ON report_orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON quote_review_orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON checklist_orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON red_flags_leads FOR INSERT TO anon WITH CHECK (true);

-- Allow service_role full access (API routes use service key)
CREATE POLICY "Allow service full access" ON report_orders FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow service full access" ON quote_review_orders FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow service full access" ON checklist_orders FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Allow service full access" ON red_flags_leads FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Allow anon to read their own order by ID (for payment verification polling)
CREATE POLICY "Allow anon read by id" ON report_orders FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read by id" ON quote_review_orders FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read by id" ON checklist_orders FOR SELECT TO anon USING (true);

-- 3. STORAGE BUCKET
-- -----------------

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'order-files',
  'order-files',
  false,
  5242880,  -- 5MB per file
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
) ON CONFLICT (id) DO NOTHING;

-- Allow anon uploads to order-files bucket
CREATE POLICY "Allow anon upload" ON storage.objects FOR INSERT TO anon WITH CHECK (bucket_id = 'order-files');

-- Allow service_role to read all files
CREATE POLICY "Allow service read" ON storage.objects FOR SELECT TO service_role USING (bucket_id = 'order-files');

-- 4. UPDATED_AT TRIGGER
-- ---------------------

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at BEFORE UPDATE ON report_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at BEFORE UPDATE ON quote_review_orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Done! All tables, policies, storage bucket and triggers are set up.
