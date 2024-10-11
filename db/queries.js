const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}

async function saveMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [message.text, message.username, message.added]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  saveMessage,
};
