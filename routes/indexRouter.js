const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);
indexRouter.get("/new", indexController.getMessageForm);
indexRouter.post("/new", indexController.sendMessage);
indexRouter.get("/message/:id", indexController.showMessage);

module.exports = indexRouter;
