const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const allCategory = (req, res) => {
  let sql = `SELECT * FROM category`;
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    results.map(function (results) {
      results.categoryId = results.category_id;
      results.categoryName = results.category_name;
      delete results.category_id;
      delete results.category_name;
    });
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = { allCategory };
