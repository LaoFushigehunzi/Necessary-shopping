const express = require("express");
const mysql = require("promise-mysql");
const router = express.Router();
let pool;
(async () => {
  pool = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
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
    next(error.message);
  }
});
router.post("/api/drawer", async (req, res, next) => {
  let id = req.body.id;
  let data = await pool.query(
    `select size , color from arr_one where one_id=${id}`
  );
  data = JSON.parse(JSON.stringify(data))[0];
  data.color = (data.color || "").split(",");
  data.size = (data.size || "").split(",");
  res.json({
    code: 200,
    data: data,
    message: "请求成功",
  });
});

router.post("/api/index/one_id", async (req, res, next) => {
  try {
    let id = req.body.id;
    let result = await pool.query(`SELECT DISTINCT three.*
    FROM arr_two two,arr_three three
    WHERE two.two_id=three.two_id AND two.one_id=${id}
    `);
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error.message);
  }
});
router.post("/api/component/one_id", async (req, res, next) => {
  try {
    let id = req.body.id;
    let result = await pool.query(`SELECT
    goods.* 
  FROM
    arr_two two,
    arr_three three,
    goods 
  WHERE
    two.two_id = three.two_id 
    AND three.three_id = goods.three_id 
    AND two.one_id = ${id} 
  GROUP BY
    goods.NAME
    `);
    res.json({
      code: 200,
      message: "请求成功",
      data: result,
    });
  } catch (error) {
    next(error.message);
  }
});
router.post("/api/component/selected", async (req, res, next) => {
  async function select(arr, name, data) {
    let result = [];
    for (let j = 0; j < arr.length; j++) {
      data = data.filter((item) => item[name].includes(arr[j]));
    }
    return data;
  }
  try {
    let data2 = req.body.goods;
    let { color, size } = req.body.selected;
    color = color.map((item) => item.replace("色", ""));
    if (color != "" && size != "") {
      data2 = select(color, "color", data2);
      data2 = select(size, "size", data2);
    } else {
      let arr = color == "" ? size : color;
      let name = color == "" ? "size" : "color";
      data2 = await select(arr, name, data2);
    }
    res.json({
      code: 200,
      message: "请求成功",
      data: data2,
    });
  } catch (error) {
    next(error.message);
  }
});
router.get("/*", async (req, res, next) => {
  res.json({
    code: 400,
    message: "错误请求，请检查请求地址是否错误",
  });
});
module.exports = router;
