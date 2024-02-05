const mariadb = require("mysql2");

const dotenv = require("dotenv");
dotenv.config();

const connection = mariadb.createConnection({
  host: "localhost",
  user: "root",
  password: "geun99",
  database: "Bookshop",
  dateStrings: true,
});

module.exports = connection;
