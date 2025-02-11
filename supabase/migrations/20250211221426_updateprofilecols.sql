CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email);

CREATE UNIQUE INDEX profiles_id_key ON public.profiles USING btree (id);

CREATE UNIQUE INDEX profiles_phone_key ON public.profiles USING btree (phone);

CREATE UNIQUE INDEX profiles_user_id_key ON public.profiles USING btree (user_id);

alter table "public"."profiles" add constraint "profiles_email_key" UNIQUE using index "profiles_email_key";

alter table "public"."profiles" add constraint "profiles_id_key" UNIQUE using index "profiles_id_key";

alter table "public"."profiles" add constraint "profiles_phone_key" UNIQUE using index "profiles_phone_key";

alter table "public"."profiles" add constraint "profiles_user_id_key" UNIQUE using index "profiles_user_id_key";


