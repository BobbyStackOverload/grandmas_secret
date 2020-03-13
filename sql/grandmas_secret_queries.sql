INSERT INTO users (firstName, lastName, email, password)  VALUES 
	('test', 'test', 'test@test.com', 'test');

INSERT INTO ingredient (name, category) VALUES 
	('salt', 'spice'),
	('pepper', 'spice'),
	('pepperoni', 'meat'),
	('flour', 'grain');

INSERT INTO recipe (name, category, ingredientid, ingredientMeasurement) VALUES
	('pizza', 'italian', ARRAY [1, 2, 3, 4], ARRAY ['1 tsp', '1 tsp', '10 oz', '4 cups']);

-- Show all recipes

SELECT * FROM recipe;

-- Show single recipe

SELECT name, ingredientid, ingredientMeasurement FROM recipe WHERE id = 1;


INSERT INTO recipe (name, category, ingredientId, ingredientAmount, ingredientMeasurement, instructions) VALUES ('Ground Beef Enchiladas', 'Mexican', ARRAY [9,10,11,12,13,14,15,16,17], ARRAY [1.5, .5, .25, 1.25, 1, 10.75, 2, 6], ARRAY ['lbs', 'lbs', 'cup', 'oz', 'cup', 'oz', 'cup', 'inch'], 'Preheat oven to 350 degrees F (175 degrees C).
In a large skillet over medium heat, cook the ground beef, green onion, and jalapeno pepper until the beef is evenly brown. Stir in water and taco seasoning. Simmer until water has evaporated.
In a medium bowl, mix together yogurt, condensed soup, and cheese.
Divide the meat mixture evenly between tortillas. Place a couple of tablespoons of cheese mixture over meat, and roll up. Place in a 7x11 inch baking dish. Repeat for each tortilla. Spoon remaining cheese mixture over the top of the tortillas.
Bake in preheated oven for 20 to 30 minutes.');