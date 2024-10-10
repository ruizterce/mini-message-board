const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = {
  get: (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
  },
  getMessageForm: (req, res) => {
    res.render("form");
  },
  sendMessage: (req, res) => {
    messages.push({
      text: req.body.message,
      user: req.body.author,
      added: new Date(),
    });
    res.redirect("/");
  },
  showMessage: (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    // Check if messageId is out of bounds
    if (isNaN(messageId) || messageId < 0 || messageId >= messages.length) {
      return res.status(404).send("Message not found");
    }
    res.render("message", { id: messageId, message: messages[messageId] });
  },
};
