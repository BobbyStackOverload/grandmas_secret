const db = require('./conn');

class IngredientDB {
    constructor(id, name, category) {
             this.id = id;
             this.name = name;
             this.category = category;
             
    }

    static async getAllIngredient() {
        try {
            const response = await db.any(`SELECT * FROM ingredient`);
            return response;
            
        }catch(err) {
            console.error(err);
            return err;
        }
    }

    async addIngredient() {
        try {
            const response = await db.one(`INSERT INTO ingredient (name, category) VALUES ($1, $2) RETURNING id`, [this.name, this.category]);
        } catch (error) {
            console.error(error);
            return error;
        }
    }

}

module.exports = IngredientDB;