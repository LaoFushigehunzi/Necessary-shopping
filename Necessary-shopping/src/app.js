const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(5050, () => {
  console.log("8000端口已启用");
});
