CREATE DATABASE medingen;

USE medingen;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    salt_content VARCHAR(100),
    description TEXT,
    review TEXT
);

INSERT INTO product (name, salt_content, description, review) VALUES
('Product A', 'Low', 'Healthy option', 'Great!'),
('Product B', 'High', 'Tastes good', 'Too salty for me.');
