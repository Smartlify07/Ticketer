revoke delete on table "public"."test table" from "anon";

revoke insert on table "public"."test table" from "anon";

revoke references on table "public"."test table" from "anon";

revoke select on table "public"."test table" from "anon";

revoke trigger on table "public"."test table" from "anon";

revoke truncate on table "public"."test table" from "anon";

revoke update on table "public"."test table" from "anon";

revoke delete on table "public"."test table" from "authenticated";

revoke insert on table "public"."test table" from "authenticated";

revoke references on table "public"."test table" from "authenticated";

revoke select on table "public"."test table" from "authenticated";

revoke trigger on table "public"."test table" from "authenticated";

revoke truncate on table "public"."test table" from "authenticated";

revoke update on table "public"."test table" from "authenticated";

revoke delete on table "public"."test table" from "service_role";

revoke insert on table "public"."test table" from "service_role";

revoke references on table "public"."test table" from "service_role";

revoke select on table "public"."test table" from "service_role";

revoke trigger on table "public"."test table" from "service_role";

revoke truncate on table "public"."test table" from "service_role";

revoke update on table "public"."test table" from "service_role";

alter table "public"."test table" drop constraint "test table_pkey";

drop index if exists "public"."test table_pkey";

drop table "public"."test table";

alter table "public"."events" drop column "another_col";

alter table "public"."events" drop column "another_col_from_dev";


