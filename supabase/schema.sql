create extension if not exists pgcrypto;

create table if not exists public.course_bookings (
  id uuid primary key default gen_random_uuid(),
  course_slug text not null check (
    course_slug in ('sauerteig-brot', 'ciabatta-franzbroetchen', 'geflecht-und-suesses')
  ),
  course_title text not null,
  course_date date not null,
  time_slot text not null check (time_slot in ('10:00-14:00', '15:00-19:00')),
  participants integer not null check (participants between 1 and 8),
  customer_name text not null,
  email text not null,
  phone text,
  message text,
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists course_bookings_date_idx
  on public.course_bookings (course_date, time_slot);

create index if not exists course_bookings_status_idx
  on public.course_bookings (status, created_at desc);

alter table public.course_bookings enable row level security;

-- Inserts are performed by the Next.js Route Handler with SUPABASE_SERVICE_ROLE_KEY.
-- The service role bypasses RLS, so public browser clients never receive write credentials.
