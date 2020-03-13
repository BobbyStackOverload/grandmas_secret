const db = require('./conn');

<<<<<<< HEAD

class RecipeModel {
    constructor(id, name, category, ingredientId, ingredientAmount, ingredientMeasure, ingredientInstructions){
        this.id = id;
        this.name = name;
        this.category = category;
        this.ingredientId = ingredientId;
        this.ingredientAmount = ingredientAmount;
        this.ingredientMeasure = ingredientMeasure;
        this.ingredientInstructions = ingredientInstructions;
    }
static async getAllRecipes() {
        try {
            const response = await db.any(`SELECT * FROM recipe;`);
            console.log(response)
            return response;
        } catch(error) {
            console.error('Error: ', error);
            return error;
        }
    }
static async getRecipeById(id) {
    try {
        const response = await db.any(`SELECT * FROM recipe WHERE id = ${id}`);
        console.log(response);
        return response;
    } catch(error) {
        console.error('Error: ', error);
        return error;
    }
}
static async listAllRecipes() {
    try {
        const response = await db.any(`SELECT
        reviews.review
    FROM
        reviews, recipe
    WHERE 
        reviews.recipe_id = recipe.id
        AND recipe.name = '${name}';`);
        console.log(response);
        return response;
    } catch(error) {
        console.error('Error: ', error);
        return error;
    }
}
static async addRecipe(recipe_id, review_title, review_text) {
    try {
        const response = await db.one(
            `INSERT INTO review (user, recipe, title, review)
            VALUES ($1, $2, $3) RETURNING id` [3,recipe_id, review_title, review_text]
        );
        return response;
    } catch(error) {
        console.log('ERROR: ', error);
        return error;
    }
}
};
module.exports = RecipeModel;
=======
class RecipeDB {
    constructor(id, name, category, ingredientId,
         ingredientAmount, ingredientMeasurement, instructions) {
             this.id = id;
             this.name = name;
             this.category = category;
             this.ingredientId = ingredientId;
             this.ingredientMeasurement = ingredientMeasurement;
             this.ingredientAmount = ingredientAmount;
             this.instructions = instructions;
    }

    static async getSingleRecipe(id) {
        try {
            const response = await db.any(`SELECT * FROM recipe WHERE id = ${id}`);
            console.log(response);
            return response;
        }catch(err) {
            console.error(err);
            return err;
        }
    }

    static async getAllRecipes() {
        try {
            const response = await db.any(`SELECT * FROM recipe`);
            console.log(response);
            return response;
        }catch(err) {
            console.error(err);
            return err;
        }
    }
}

module.exports = RecipeDB;
>>>>>>> 150111a3dfacc5611e98e399fb4b4c8c8de747ae
