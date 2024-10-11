const db = require("../db/queries");

module.exports = {
  get: async function (req, res) {
    try {
      const messages = await db.getAllMessages();
      res.render("index", { title: "Mini Messageboard", messages: messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  getMessageForm: (req, res) => {
    res.render("form");
  },

  sendMessage: async function (req, res) {
    const newMessage = {
      text: req.body.message,
      username: req.body.author,
      added: new Date(),
    };
    try {
      await db.saveMessage(newMessage);
      res.redirect("/");
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).send("Internal Server Error");
    }
  },

  showMessage: async (req, res) => {
    try {
      const messageId = parseInt(req.params.id, 10);
      const message = await db.getMessageById(messageId);

      if (!message) {
        return res.status(404).send("Message not found");
      }

      res.render("message", { id: messageId, message });
    } catch (error) {
      console.error("Error fetching message:", error);
      res.status(500).send("Internal Server Error");
    }
  },
};
