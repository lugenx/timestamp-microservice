const express = require("express");
const currentTimeRouter = express.Router();

currentTimeRouter.get("/", (req, res) => {
  res.json({ unix: Date.now(), utc: new Date().toUTCString() });
});

module.exports = currentTimeRouter;
