CREATE DATABASE IF NOT EXISTS medingen;
USE medingen;

CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

CREATE TABLE salts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    name VARCHAR(255),
    dosage VARCHAR(50)
);

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    rating FLOAT,
    comment TEXT
);

CREATE TABLE alternatives (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    name VARCHAR(255),
    price DECIMAL(10,2)
);

INSERT INTO products VALUES (1, 'UDILIV 300MG TABLET 15\'S', 'UDILIV (UDCA) is a bile acid...');

INSERT INTO salts (product_id, name, dosage) VALUES
(1, 'Ursodeoxycholic acid', '300mg');

INSERT INTO reviews (product_id, rating, comment) VALUES
(1, 4.0, 'the medicine is good it is bit costly...'),
(1, 3.0, 'bit costly but works well'),
(1, 5.0, 'excellent tablet');

INSERT INTO alternatives (product_id, name, price) VALUES
(1, 'DOLWIN PLUS TAB', 34.00),
(1, 'DOLWIN ADVANCE TAB', 30.00);
