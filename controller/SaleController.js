const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const salesRanking = (req, res) => {
  let sql = `SELECT id, title, book_sales
             FROM books LEFT
             JOIN sales ON books.id = sales.book_id
             where book_sales is not Null
             Order by book_sales desc`;
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    results.map(function (result) {
      result.bookSales = result.book_sales;
      delete result.book_sales;
    });
    return res.status(StatusCodes.OK).json(results);
  });
};

const bestSellerByCategory = (req, res) => {
  const { category } = req.params;
  let sql = `SELECT id, title, book_sales
             FROM books LEFT
             JOIN sales ON books.id = sales.book_id
             where category_id = ?
             Order by book_sales desc
             limit 1;`;
  conn.query(sql, category, (err, results) => {
    if (err) {
      console.log(err);
      console.log(sql);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    results.map(function (result) {
      result.bookSales = result.book_sales;
      delete result.book_sales;
    });
    return res.status(StatusCodes.OK).json(results);
  });
};

module.exports = {
  salesRanking,
  bestSellerByCategory,
};
