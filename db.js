const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'test123',
      database : 'smart-brain'
    }
});

module.exports = { db };
