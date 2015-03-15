var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'kango',
    password: 'password',
    database: 'kangodb',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/kango.sqlite')
  }
});

var Bookshelf = require('bookshelf')(knex);

knex.schema.hasTable('animals').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('animals', function (animal) {
      animal.increments('id').primary();
      animal.string('shelter_id', 255);
      animal.string('name', 255);
      animal.blob('image');
      animal.string('species', 100);
      animal.string('breed', 255);
      animal.integer('age');
      animal.string('color', 255);
      animal.string('Bio');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('animals_users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('animals_users', function (animal_user) {
      animal_user.integer('animal_id').primary();
      animal_user.integer('user_id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('shelters').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('shelters', function (shelter) {
      shelter.increments('id').primary();
      shelter.string('name', 150);
      shelter.blob('image');
      shelter.string('address_1', 150);
      shelter.string('address_2', 150);
      shelter.string('city', 150);
      shelter.string('state', 2);
      shelter.integer('zip', 5);
      shelter.integer('telephone', 12);
      shelter.string('email', 150);
      shelter.string('bio');
      shelter.integer('goal', 10);
      shelter.integer('raised', 10);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('shelters_users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('shelters_users', function (shelter_user) {
      shelter_user.integer('shelter_id', 10).primary();
      shelter_user.integer('user_id', 10);
      shelter_user.integer('donation', 10);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 150);
      user.string('password', 150);
      user.blob('image');
      user.string('twitter_id', 150);
      user.string('twitter_token', 150);
      user.string('twitter_displayname', 150);
      user.string('twitter_handle', 150);
      user.string('firstname', 150);
      user.string('surname', 150);
      user.string('email', 150);
      user.string('address_1', 150);
      user.string('address_2', 150);
      user.string('city', 150);
      user.string('state', 2);
      user.integer('zip', 5);
      user.integer('telephone', 12);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = knex;