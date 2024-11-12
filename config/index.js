const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const config = {
  PORT: process.env.PORT,
  DB_SECRET_FIELDS: ["__v", "password"],
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};

module.exports = config;
