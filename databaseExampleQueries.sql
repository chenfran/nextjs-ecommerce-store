-- This file is only my notes, changing this file doesn't change anything in the database

-- Create products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(100) NOT NULL,
  price integer
);

INSERT INTO products
(name, price)
VALUES
('Chicken', 10),
('Bonbon', 10),
('Panda', 10),
('Dino', 10),
('Parrot', 10),
('Strawberry', 10);


-- Read some products (R in CRUD - Read)
SELECT * FROM products;

CREATE DATABASE nextjs_ecommerce_store;
CREATE USER nextjs_ecommerce_store WITH ENCRYPTED PASSWORD 'nextjs_ecommerce_store';
GRANT ALL PRIVILEGES ON DATABASE nextjs_ecommerce_store TO nextjs_ecommerce_store;
\connect nextjs_ecommerce_store;
CREATE SCHEMA nextjs_ecommerce_store AUTHORIZATION nextjs_ecommerce_store;
