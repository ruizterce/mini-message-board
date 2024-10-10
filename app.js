const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () =>
  console.log(`Mini message board app - listening on port ${PORT}`)
);
