const options = {
    host: 'drona.db.elephantsql.com',
    user: 'vltcdbuj',
    password: 'Ked7kyvC1cy9P7CP5Pr3cheqjSvOWxMC',
    database: 'vltcdbuj'
}

const pgp = require('pg-promise')({
    query: function(e){
        console.log('query: ', e.query);
    }
})

const db = pgp(options);

module.exports = db;