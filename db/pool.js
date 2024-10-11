require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
});
