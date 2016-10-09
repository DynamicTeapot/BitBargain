require('../env');
// const data = require('./data.json');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '', // replace host if remote
    user: process.env.DB_USER || '', // enter DB user/role
    password: process.env.DB_PASS || '', // enter password
    database: 'postgres' // default DB is postgres
  },
  pool: {
    min: 1,
    max: 500
  }
});

knex.schema.hasTable('items').then((result) => {
  if (!result) {
    return knex.schema.createTable('items', (table) => {
      table.increments();
      table.timestamp('created_at', 'utc').defaultTo(knex.fn.now());
      table.timestamp('updated_at', 'utc').defaultTo(knex.fn.now());
      table.string('title');
      table.text('description');
      table.string('category'); // change to json
      table.string('price');
      table.boolean('sold').defaultTo(false);
      table.string('location');
      table.json('images').nullable();
      console.log('Table "items" created');
    });
  }
  console.log('Table "items" already exists');
  return 0;
}).then(() => {
  // populate items table with test data
  // knex('items').insert(data.items, 'id')
  // .catch(err => console.log(`Error populating "items" table ${err}`));
});

knex.schema.hasTable('users').then((result) => {
  if (!result) {
    return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').unique();
      table.string('email').unique();
      table.string('password'); // add encryption maybe...
      table.string('coinbase_id');
      table.string('square_id');
      table.text('wallet_address');
      console.log('Table "users" created');
    });
  }
  console.log('Table "users" already exists');
  return 0;
});

knex.schema.hasTable('transactions').then((result) => {
  if (!result) {
    return knex.schema.createTable('transactions', (table) => {
      table.increments();
      table.timestamp('created_at', 'utc').defaultTo(knex.fn.now());
      table.integer('item_id');
      table.integer('buyer_id'); // TODO: index
      table.integer('seller_id'); // TODO: index
      table.string('order_status').defaultTo('in progress');
      table.text('tracking');
      table.foreign('item_id').references('items.id');
      table.foreign('buyer_id').references('users.id');
      table.foreign('seller_id').references('users.id');
      console.log('Table "transactions" created');
    });
  }
  console.log('Table "transactions" already exists');
  return 0;
});

knex.schema.hasTable('images').then((result) => {
  if (!result) {
    return knex.schema.createTable('images', (table) => {
      table.integer('item_id');
      table.integer('pic_id');
      table.string('url');
      console.log('Images table created');
    });
  }
  console.log('Table "images" already exist');
  return 0;
});

knex.schema.hasTable('track_user').then((result) => {
  if (!result) {
    return knex.schema.createTable('track_user', (table) => {
      table.integer('uid');
      table.increments('selected');
      table.integer('iid');
      console.log('User tracking table created');
    });
  }
  console.log('Table "track_user" already exist');
  return 0;
});

module.exports = knex;
