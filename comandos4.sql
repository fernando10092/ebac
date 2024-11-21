-- creating table 
create table "index".test_indexing(id serial, name text);

-- insert data into table
insert into "index".test_indexing(name) select 'bob' from generate_series(1,250000);

insert into "index".test_indexing(name) select 'alice' from generate_series(1,250000);

-- check the result before index
explain analyze
select * from "index".test_indexing where id = 2;

-- create index
create index test_idx_ebac on "index".test_indexing(id);

-- check the result after index
explain analyze select * from "index".test_indexing where id = 2;


---CHECAR INDEX E REMOVER
SELECT schemaname, tablename, indexname
FROM pg_indexes
WHERE indexname = 'test_idx_ebac';
DROP INDEX IF EXISTS "index".test_idx_ebac;


---------------------------------------------------------------------------------------------------------

CREATE SCHEMA index;

CREATE TABLE "index".customer (id SERIAL PRIMARY KEY NOT NULL, name varchar(30) NOT NULL, 
email varchar(30) NOT NULL, cpf varchar(30) NOT NULL);

INSERT INTO "index".customer (name, email, cpf) SELECT 'BOB','bob@gmail.com','666.666.666.66' 
FROM generate_series(1,250000);

INSERT INTO "index".customer (name, email, cpf) SELECT 'ALICE','alice@gmail.com',
'777.777.777.77' FROM generate_series(1,250000);

--VERIFICAR OS INDEX ATIVOS E APAGAR PARA TESTE
SELECT schemaname, tablename, indexname
FROM pg_indexes
WHERE indexname = 'customer_name_index';
DROP INDEX IF EXISTS "index".customer_name_index;

--ANALISE INICIAL
EXPLAIN ANALYZE SELECT * FROM "index".customer WHERE name = 'ALICE';
--CRIANDO INDEX
CREATE INDEX customer_name_index ON "index".customer(name);
--ANALISE FINAL
EXPLAIN ANALYZE SELECT * FROM "index".customer WHERE name = 'ALICE';


