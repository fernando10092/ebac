CREATE SCHEMA relacional;
CREATE TABLE "relacional".customer (id int PRIMARY KEY, name varchar(30), email varchar(30), cpf varchar(30));
INSERT INTO "relacional".customer (id, name, email, cpf) VALUES (1, 'Fernando', 'fe@gmail.com','428.222.111.99');
INSERT INTO "relacional".customer (id, name, email, cpf) VALUES (2, 'Lilian', 'li@gmail.com','000.665.111.99');
INSERT INTO "relacional".customer (id, name, email, cpf) VALUES (3, 'Flavio', 'flavio@gmail.com','555.285.141.00');
INSERT INTO "relacional".customer (id, name, email, cpf) VALUES (4, 'Felipe', 'felipe@gmail.com','466.222.181.55');
INSERT INTO "relacional".customer (id, name, email, cpf) VALUES (5, 'Renata', 're@gmail.com','455.552.556.66');

CREATE TABLE "relacional".product (id int PRIMARY KEY, name varchar(30), value money);
INSERT INTO "relacional".product (id, name, value) VALUES (1, 'Aparador', 350);
INSERT INTO "relacional".product (id, name, value) VALUES (2, 'Britadeira', 400);
INSERT INTO "relacional".product (id, name, value) VALUES (3, 'Caneca', 45);
INSERT INTO "relacional".product (id, name, value) VALUES (4, 'Forno', 700);
INSERT INTO "relacional".product (id, name, value) VALUES (5, 'Geladeira', 3500);

CREATE TABLE "relacional".stock (id int, name varchar(30), qtd int, FOREIGN KEY(id) REFERENCES "relacional".product(id));
INSERT INTO "relacional".stock (id, name, qtd) VALUES (1, 'Aparador', 10);
INSERT INTO "relacional".stock (id, name, qtd) VALUES (2, 'Britadeira', 2);
INSERT INTO "relacional".stock (id, name, qtd) VALUES (3, 'Caneca', 30);
INSERT INTO "relacional".stock (id, name, qtd) VALUES (4, 'Forno', 8);
INSERT INTO "relacional".stock (id, name, qtd) VALUES (5, 'Geladeira', 6);

SELECT * FROM "relacional".customer;
SELECT * FROM "relacional".product;
SELECT * FROM "relacional".stock;

SELECT product.name, product.value, qtd FROM "relacional".product INNER JOIN "relacional".stock ON "relacional".product.id = "relacional".stock.id;


