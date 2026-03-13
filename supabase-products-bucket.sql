-- Create a private storage bucket for digital products (PDFs)
-- Run this in Supabase SQL Editor

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'products',
  'products',
  false,
  10485760,  -- 10MB per file
  ARRAY['application/pdf']
) ON CONFLICT (id) DO NOTHING;

-- Only service_role can read/write (no public access)
CREATE POLICY "Service role full access to products" ON storage.objects
  FOR ALL TO service_role USING (bucket_id = 'products') WITH CHECK (bucket_id = 'products');
