const db = require('./conn');

class SubcommentDB {
    constructor(id, subcomment, userId, commentId) {
        this.id = id;
        this.subcomment = subcomment;
        this.userId = userId;
        this.commentId = commentId;
    }

    static async getAllSubcomments(comment) {
        let count = 0;
        // console.log(comment);
        comment.forEach(async element => {
            if(element.hassubs === true) {
                try {
                    const response = await db.any(`SELECT * FROM subcomment WHERE commentid = ${comment[count].id}`);
                    count += 1;
                    console.log(response);
                    
                } catch (error) {
                    console.error(error);
                    return error; 
                }
                return response; 
            }
        });
        
        
    }

}

module.exports = SubcommentDB;