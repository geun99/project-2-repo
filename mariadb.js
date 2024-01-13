const mariadb = require("mysql2");

const dotenv = require("dotenv");
dotenv.config();

const connection = mariadb.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "Bookshop",
  dateStrings: true,
});

module.exports = connection;
