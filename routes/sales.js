const express = require("express");
const router = express.Router();
const {
  salesRanking,
  bestSellerByCategory,
} = require("../controller/SaleController");

router.use(express.json());

router.get("/", salesRanking);
router.get("/:category", bestSellerByCategory);

module.exports = router;
