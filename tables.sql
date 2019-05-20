-- createdb name -U postgres
-- psql -d react-shopping -U postgres -f tables.sql

CREATE TABLE IF NOT EXISTS products (
	id SERIAL PRIMARY KEY,
	name TEXT,
	price TEXT,
	description TEXT
);