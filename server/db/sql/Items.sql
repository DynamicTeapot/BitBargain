create table app.items (
id serial primary key,
posted_at timestamp with time zone default (now() at time zone 'utc'),
updated_at timestamp with time zone default (now() at time zone 'utc'),
category varchar(20),
title varchar(20),
description text,
price decimal,
location text, 
images json 
);
