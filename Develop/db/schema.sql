-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLE Category {
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(30) NOT NULL
-- },

-- CREATE TABLE Product {
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(30) NOT NULL,
--     price DEC(3,2) NOT NULL,
--     stock INT NOT NULL DEFAULT 10,
--     FOREIGN KEY (category_id) REFERENCES Category(id),
--     CHECK (price = DEC AND stock = INT)
-- },

-- CREATE TABLE Tag {
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR(30)
-- },

-- CREATE TABLE ProductTag {
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     FOREIGN KEY (product_id) REFERENCES Product(id),
--     FOREIGN KEY (tag_id) REFERENCES Tag(id)
-- },



