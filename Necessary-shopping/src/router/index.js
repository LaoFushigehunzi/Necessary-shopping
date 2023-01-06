const express = require("express");
const mysql = require("promise-mysql");
const router = express.Router();
let pool;
(async () => {
  pool = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "我们的小小商",
  });
})();
router.get("/api/one", async (req, res, next) => {
  try {
    let result = await pool.query("select * from arr_one");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/two", async (req, res, next) => {
  try {
    let result = await pool.query("select * from arr_two");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/three", async (req, res, next) => {
  try {
    let result = await pool.query("select * from arr_three");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/goods", async (req, res, next) => {
  try {
    let result = await pool.query("select * from goods");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/cart", async (req, res, next) => {
  try {
    let result = await pool.query("select * from cart");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/order_all", async (req, res, next) => {
  try {
    let result = await pool.query("select * from order_all");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/user", async (req, res, next) => {
  try {
    let result = await pool.query("select * from user");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/api/hot_key_name", async (req, res, next) => {
  try {
    let result = await pool.query("select * from hot_key_name");
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});
router.get("/*", async (req, res, next) => {
  res.json({
    code: 400,
    message: "错误请求，请检查请求地址是否错误",
  });
});
module.exports = router;
