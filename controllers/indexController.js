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
};
