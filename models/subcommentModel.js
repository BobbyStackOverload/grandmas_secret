const db = require('./conn');
class SubcommentModel {
    constructor(id, userid, subcomment , commentId, recipeId){
        this.id = id;
        this.userid = userid;
        this.subcomment = subcomment;
        this.commentId = commentId;
        this.recipeId = recipeId;
    }
static async getAllSubcomments() {
        try {
            const response = await db.any(`SELECT * FROM recipe;`);
            console.log(response)
            return response;
        } catch(error) {
            console.error('Error: ', error);
            return error;
        }
    }
static async getSubcommentsById(id) {
    try {
        const response = await db.any(`SELECT * FROM recipe WHERE ID = ${id};`);
        console.log(response);
        return response;
    } catch(error) {
        console.error('Error: ', error);
        return error;
    }
}
static async listAllSubcomments() {
    try {
        const response = await db.any(`SELECT
        reviews.review
    FROM
        reviews, albums
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
static async addSubcomment(recipe_id, review_title, review_text) {
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
module.exports = SubcommentModel;