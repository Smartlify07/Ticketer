create policy "Enable update for users based on email"
on "public"."students"
as permissive
for update
to authenticated
using (((( SELECT auth.jwt() AS jwt) ->> 'email'::text) = email))
with check (((( SELECT auth.jwt() AS jwt) ->> 'email'::text) = email));



