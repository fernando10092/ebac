CREATE DATABASE ebac;
\c ebac
CREATE SCHEMA store;
CREATE TABLE "store".customer (id SERIAL PRIMARY KEY NOT NULL, name varchar(30) NOT NULL, email varchar(30) NOT NULL, CPF varchar(30) NOT NULL);
CREATE TABLE "store".stock (id SERIAL PRIMARY KEY NOT NULL, name varchar(30), qtd int NOT NULL);
CREATE TABLE "store".product(id SERIAL PRIMARY KEY NOT NULL, name varchar(30), value int NOT NULL);

INSERT INTO "store".customer(name, email, CPF) VALUES ('Fernando','fernando@fernando.com','123.456.789.10');
INSERT INTO "store".customer(name, email, CPF) VALUES ('Lilian','lilian@lilian.com','428.456.889.10');
INSERT INTO "store".customer(name, email, CPF) VALUES ('Felipe','felipe@felipe.com','550.456.789.10');
INSERT INTO "store".customer(name, email, CPF) VALUES ('Pedro','pedro@pedro.com','555.456.789.10');
INSERT INTO "store".stock(name, qtd) VALUES('Televisão','6');
INSERT INTO "store".stock(name, qtd) VALUES('Geladeira','2');
INSERT INTO "store".stock(name, qtd) VALUES('Microondas','11');
INSERT INTO "store".stock(name, qtd) VALUES('Forno','1');
INSERT INTO "store".product(name, value) VALUES('Radio','120');
INSERT INTO "store".product(name, value) VALUES('Geladeira','10');
INSERT INTO "store".product(name, value) VALUES('Televisão','3');
INSERT INTO "store".product(name, value) VALUES('Forno','6');

SELECT * FROM "store".customer;
SELECT * FROM "store".stock;
SELECT * FROM "store".product;