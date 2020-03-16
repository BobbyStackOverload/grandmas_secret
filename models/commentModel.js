const db = require('./conn');

class CommentDB {
    constructor(id, comment, userId, recipeId) {
        this.id = id;
        this.comment = comment;
        this.userId = userId;
        this.recipeId = recipeId;
    }

    static async getAllComments(recipeId) {
        try {
           const response = await db.any(`SELECT * FROM comment WHERE recipeId = ${recipeId}`);
           const subs = await db.any(`SELECT * FROM subcomment`)
           return [response,subs]; 
        } catch (error) {
           console.error(error);
           return error; 
        }
    }

    static async getUserComments(userId) {
        try {
            const response = await db.any(`SELECT * FROM comment WHERE userId = ${userId}`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    static async getAllSubcomments(commentList) {
        const subs = [];
        let count = 0;
        while (count < commentList.length) {
            try {
                const response = await db.any(`SELECT * FROM subcomment WHERE commentid = ${commentList[count].id}`);
                subs.push(response);
                count+=1;
            } catch (error) {
                console.error(error);
                return error;
            }
        }
        return subs;
        
    }
}

module.exports = CommentDB;