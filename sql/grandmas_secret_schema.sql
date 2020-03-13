CREATE TABLE users (
	id serial PRIMARY KEY,
	firstName varchar NOT NULL,
	lastName varchar NOT NULL,
	email varchar UNIQUE NOT NULL,
	password varchar
);

CREATE TABLE recipe (
	id serial PRIMARY KEY,
	name varchar NOT NULL,
	category text,
	ingredientId int[] NOT NULL,
    ingredientAmount int[] NOT NULL,
	ingredientMeasurement text[] NOT NULL,
	instructions varchar NOT NULL
);

CREATE TABLE ingredient (
	id serial PRIMARY KEY,
	name varchar NOT NULL,
	category varchar NOT NULL
);

CREATE TABLE comment (
	id serial PRIMARY KEY,
	comment varchar NOT NULL,
	userId int REFERENCES users (id),
	recipeId int REFERENCES recipe (id)
);

CREATE TABLE subcomment (
	id serial PRIMARY KEY,
	subcomment varchar NOT NULL,
	userId int REFERENCES users (id),
	recipeId int REFERENCES recipe (id),
	commentId int REFERENCES comment (id)
);
