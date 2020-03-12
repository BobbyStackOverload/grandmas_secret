const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY:', e.query);
    }
});
const options = {
    host: 'drona.db.elephantsql.com',
    database: 'vltcdbuj',
    user: 'vltcdbuj',
    password: 'Ked7kyvC1cy9P7CP5Pr3cheqjSvOWxMC'
};
const db = pgp(options);
module.exports = db;