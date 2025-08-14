import duckdb from 'duckdb';

// Создаём базу в памяти
const db = new duckdb.Database(':memory:');
const conn = db.connect();

// Создаём таблицу и вставляем данные
await conn.run(`
  CREATE TABLE users(id INTEGER, name STRING);
  INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Charlie');
`);

// Запрос
const rows = await conn.all(`SELECT * FROM users WHERE id > 1`);
console.log(rows);

conn.close();
