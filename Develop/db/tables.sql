USE ecommerce_db;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS ProductTag;

USE ecommerce_db;

CREATE TABLE Category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(30) NOT NULL
);

USE ecommerce_db;

CREATE TABLE Product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    CHECK (price REGEXP '^-?[0-9]+(\.[0-9]+)?$'),
    stock INT NOT NULL DEFAULT 10,
    CONSTRAINT check_stock_is_numeric CHECK (stock >= 0),
    category_id INT
    -- FOREIGN KEY (category_id) REFERENCES Category(id)
);

USE ecommerce_db;

CREATE TABLE Tag (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(30)
);

USE ecommerce_db;

CREATE TABLE ProductTag (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    -- FOREIGN KEY (product_id) REFERENCES Product(id),
    tag_id INT
    -- FOREIGN KEY (tag_id) REFERENCES Tag(id)
);
