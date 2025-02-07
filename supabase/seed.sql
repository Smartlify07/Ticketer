SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'dbacb6d1-eafb-4f53-b4a9-bd94a77aba49', '{"action":"user_confirmation_requested","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-02-01 19:49:36.052977+00', ''),
	('00000000-0000-0000-0000-000000000000', '58256874-66d9-4951-b763-4e100641dcec', '{"action":"user_signedup","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2025-02-01 20:42:52.196501+00', ''),
	('00000000-0000-0000-0000-000000000000', '99d1659f-b838-4ae1-96c1-d9e03d53848f', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-01 21:31:15.01566+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c630f2f-f921-4286-b40d-7f4263de5cc8', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-01 21:45:27.002121+00', ''),
	('00000000-0000-0000-0000-000000000000', '2a23059b-b4ae-4ac9-92d1-9524a0be24b3', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-01 22:48:27.65257+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b201ab5e-55a5-4b14-b32e-a51d99d1a49d', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-01 22:48:27.654404+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fe5281a3-5ec7-43c9-8b0f-a63dbc933632', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 08:13:35.990664+00', ''),
	('00000000-0000-0000-0000-000000000000', '77b0de74-b5ce-4f77-8ad6-210183d642da', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 08:13:36.009255+00', ''),
	('00000000-0000-0000-0000-000000000000', '2d15727e-6a7d-43f8-97fa-973c6f238df4', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 12:29:07.937713+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ede15c57-3396-4068-9f3c-bd3f2381f155', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 12:29:07.948393+00', ''),
	('00000000-0000-0000-0000-000000000000', '53bf02f1-625d-4720-b398-eaf43f5eb116', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 13:40:09.579605+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c9cb5d5-9ee2-480f-9d85-67fd6ccb3947', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 13:40:09.580581+00', ''),
	('00000000-0000-0000-0000-000000000000', '026c7626-78b2-4b99-a6fa-43e6fb19d9f7', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 14:40:36.570855+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ec6cc19-0750-45fa-be51-c610aeb8dd88', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 14:40:36.572489+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e017d155-3df5-43a7-b753-f6e88b0bc9b1', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 16:58:45.820422+00', ''),
	('00000000-0000-0000-0000-000000000000', '05469832-f52c-4796-80ed-da7d88f9cb27', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 16:58:45.82133+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf18f7da-17eb-4335-8b82-b7fb18824c11', '{"action":"user_confirmation_requested","actor_id":"1281e552-9df3-4e52-821e-4b28cd54a478","actor_username":"anosikeobinna893@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2025-02-02 17:17:19.096023+00', ''),
	('00000000-0000-0000-0000-000000000000', '123a32ca-1a9b-491d-a50d-bd5509564cef', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 17:35:50.767661+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c6a66cd4-297f-47eb-8696-335b807f1a86', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 17:45:02.884669+00', ''),
	('00000000-0000-0000-0000-000000000000', '86f57116-bcdb-48bd-9756-1eefd45f4b51', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 19:23:19.806466+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6c3be51-fc59-48c2-9d83-ca328428fb9a', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 19:23:19.810229+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fc54ec6f-4c72-4b18-8047-61df92ad48c5', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 19:23:33.873502+00', ''),
	('00000000-0000-0000-0000-000000000000', '5cc63750-236f-4d58-999a-9a7f2c09fa73', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 19:29:23.947661+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b5571176-ee49-418e-87f9-7d6258011a82', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 20:32:47.546615+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de0a2cad-26cf-493e-9514-ecaab42b7cab', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 20:32:47.54933+00', ''),
	('00000000-0000-0000-0000-000000000000', '2adfe8f0-9d38-4eda-ab07-e83bc2be87b1', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 21:32:55.649121+00', ''),
	('00000000-0000-0000-0000-000000000000', '31d2c895-4070-405b-bcce-89ef307937f9', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 21:32:55.65089+00', ''),
	('00000000-0000-0000-0000-000000000000', 'db3a9683-4d34-4efb-a09f-9c5a3ec0b141', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 22:33:12.326826+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a40ea09-f830-4a17-9dba-83442b0a97c1', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-02 22:33:12.328754+00', ''),
	('00000000-0000-0000-0000-000000000000', '808357da-aa21-4b70-b248-7cae29b99f57', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 22:51:40.922229+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fa312ee8-844f-476b-ad54-3be41e03e2f0', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-02 23:02:07.935803+00', ''),
	('00000000-0000-0000-0000-000000000000', '91d56178-d0cc-461c-a5bf-a38534de0acf', '{"action":"user_signedup","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"google"}}', '2025-02-02 23:10:02.744674+00', ''),
	('00000000-0000-0000-0000-000000000000', '2929c28a-fe46-4a28-82c1-dfaea7984e48', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 12:48:01.251751+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a36df853-d174-418f-9fc0-0a69719c9649', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 12:48:01.270794+00', ''),
	('00000000-0000-0000-0000-000000000000', '8801befb-d9fc-44ca-90cd-b7f1ae446975', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 13:03:18.774238+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd84fd91c-922b-4523-b5b9-31ce422d538f', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 13:03:18.777084+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd1f1e9f-119a-4122-a77c-3fe0f8531152', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 14:03:48.32739+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7c77ab5-dde1-48f0-bff7-0936d8b29c9a', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 14:03:48.329256+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c392b152-b57c-491b-b413-2151f3c88c5f', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 15:05:53.063286+00', ''),
	('00000000-0000-0000-0000-000000000000', '63beb389-1cd2-4853-b630-e3d9fa8c4f89', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 15:05:53.064291+00', ''),
	('00000000-0000-0000-0000-000000000000', '01416da1-891e-410f-958d-cba5338cfeb0', '{"action":"login","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-03 19:16:27.974553+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd05115ed-7e7e-4c10-9042-9f2539764286', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 19:17:54.888509+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5d1b8f8-6859-43b5-91b7-55b16c0aaf29', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 19:17:54.889528+00', ''),
	('00000000-0000-0000-0000-000000000000', '51da70ec-7e69-4c93-a356-d1d75491c475', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 20:16:26.495404+00', ''),
	('00000000-0000-0000-0000-000000000000', '70d68740-1809-4331-a44e-443c4d737657', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 20:16:26.497399+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b7228db-9e67-4734-a272-2f98f71f6b77', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 20:18:05.306912+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c9d2ab8-8578-41a6-a635-b99d81dfff1b', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 20:18:05.307743+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c3cbec0d-03e4-4ed9-bc4a-9fa276e71d5c', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 21:14:46.662313+00', ''),
	('00000000-0000-0000-0000-000000000000', 'feae82a8-9567-41bf-87a8-15036589e926', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 21:14:46.665257+00', ''),
	('00000000-0000-0000-0000-000000000000', '755f4356-459f-45a2-9ea8-2a069b8fea43', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 21:38:07.21491+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f6c5e1a-94d3-431c-8bb8-6d04e7df015a', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 21:38:07.217258+00', ''),
	('00000000-0000-0000-0000-000000000000', '9dee093c-1ce6-4841-95d2-a8aef27ab3a1', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 22:32:05.758852+00', ''),
	('00000000-0000-0000-0000-000000000000', '867015ed-9571-483a-9cf2-88490954f6a5', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-03 22:32:05.763444+00', ''),
	('00000000-0000-0000-0000-000000000000', '55320d54-df83-4d99-830c-a62bbe14968f', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 08:10:17.087391+00', ''),
	('00000000-0000-0000-0000-000000000000', '405771d6-03be-4334-b630-1bfc0c4bb4ed', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 08:10:17.11033+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd14ebd2c-a8cb-428e-a8b1-cd125dbe904e', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 10:24:20.981213+00', ''),
	('00000000-0000-0000-0000-000000000000', '35dab8a9-6d31-415a-a3f0-c2168114b8c5', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 10:24:20.983177+00', ''),
	('00000000-0000-0000-0000-000000000000', '8aa64f55-9f8c-4fc3-946c-1a5e97650dc6', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 11:22:39.956024+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c75090cd-c36a-4fc1-aad3-a31741d74318', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 11:22:39.95702+00', ''),
	('00000000-0000-0000-0000-000000000000', '7e3f5033-2b4e-4ef4-89da-1e73ec95f895', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 11:42:15.390543+00', ''),
	('00000000-0000-0000-0000-000000000000', '17995962-6e7a-4e29-93ca-4a36fd303538', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 11:42:15.391618+00', ''),
	('00000000-0000-0000-0000-000000000000', '54818461-dcd2-4533-8719-dd1e82e4f31e', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 13:53:44.408041+00', ''),
	('00000000-0000-0000-0000-000000000000', '0167a4d1-97b0-482e-b026-4e34d363254a', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 13:53:44.408983+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd4653896-8855-42a4-97fe-dce31f42e77f', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 13:59:34.618714+00', ''),
	('00000000-0000-0000-0000-000000000000', '25133b2e-7985-4fad-867e-88b7360291f1', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 13:59:34.61982+00', ''),
	('00000000-0000-0000-0000-000000000000', '03bdb420-4808-4902-8cb3-5ad6def1a778', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 15:07:11.0461+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cd703fc-8bc5-4a9c-b9f6-3e8fbdcf0f28', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 15:07:11.070515+00', ''),
	('00000000-0000-0000-0000-000000000000', '2ea25d5d-925a-4e0d-8c79-487243c30d05', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 15:18:28.836378+00', ''),
	('00000000-0000-0000-0000-000000000000', '1478f7ed-36b2-4952-93fb-4db1f0b27d46', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 15:18:28.838199+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b25560fd-81df-42f4-a128-14cca1a331a7', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 16:20:20.47165+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd5d04d66-7994-4ff9-aeeb-08c003f6f855', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 16:20:20.474229+00', ''),
	('00000000-0000-0000-0000-000000000000', '938761d1-47b0-44e3-b09e-52a87f1212a0', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 16:20:50.311945+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dbf040e1-f3b3-4da8-85bd-ed77f4d46338', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 16:20:50.313385+00', ''),
	('00000000-0000-0000-0000-000000000000', '19dcbbbc-f3d5-4d0f-94d3-f688b4b8f2f8', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 17:20:39.658465+00', ''),
	('00000000-0000-0000-0000-000000000000', '76e8b5bb-243d-4ee4-88db-3202bad00abb', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 17:20:39.660452+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb7a436b-db25-49f5-a9ee-18abb6997535', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 17:42:47.01426+00', ''),
	('00000000-0000-0000-0000-000000000000', '0dbb2a80-b0dc-44f9-aff0-66194f3efc12', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 17:42:47.016985+00', ''),
	('00000000-0000-0000-0000-000000000000', '56c91f13-93db-468c-ba3b-cf472936423f', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 18:58:34.662733+00', ''),
	('00000000-0000-0000-0000-000000000000', '38caf67b-2314-44a6-ac3d-98faf5f249ff', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 18:58:34.665235+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edfa6002-03f3-4ec9-b6e0-254e12df2b6a', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 19:00:47.136597+00', ''),
	('00000000-0000-0000-0000-000000000000', '3980ea76-0d32-4dd2-a16b-91bed27cb627', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 19:00:47.137576+00', ''),
	('00000000-0000-0000-0000-000000000000', '02bee9f7-26f5-4dee-8ac4-fe235f915b85', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-04 19:07:34.416316+00', ''),
	('00000000-0000-0000-0000-000000000000', '8863fc35-218a-4f41-bd0b-46e041e826ab', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 20:17:11.151627+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8948370-bc20-404f-9cc6-0ef1f74aaecd', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 20:17:11.154909+00', ''),
	('00000000-0000-0000-0000-000000000000', '24987bc7-af0f-4973-b74b-378bf6d11eaa', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 20:35:20.151819+00', ''),
	('00000000-0000-0000-0000-000000000000', '59b2a1f6-2730-45df-a170-7ad5446f20b0', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 20:35:20.154678+00', ''),
	('00000000-0000-0000-0000-000000000000', '059b8e11-0fd0-4444-911d-44720c1e33d1', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 21:17:18.804348+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1c1d04d-3ab5-41b2-a000-3bfd6c63c786', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 21:17:18.806151+00', ''),
	('00000000-0000-0000-0000-000000000000', '590d59f3-6db3-487d-86db-0dbcd49a7e14', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 21:35:32.377471+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd79a35f8-a4a4-43e1-9382-a40ac7338a04', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 21:35:32.380831+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c995fac-daef-4e56-83f2-cdb804cc2469', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 22:15:28.662414+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a78e221e-c8b6-40af-9393-49298a19fa97', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 22:15:28.66439+00', ''),
	('00000000-0000-0000-0000-000000000000', '73cc3b5f-a7a8-4729-b700-25f651fcb0fc', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 22:49:18.733182+00', ''),
	('00000000-0000-0000-0000-000000000000', '00acbf3f-d89c-4517-9aea-cc0da1e983ad', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 22:49:18.735865+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2b26ed7-561f-4328-9fe1-f534db1e73dc', '{"action":"token_refreshed","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 23:15:22.451568+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cc950c2-c259-4d95-a79d-edf247df8992', '{"action":"token_revoked","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-04 23:15:22.452538+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f33461c3-52dd-4292-85c0-19dc72dc5334', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 12:06:02.961949+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e19ff15-3673-4f21-a611-cd194c43b029', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 12:06:02.995842+00', ''),
	('00000000-0000-0000-0000-000000000000', '822f75b6-140b-448c-a193-a5a682cd16ca', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 13:11:32.605347+00', ''),
	('00000000-0000-0000-0000-000000000000', '5b8420e6-8987-4615-8457-16a213eca344', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 13:11:32.614231+00', ''),
	('00000000-0000-0000-0000-000000000000', '01f436e5-cd1d-49b2-8cb2-52393a4a0477', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 14:15:19.157226+00', ''),
	('00000000-0000-0000-0000-000000000000', '805783be-c331-4828-ae7d-797f1e18ca0f', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 14:15:19.161516+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c4ffe82f-ddca-4190-8349-589b285082fb', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 16:38:10.250275+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e68cdef4-17bc-4768-a6c6-56468c2eb108', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 16:38:10.253002+00', ''),
	('00000000-0000-0000-0000-000000000000', '95bb5faa-53e3-4236-86e2-a9f9f306483c', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 17:39:19.647894+00', ''),
	('00000000-0000-0000-0000-000000000000', '54aba221-ee33-480c-be5f-4b96469ad49e', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 17:39:19.681893+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a1d1de6-ce45-4da8-9d27-3713b227531a', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 19:03:17.641688+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a5853199-d807-4722-bb6d-8d11ae50fda6', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 19:03:17.675665+00', ''),
	('00000000-0000-0000-0000-000000000000', '87edddf5-bcd7-4218-990d-6c40f9d2b5ef', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 20:05:40.819618+00', ''),
	('00000000-0000-0000-0000-000000000000', '3d14d020-2c53-4005-9516-f6e65542868d', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-06 20:05:40.824845+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a4ffca1c-b2cd-4388-be5b-f8fde0c0bd3a', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-06 20:55:49.910101+00', ''),
	('00000000-0000-0000-0000-000000000000', '17743369-90ff-492c-9ce5-9b2e8645e4e5', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 07:40:02.581601+00', ''),
	('00000000-0000-0000-0000-000000000000', '79fcdd74-8047-496b-b969-64606e74e486', '{"action":"token_refreshed","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-07 07:57:46.157684+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b653a05e-f7e0-48e5-856a-0e3ead63f18e', '{"action":"token_revoked","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"token"}', '2025-02-07 07:57:46.162968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ebe2bacc-4df7-40c8-bbb1-3860e10fc9c8', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:00:26.281657+00', ''),
	('00000000-0000-0000-0000-000000000000', '5840b4fd-d87a-4daa-b960-5ff9ebf981f5', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:02:42.908493+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b089ad73-e87e-45cb-96f5-485536f68407', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:02:58.869527+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ff11c79f-9618-4221-9ec0-6a55cee88be3', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:03:09.155984+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a6292c48-cf12-4142-aec1-07f8731e875e', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:03:13.850522+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b28c0f3a-da10-4932-838b-c9cc0e7358c2', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:03:21.266568+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a55176e4-e613-4542-9cea-1e0f1727936f', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:03:30.317586+00', ''),
	('00000000-0000-0000-0000-000000000000', '432fbac5-b01e-4a7a-ae11-0ac539f9ec76', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:03:59.576608+00', ''),
	('00000000-0000-0000-0000-000000000000', '0a615c13-594d-4401-ac64-8c3e33e6d740', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:04:06.657184+00', ''),
	('00000000-0000-0000-0000-000000000000', '45773be2-4b62-45ef-8388-9aa2ea563fd3', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:04:09.77971+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a43c17d6-799f-4f91-b58c-3ab929fa1fda', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:04:14.814+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd7498c25-83f6-479c-8275-09e11f0ed541', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:05:14.625575+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e861695e-e415-44d1-a84d-881d166367f7', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:12:07.411806+00', ''),
	('00000000-0000-0000-0000-000000000000', '282648fb-d285-4d84-90fb-c3b2e8cc721d', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:12:33.730244+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c3292b6f-e318-4c5d-9c2e-8a9877127153', '{"action":"login","actor_id":"f393468a-61ab-4614-b31b-5a6e70f81f40","actor_name":"Anosike Obinna","actor_username":"anosikeobinna895@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:15:48.117113+00', ''),
	('00000000-0000-0000-0000-000000000000', '402230b6-df01-4a5f-ae9a-daa4ebe1aee9', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:20:08.906956+00', ''),
	('00000000-0000-0000-0000-000000000000', '660c5ddf-7523-4c38-8a06-912c6098b7bb', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:20:42.606411+00', ''),
	('00000000-0000-0000-0000-000000000000', '7914cc08-1732-4db3-b87a-d4d5cf158fd1', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:20:46.750386+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd3492052-829a-4955-9d24-1976ce18fc8f', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:21:19.238647+00', ''),
	('00000000-0000-0000-0000-000000000000', '49c16f90-7c76-492b-a10c-87f17ee7a787', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:21:23.669223+00', ''),
	('00000000-0000-0000-0000-000000000000', '76f8aa52-bcdc-4261-afe8-4caf99e23c4b', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:21:40.728086+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a5a5717-0338-444b-a088-31da6dcfca0c', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:32:22.958304+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ea38869b-1c17-4ce4-a01c-d2cb4828afdf', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:32:37.530217+00', ''),
	('00000000-0000-0000-0000-000000000000', '88de0591-6c43-429d-bd07-04a6b8a174d9', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:33:27.676684+00', ''),
	('00000000-0000-0000-0000-000000000000', '907b0cb2-5916-4ae7-b0a7-63c9f3b85065', '{"action":"logout","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-02-07 08:34:09.240693+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fcbff288-dd66-49f2-9461-3962631ad9e2', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:34:13.605395+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ae1dd758-386b-4749-98de-375a52eccc9f', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:34:18.688817+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a39a93d8-e7ea-492c-8930-fa9425a82842', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:35:27.815672+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ef28b29c-f607-4d2c-af60-90cf66056d85', '{"action":"login","actor_id":"963a9fbe-2d49-41b3-bfd6-dd8a4cee3319","actor_name":"Obinna","actor_username":"smartlify09@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"google"}}', '2025-02-07 08:45:30.696402+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'f393468a-61ab-4614-b31b-5a6e70f81f40', 'authenticated', 'authenticated', 'anosikeobinna895@gmail.com', NULL, '2025-02-02 23:10:02.745448+00', NULL, '', '2025-02-01 19:49:36.058089+00', '', NULL, '', '', NULL, '2025-02-07 08:15:48.118026+00', '{"provider": "google", "providers": ["google"]}', '{"iss": "https://accounts.google.com", "sub": "111250374081167696516", "name": "Anosike Obinna", "email": "anosikeobinna895@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocLLm5TvdTsEx2EjPntoVOW9X_w77HmVlWgWBhEZMw3M8KLgQg=s96-c", "full_name": "Anosike Obinna", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLLm5TvdTsEx2EjPntoVOW9X_w77HmVlWgWBhEZMw3M8KLgQg=s96-c", "provider_id": "111250374081167696516", "email_verified": true, "phone_verified": false}', NULL, '2025-02-01 19:49:36.02255+00', '2025-02-07 08:15:48.120694+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', 'authenticated', 'authenticated', 'smartlify09@gmail.com', NULL, '2025-02-01 20:42:52.19718+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-02-07 08:45:30.701569+00', '{"provider": "google", "providers": ["google"]}', '{"iss": "https://accounts.google.com", "sub": "116360439495718615792", "name": "Obinna", "email": "smartlify09@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocL4WLMIp44MFYV7vEDwrGtAntSOZqgbN3PE04qp1LK9EwM6hw=s96-c", "full_name": "Obinna", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocL4WLMIp44MFYV7vEDwrGtAntSOZqgbN3PE04qp1LK9EwM6hw=s96-c", "provider_id": "116360439495718615792", "email_verified": true, "phone_verified": false}', NULL, '2025-02-01 20:42:52.17915+00', '2025-02-07 08:45:30.709746+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '1281e552-9df3-4e52-821e-4b28cd54a478', 'authenticated', 'authenticated', 'anosikeobinna893@gmail.com', '$2a$10$XR8dMkUW28t3uASCMHZKreIefpO8xRFE5.mqQ7GnLWDPzW0qTIXM.', NULL, NULL, '05199b078c9c2fabba0cc14736c704d10f9c4edce9cc6218016e6fd6', '2025-02-02 17:17:19.096536+00', '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{"sub": "1281e552-9df3-4e52-821e-4b28cd54a478", "email": "anosikeobinna893@gmail.com", "email_verified": false, "phone_verified": false}', NULL, '2025-02-02 17:17:19.091293+00', '2025-02-02 17:17:19.993441+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('1281e552-9df3-4e52-821e-4b28cd54a478', '1281e552-9df3-4e52-821e-4b28cd54a478', '{"sub": "1281e552-9df3-4e52-821e-4b28cd54a478", "email": "anosikeobinna893@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-02-02 17:17:19.09384+00', '2025-02-02 17:17:19.09389+00', '2025-02-02 17:17:19.09389+00', '37c2298b-0409-49ea-8389-68e3234caf89'),
	('111250374081167696516', 'f393468a-61ab-4614-b31b-5a6e70f81f40', '{"iss": "https://accounts.google.com", "sub": "111250374081167696516", "name": "Anosike Obinna", "email": "anosikeobinna895@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocLLm5TvdTsEx2EjPntoVOW9X_w77HmVlWgWBhEZMw3M8KLgQg=s96-c", "full_name": "Anosike Obinna", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocLLm5TvdTsEx2EjPntoVOW9X_w77HmVlWgWBhEZMw3M8KLgQg=s96-c", "provider_id": "111250374081167696516", "email_verified": true, "phone_verified": false}', 'google', '2025-02-02 23:10:02.734982+00', '2025-02-02 23:10:02.735031+00', '2025-02-07 08:15:48.112835+00', 'd07bdd44-a61d-493c-8aef-61d741f1d656'),
	('116360439495718615792', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '{"iss": "https://accounts.google.com", "sub": "116360439495718615792", "name": "Obinna", "email": "smartlify09@gmail.com", "picture": "https://lh3.googleusercontent.com/a/ACg8ocL4WLMIp44MFYV7vEDwrGtAntSOZqgbN3PE04qp1LK9EwM6hw=s96-c", "full_name": "Obinna", "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocL4WLMIp44MFYV7vEDwrGtAntSOZqgbN3PE04qp1LK9EwM6hw=s96-c", "provider_id": "116360439495718615792", "email_verified": true, "phone_verified": false}', 'google', '2025-02-01 20:42:52.192036+00', '2025-02-01 20:42:52.192091+00', '2025-02-07 08:45:30.688329+00', '2ac6eb78-8206-4916-b143-c3784bbc4d0c');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('df4640a4-a935-4427-9629-eb1d851f1c6f', 'f393468a-61ab-4614-b31b-5a6e70f81f40', '2025-02-02 23:10:02.752868+00', '2025-02-03 12:48:01.299916+00', NULL, 'aal1', NULL, '2025-02-03 12:48:01.299817', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', '102.88.43.73', NULL),
	('94fa7e8b-de72-46f4-992d-6822db4f438a', 'f393468a-61ab-4614-b31b-5a6e70f81f40', '2025-02-07 08:15:48.118116+00', '2025-02-07 08:15:48.118116+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', '102.88.108.164', NULL),
	('a52cf4c0-9a1f-4c08-a6b3-f4848674efa6', 'f393468a-61ab-4614-b31b-5a6e70f81f40', '2025-02-03 19:16:27.977108+00', '2025-02-04 23:15:22.457775+00', NULL, 'aal1', NULL, '2025-02-04 23:15:22.457702', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:134.0) Gecko/20100101 Firefox/134.0', '102.89.42.85', NULL),
	('f0a0f400-de73-4a24-bc17-1d65e02aa849', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '2025-02-07 08:34:13.606044+00', '2025-02-07 08:34:13.606044+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', '102.88.108.164', NULL),
	('02aba109-5224-4e8d-adce-d3539986ef41', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '2025-02-07 08:34:18.689415+00', '2025-02-07 08:34:18.689415+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', '102.88.108.164', NULL),
	('23034194-7576-4ff6-8cac-b2085b31d2ba', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '2025-02-07 08:35:27.817325+00', '2025-02-07 08:35:27.817325+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36', '102.88.108.164', NULL),
	('e1a6a3e9-b522-461d-93b9-c9484584c1c9', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '2025-02-07 08:45:30.701653+00', '2025-02-07 08:45:30.701653+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36', '102.88.108.164', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('df4640a4-a935-4427-9629-eb1d851f1c6f', '2025-02-02 23:10:02.758903+00', '2025-02-02 23:10:02.758903+00', 'oauth', '43f946fd-484a-40db-8136-9c36f3429ae2'),
	('a52cf4c0-9a1f-4c08-a6b3-f4848674efa6', '2025-02-03 19:16:27.985639+00', '2025-02-03 19:16:27.985639+00', 'oauth', '66845045-2fe8-483f-8f0c-0d443233c584'),
	('94fa7e8b-de72-46f4-992d-6822db4f438a', '2025-02-07 08:15:48.121183+00', '2025-02-07 08:15:48.121183+00', 'oauth', '1c4bb54c-7bb9-4753-a077-e66974867638'),
	('f0a0f400-de73-4a24-bc17-1d65e02aa849', '2025-02-07 08:34:13.610435+00', '2025-02-07 08:34:13.610435+00', 'oauth', '7d01d468-56c0-4187-bee6-830d0b95380d'),
	('02aba109-5224-4e8d-adce-d3539986ef41', '2025-02-07 08:34:18.691368+00', '2025-02-07 08:34:18.691368+00', 'oauth', 'd944034b-72a5-4049-a1e8-8e7001765885'),
	('23034194-7576-4ff6-8cac-b2085b31d2ba', '2025-02-07 08:35:27.820309+00', '2025-02-07 08:35:27.820309+00', 'oauth', '3a4bbf12-2a46-4561-a67c-c328ae5c6969'),
	('e1a6a3e9-b522-461d-93b9-c9484584c1c9', '2025-02-07 08:45:30.710241+00', '2025-02-07 08:45:30.710241+00', 'oauth', '54f23a32-9208-46a8-814c-9105dc95cf2e');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") VALUES
	('377f72cd-6ac9-4b70-9408-2b70f369d3ff', '1281e552-9df3-4e52-821e-4b28cd54a478', 'confirmation_token', '05199b078c9c2fabba0cc14736c704d10f9c4edce9cc6218016e6fd6', 'anosikeobinna893@gmail.com', '2025-02-02 17:17:19.998506', '2025-02-02 17:17:19.998506');


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 79, 'eboiAdEFmrGVQTWnQbNXZA', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', false, '2025-02-07 08:34:13.608023+00', '2025-02-07 08:34:13.608023+00', NULL, 'f0a0f400-de73-4a24-bc17-1d65e02aa849'),
	('00000000-0000-0000-0000-000000000000', 80, 'dvrdnCg3cQhmGkTB6BmuVQ', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', false, '2025-02-07 08:34:18.69013+00', '2025-02-07 08:34:18.69013+00', NULL, '02aba109-5224-4e8d-adce-d3539986ef41'),
	('00000000-0000-0000-0000-000000000000', 82, 'aHkeFgsccb_sXv2kIE9Grg', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', false, '2025-02-07 08:45:30.704737+00', '2025-02-07 08:45:30.704737+00', NULL, 'e1a6a3e9-b522-461d-93b9-c9484584c1c9'),
	('00000000-0000-0000-0000-000000000000', 19, '2gfd_Jk-Vnw4nhDqhlCpRg', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-02 23:10:02.754676+00', '2025-02-03 12:48:01.272429+00', NULL, 'df4640a4-a935-4427-9629-eb1d851f1c6f'),
	('00000000-0000-0000-0000-000000000000', 20, 'y_teKCldbVaBYkFsRgrOiw', 'f393468a-61ab-4614-b31b-5a6e70f81f40', false, '2025-02-03 12:48:01.282801+00', '2025-02-03 12:48:01.282801+00', '2gfd_Jk-Vnw4nhDqhlCpRg', 'df4640a4-a935-4427-9629-eb1d851f1c6f'),
	('00000000-0000-0000-0000-000000000000', 24, 'x7qrpfUBCPgH25YWjVvdHQ', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-03 19:16:27.981037+00', '2025-02-03 20:16:26.498002+00', NULL, 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 26, 'hwcaovqsy-PcSgugQDyf0w', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-03 20:16:26.498637+00', '2025-02-03 21:14:46.665955+00', 'x7qrpfUBCPgH25YWjVvdHQ', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 28, 'oGLr6e_yQVa6HtFNYHk0-A', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-03 21:14:46.668786+00', '2025-02-03 22:32:05.76495+00', 'hwcaovqsy-PcSgugQDyf0w', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 30, '9qVAixTmhWQYis8H88KD5A', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-03 22:32:05.768865+00', '2025-02-04 08:10:17.110945+00', 'oGLr6e_yQVa6HtFNYHk0-A', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 31, 'GrQTWojPfOOiO3i4q_8z9g', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 08:10:17.11665+00', '2025-02-04 10:24:20.984602+00', '9qVAixTmhWQYis8H88KD5A', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 32, 'Rj8RKOCCjf7mu6Zpmh4u2Q', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 10:24:20.98696+00', '2025-02-04 11:22:39.959996+00', 'GrQTWojPfOOiO3i4q_8z9g', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 33, 'APmrKdbrDnK_TfYJHxMvNQ', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 11:22:39.9608+00', '2025-02-04 13:59:34.621316+00', 'Rj8RKOCCjf7mu6Zpmh4u2Q', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 36, 'bAY0JG7GoJcUogwvDVwGow', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 13:59:34.624522+00', '2025-02-04 15:07:11.071312+00', 'APmrKdbrDnK_TfYJHxMvNQ', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 37, 'pKgFBJ4MHjBgYof_TlKNjg', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 15:07:11.082344+00', '2025-02-04 16:20:50.313901+00', 'bAY0JG7GoJcUogwvDVwGow', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 40, 'zueL9HtbkiRO3T3SyX3GLg', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 16:20:50.315759+00', '2025-02-04 17:20:39.661032+00', 'pKgFBJ4MHjBgYof_TlKNjg', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 41, 'CbIpqTuX_mtklzZeaMlB3w', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 17:20:39.661799+00', '2025-02-04 19:00:47.13824+00', 'zueL9HtbkiRO3T3SyX3GLg', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 44, 'OEHC8KRHpU0T0LO6iyRkGg', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 19:00:47.138962+00', '2025-02-04 20:17:11.155498+00', 'CbIpqTuX_mtklzZeaMlB3w', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 46, 'esNLFPzcAuUYJMT_H8xtDw', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 20:17:11.16211+00', '2025-02-04 21:17:18.806697+00', 'OEHC8KRHpU0T0LO6iyRkGg', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 48, 'hoRDPDj16ZW3YC6zXEeJ0w', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 21:17:18.810325+00', '2025-02-04 22:15:28.664889+00', 'esNLFPzcAuUYJMT_H8xtDw', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 72, 'EVHWIBo0z7RcsTKl0DUJlg', 'f393468a-61ab-4614-b31b-5a6e70f81f40', false, '2025-02-07 08:15:48.119237+00', '2025-02-07 08:15:48.119237+00', NULL, '94fa7e8b-de72-46f4-992d-6822db4f438a'),
	('00000000-0000-0000-0000-000000000000', 50, 'QoRqsK9JfVYv9dHchkdcyA', 'f393468a-61ab-4614-b31b-5a6e70f81f40', true, '2025-02-04 22:15:28.667493+00', '2025-02-04 23:15:22.453043+00', 'hoRDPDj16ZW3YC6zXEeJ0w', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 52, 'hgNaFKu3B2EdvUNMv4hCwA', 'f393468a-61ab-4614-b31b-5a6e70f81f40', false, '2025-02-04 23:15:22.455335+00', '2025-02-04 23:15:22.455335+00', 'QoRqsK9JfVYv9dHchkdcyA', 'a52cf4c0-9a1f-4c08-a6b3-f4848674efa6'),
	('00000000-0000-0000-0000-000000000000', 81, 'vV8WdFizg2_P8Y76YYLIBQ', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', false, '2025-02-07 08:35:27.818484+00', '2025-02-07 08:35:27.818484+00', NULL, '23034194-7576-4ff6-8cac-b2085b31d2ba');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."departments" ("id", "created_at", "title") VALUES
	('af49fc8c-fe80-45b2-ad4a-f5dc4bf25928', '2025-02-02 23:21:54.668902+00', 'COLBAS');


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."events" ("id", "created_at", "title", "description", "ticketFee", "open_to_all", "event_date", "cover_image", "location") VALUES
	('50a1ce22-6eae-4c9f-9b6b-c3b45ac087d5', '2025-02-03 15:42:15.401914+00', 'Event Four', 'Description for Event Four.', 30.00, true, '2023-12-10 21:00:00+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1738594428/view-3d-movie-theater-seating_j3mqoj.jpg', 'Location Four'),
	('676d8372-94fd-496b-adb5-cb265d3e46ad', '2025-02-03 15:42:15.401914+00', 'Event Five', 'Description for Event Five.', 20.00, false, '2023-12-20 22:00:00+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1738594428/view-3d-movie-theater-seating_j3mqoj.jpg', 'Location Five'),
	('88fda9a5-0343-47c1-a775-d0fd2fe7dcb0', '2025-02-03 15:42:15.401914+00', 'Event One', 'Description for Event One.', 15.00, true, '2023-11-01 18:00:00+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764407/5136-Vincent-Avenue-S-Minneapolis-MN-55410-6544058-image78_zffnfo.jpg', 'Location One'),
	('f7c3e629-c718-43b1-9306-cae1cb49e6fb', '2025-02-03 15:42:15.401914+00', 'Event Two', 'Description for Event Two.', 25.00, true, '2023-11-15 19:00:00+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764407/5136-Vincent-Avenue-S-Minneapolis-MN-55410-6544058-image78_zffnfo.jpg', 'Location Two'),
	('f98e19a7-866f-447e-853c-92032d88060e', '2025-02-03 15:42:15.401914+00', 'Event Three', 'Description for Event Three.', 10.00, false, '2023-12-01 20:00:00+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1737764407/5136-Vincent-Avenue-S-Minneapolis-MN-55410-6544058-image78_zffnfo.jpg', 'Location Three'),
	('97a9cb89-8dd1-47ed-9960-447dbae506a0', '2025-02-03 13:14:30.151776+00', 'Movie Night of Legends', 'A movie night for students', 1000, true, '2025-02-06 17:14:13+00', 'https://res.cloudinary.com/dgpbznsc3/image/upload/v1738594428/view-3d-movie-theater-seating_j3mqoj.jpg', '15, Main St. Admin Block');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."students" ("id", "created_at", "name", "email", "department", "matricNumber", "profile_completed", "user_id") VALUES
	('e1ad830c-39df-4212-8101-f179f6ca64a2', '2025-02-02 22:50:06.769071+00', 'Obinna', 'smartlify09@gmail.com', NULL, NULL, false, '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319'),
	('8340a121-b9f6-4e98-9d7c-bbe3d3be7f2a', '2025-02-02 23:10:07.317225+00', 'Anosike Obinna', 'anosikeobinna895@gmail.com', NULL, NULL, false, 'f393468a-61ab-4614-b31b-5a6e70f81f40');


--
-- Data for Name: event_attendees; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: event_departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."event_departments" ("id", "created_at", "department_id", "event_id") VALUES
	('37a48e91-9f7f-402c-975e-e386215f87c2', '2025-02-03 13:18:05.594177+00', 'af49fc8c-fe80-45b2-ad4a-f5dc4bf25928', '97a9cb89-8dd1-47ed-9960-447dbae506a0');


--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."payments" ("user_id", "event_id", "amount", "status", "created_at", "tx_ref", "transaction_id", "flw_ref", "id") OVERRIDING SYSTEM VALUE VALUES
	('963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '97a9cb89-8dd1-47ed-9960-447dbae506a0', 1000, 'successful', '2025-02-06 16:42:28.802523+00', '1738860087279', '8370489', 'FLW-MOCK-b12e7df005526e4773ef6b19f6e9285b', '4fc54fd7-0e4e-427f-a62b-33423f59f6f3'),
	('963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '97a9cb89-8dd1-47ed-9960-447dbae506a0', 1000, 'successful', '2025-02-06 16:44:09.504428+00', '1738860147272', '8370491', 'FLW-MOCK-b2e8f6e9a6d5efdfc934b7ef9f63f469', '4f72c68a-273b-4284-9cdb-30a3653e9364');


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tickets" ("event_id", "user_id", "created_at", "id", "tx_ref") OVERRIDING SYSTEM VALUE VALUES
	('97a9cb89-8dd1-47ed-9960-447dbae506a0', '963a9fbe-2d49-41b3-bfd6-dd8a4cee3319', '2025-02-06 16:44:09.727013+00', 'd09f07f1-421f-4c02-b2ce-11a0718df2c3', '1738860147272');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 82, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: event_attendees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."event_attendees_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
