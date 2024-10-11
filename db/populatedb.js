#! /usr/bin/env node

const pool = require("./pool");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES 
('Tony', 'This is a test message'),
('Aretha', 'Another example message'),
('Stevie88', 'Random thoughts for today'),
('Herbie', 'Here is yet another test message'),
('SSSharon', 'This is a placeholder message');

UPDATE messages
SET added = NOW() - INTERVAL '1 day' * FLOOR(RANDOM() * 30)
WHERE username IN ('Tony', 'Aretha', 'Stevie88', 'Herbie', 'SSSharon');
`;

async function main() {
  console.log("seeding...");
  const client = await pool.connect();
  try {
    console.log("connected...");
    await client.query(SQL);
    console.log("query executed...");
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    client.release();
    console.log("client released");
  }
  console.log("done");
}

main().catch((err) => console.error("Error in main:", err));
