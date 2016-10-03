CREATE TABLE images (
       item_id integer,
       pic_id integer,
       url varchar(200),
       constraint pk_image primary key (item_id, pic_id)
);
