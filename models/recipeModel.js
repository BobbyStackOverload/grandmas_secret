const db = require('./conn');

class RecipeDB {
    constructor(id, name, category, ingredientId,
         ingredientAmount, ingredientMeasurement, instructions, userId) {
             this.id = id;
             this.name = name;
             this.category = category;
             this.ingredientId = ingredientId;
             this.ingredientMeasurement = ingredientMeasurement;
             this.ingredientAmount = ingredientAmount;
             this.instructions = instructions;
             this.userId = 1;
    }

    static async getIngredient(idList) {
        const ingredients = [];
        let count = 0;
        while (count < idList.length) {
            try {
                const response = await db.any(`SELECT * FROM ingredient WHERE id = ${idList[count]}`);
                ingredients.push(response);
                count+=1;
                
            }catch(err) {
                console.error(err);
                return err;
            }
        }
        return ingredients;
    }

    static async getSingleRecipe(id) {
        try {
            const response = await db.any(`SELECT * FROM recipe WHERE id = ${id}`);
            return response;
        }catch(err) {
            console.error(err);
            return err;
        }
    }

    static async getAllRecipes() {
        try {
            const response = await db.any(`SELECT * FROM recipe`);
            return response;
        }catch(err) {
            console.error(err);
            return err;
        }
    }

    static async getUniqueCategories() {
        try {
            const response = await db.any(`SELECT DISTINCT category, id FROM recipe`);
            return response;
        }catch(err) {
            console.error(err);
            return err;
        }
    }
    
    async addRecipe() {
        try{
            const recipe = await db.one(`INSERT INTO recipe (name, category, ingredientid, ingredientamount, ingredientmeasurement, instructions, userid)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`, [this.name, this.category, this.ingredientId, this.ingredientAmount, this.ingredientMeasurement, this.instructions, 1]);
        }catch (error) {
            console.error("Error: ", error);
        }
    };
}

module.exports = RecipeDB;