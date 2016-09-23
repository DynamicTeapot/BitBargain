create table app.transactions (
id serial primary key,
created_at timestamp with time zone default (now() at time zone 'utc'),
item_id integer references items(id),
buyer varchar(20),
seller varchar(20),
order_status text default 'In progress',
tracking text
);