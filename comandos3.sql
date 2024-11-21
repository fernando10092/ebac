CREATE SCHEMA class;

CREATE TABLE "class".product (
	product_id serial NOT NULL,
	"name" varchar(25) NOT NULL,
	created_date timestamp NOT NULL DEFAULT now(),
	CONSTRAINT product_pkey PRIMARY KEY (product_id)
);

CREATE TABLE "class".stock (
	id serial NOT NULL,
	product_id int4 NOT NULL,
	quantity int4 NOT NULL,
	CONSTRAINT stock_pkey PRIMARY KEY (id)
);

insert into "class".product (name) values ('celular');
insert into "class".product (name) values ('livro');
insert into "class".product (name) values ('tablet');
insert into "class".product (name) values ('notebook');
insert into "class".product (name) values ('roteador');


insert into "class".stock (product_id, quantity) values (1, 5);
insert into "class".stock (product_id, quantity) values (2, 3);
insert into "class".stock (product_id, quantity) values (3, 0);
insert into "class".stock (product_id, quantity) values (4, 1);
insert into "class".stock (product_id, quantity) values (5, 0);

-- Dica 1 há um erro de sintaxe (lembre que o Group By precisa estar com a mesma quantidade de colunas do SELECT)
-- Dica 2 ordene pela quantidade decrescente de produtos

SELECT
	product.name product_name,
	SUM(quantity) product_stock
FROM
	"class".product
INNER JOIN "class".stock USING (product_id)    	
GROUP BY
	product_name
ORDER BY product_stock DESC;

-- campo para somar a quantidade de itens no stock
SELECT 
	SUM(quantity)
FROM "class".stock;
