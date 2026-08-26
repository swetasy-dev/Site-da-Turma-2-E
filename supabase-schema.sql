create table if not exists public.class_central_data (
    id text primary key,
    data jsonb not null,
    updated_at timestamptz not null default now()
);

create table if not exists public.class_central_representatives (
    user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.class_central_data enable row level security;
alter table public.class_central_representatives enable row level security;

drop policy if exists "Authenticated users can verify representative status" on public.class_central_representatives;
create policy "Authenticated users can verify representative status"
    on public.class_central_representatives for select
    to authenticated
    using (user_id = auth.uid());

drop policy if exists "Public can read class data" on public.class_central_data;
drop policy if exists "Authenticated representatives can insert class data" on public.class_central_data;
drop policy if exists "Authenticated representatives can update class data" on public.class_central_data;
drop policy if exists "Authenticated representatives can delete class data" on public.class_central_data;

create policy "Public can read class data"
    on public.class_central_data for select
    using (true);

create policy "Authenticated representatives can insert class data"
    on public.class_central_data for insert
    to authenticated
    with check (exists (
        select 1 from public.class_central_representatives
        where user_id = auth.uid()
    ));

create policy "Authenticated representatives can update class data"
    on public.class_central_data for update
    to authenticated
    using (exists (
        select 1 from public.class_central_representatives
        where user_id = auth.uid()
    ))
    with check (exists (
        select 1 from public.class_central_representatives
        where user_id = auth.uid()
    ));

create policy "Authenticated representatives can delete class data"
    on public.class_central_data for delete
    to authenticated
    using (exists (
        select 1 from public.class_central_representatives
        where user_id = auth.uid()
    ));