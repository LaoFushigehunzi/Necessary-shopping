const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});
app.listen(5050, () => {
  console.log("8000端口已启用");
});
