# 0004: Multi-Tenant Supabase Authentication and PostgreSQL Row Level Security

## Context
Practice Tracker previously used a single-user secret gateway model where a shared passcode (`X-PT-Secret`) authenticated requests to a Cloudflare Worker BFF. When deployed on a public URL, anyone with access could view and mutate the shared database. We need individual user accounts so multiple musicians can securely and independently use the public application without data overlap.

## Decision
We decided on a **Multi-Tenant Supabase Authentication model with PostgreSQL Row Level Security (RLS) and Cloudflare Worker JWT Authorization**:

1. **Frontend Authentication (`@supabase/supabase-js`)**: The frontend initializes a Supabase client to manage user authentication (Email/Password and Magic Links), token persistence in `localStorage`, and automatic token refresh.
2. **Local-First Guest Mode & Auto-Adoption**: Unauthenticated visitors operate locally in Guest Mode. Upon signing up or logging in, any local unauthenticated practice data is automatically adopted and synchronized into their account. On sign-out, local cached data for that user is purged to protect privacy on shared devices.
3. **Database Schema & RLS**:
   - `instruments` and `sessions` tables have a `user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE`.
   - Primary key is composite: `PRIMARY KEY (user_id, id)`.
   - PostgreSQL RLS policies enforce `auth.uid() = user_id` on `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
4. **Cloudflare Worker BFF Gateway**:
   - The frontend passes `Authorization: Bearer <access_token>` to the Worker BFF (`/api/sync`).
   - The Worker forwards the user's JWT to Supabase REST endpoints, allowing PostgreSQL RLS to natively enforce tenant isolation at the database layer.

## Consequences
- Every user has complete, private isolation of their instruments, sessions, and streaks.
- The public web application can be shared freely without exposing personal practice history.
- Existing single-user records in Supabase are migrated to the primary user's UUID via a database migration script.
