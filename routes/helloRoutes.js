const express = require("express");
const helloRouter = express.Router();

helloRouter.get("/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

module.exports = helloRouter;
