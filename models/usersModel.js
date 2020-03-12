const db = require('./conn');
const bcrypt = require('bcryptjs');

class User{
    constructor (id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name= first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
    checkPassword(hashedPassword) {
       return bcrypt.compareSync(this.password, hashedPassword);
    }

    async addUser() {
        try {
            const response = await db.one(`INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING id;`, [this.first_name, this.last_name, this.email, this.password]
            );
            return response;
        }catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    async loginUser() {
        console.log('logging in user', this);
        try {
            const response = await db.one(`SELECT id, user_name, password FROM users WHERE email = $1;`, [this.email]
            );
            console.log('response', response);
            const isValid = this.checkPassword(response.password);
            // const isValid = bcrypt.compareSync(this.password, response.password);
            if (!!isValid) {
                const { id, first_name, last_name } = response
                return { isValid, user_id: id, first_name, last_name };
                console.log('SUCCESS!!!!!', isValid);
            }else {
                return { isValid };
                console.log('GO AWAYYYYY', isValid);
            }
            
        }   catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = User;