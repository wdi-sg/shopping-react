-- create pokemons table
CREATE TABLE IF NOT EXISTS products (
	fid SERIAL PRIMARY KEY,
	id INTEGER,
	name TEXT,
	price TEXT,
	description TEXT
);