-- Migration: Add Multi-Tenancy & Row Level Security (RLS) for Supabase Auth
-- Run this in your Supabase project SQL Editor

-- 1. Truncate previous single-tenant test data (your local browser data will auto-adopt and re-sync upon sign-in)
TRUNCATE TABLE sessions CASCADE;
TRUNCATE TABLE instruments CASCADE;

-- 2. Drop existing single-column primary keys to allow composite primary keys
ALTER TABLE instruments DROP CONSTRAINT IF EXISTS instruments_pkey CASCADE;
ALTER TABLE sessions DROP CONSTRAINT IF EXISTS sessions_pkey CASCADE;

-- 3. Add user_id column with default auth.uid()
ALTER TABLE instruments ADD COLUMN IF NOT EXISTS user_id UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS user_id UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE;

-- 4. Set Composite Primary Keys (user_id, id)
ALTER TABLE instruments ADD PRIMARY KEY (user_id, id);
ALTER TABLE sessions ADD PRIMARY KEY (user_id, id);

-- 5. Create Multi-Tenant Performance Indices
CREATE INDEX IF NOT EXISTS idx_instruments_user_id ON instruments (user_id);
CREATE INDEX IF NOT EXISTS idx_instruments_user_updated ON instruments (user_id, updated_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions (user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user_updated ON sessions (user_id, updated_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user_instrument ON sessions (user_id, instrument_id);

-- 6. Enable Row Level Security (RLS)
ALTER TABLE instruments ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- 7. Clean up previous policies if any
DROP POLICY IF EXISTS "Users can manage own instruments" ON instruments;
DROP POLICY IF EXISTS "Users can manage own sessions" ON sessions;

-- 8. Create RLS Policies scoped strictly to authenticated user
CREATE POLICY "Users can manage own instruments"
  ON instruments
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage own sessions"
  ON sessions
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
