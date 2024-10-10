const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);
indexRouter.get("/new", indexController.getMessageForm);
indexRouter.post("/new", indexController.sendMessage);

module.exports = indexRouter;
