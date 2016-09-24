const knex = require('knex')({
  client: 'pg',
  connection: {
    socketPath: '/tmp/.s.PGSQL.5432',
    database: 'postgres'
  },
  pool: {
    min: 1,
    max: 1000
  }
});

knex.schema.hasTable('items').then((result) => {
  if (!result) {
    return knex.schema.createTable('items', (table) => {
      table.increments();
      table.timestamp('created_at', 'utc').defaultTo(knex.fn.now());
      table.timestamp('updated_at', 'utc').defaultTo(knex.fn.now());
      table.string('category');
      table.string('title');
      table.text('description');
      table.decimal('price');
      table.string('location');
      table.json('images');
      console.log('Table "items" created');
    });
  }
  console.log('Table "items" already exists');
  return 0;
});

knex.schema.hasTable('users').then((result) => {
  if (!result) {
    return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').unique();
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
      table.string('buyer');
      table.string('seller');
      table.string('order_status').defaultTo('In progress');
      table.text('tracking');
      table.foreign('item_id').references('app.items.id');
      console.log('Table "transactions" created');
    });
  }
  console.log('Table "transactions" already exists');
  return 0;
});

module.exports = knex;
