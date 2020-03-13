<<<<<<< HEAD
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
=======
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

>>>>>>> 150111a3dfacc5611e98e399fb4b4c8c8de747ae
module.exports = db;