const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1', 
      user: 'macbookair', 
      password: '', 
      database: 'powerbrokers'
    }
  });

const insert = function(username, lat, lng, price) {
	knex('vendors').insert({username, lat, lng, price}).then(()=> console.log(`${username} at ${lat},${lng} added to vendors at $${price}`)).catch((error)=> console.error(error));
}

const getAllVendors = function(username) {
  return knex('vendors').select();
}

module.exports = {
  knex: knex,
  insert: insert,
  getAllVendors : getAllVendors,
};

