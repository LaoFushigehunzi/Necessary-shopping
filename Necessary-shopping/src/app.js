const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.use(function (err, req, res, next) {
  res.status(500).send("服务器出现错误：", err.message);
});
app.listen(5050, () => {
  console.log("5050端口已启用");
});
