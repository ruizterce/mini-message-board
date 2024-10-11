const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (error) {
    console.error("Error retrieving messages:", error);
    throw new Error("Could not retrieve messages. Please try again later.");
  }
}

async function getMessageById(id) {
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      throw new Error(`Message with id ${id} not found.`);
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error retrieving message by ID:", error);
    throw new Error(
      `Could not retrieve message with id ${id}. Please try again later.`
    );
  }
}

async function saveMessage(message) {
  try {
    await pool.query(
      "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
      [message.text, message.username, message.added]
    );
  } catch (error) {
    console.error("Error saving message:", error);
    throw new Error("Could not save message. Please try again later.");
  }
}

module.exports = {
  getAllMessages,
  getMessageById,
  saveMessage,
};
