const express = require("express");
const dateRouter = express.Router();

dateRouter.get("/:date", (req, res) => {
  const query = req.params.date;

  const queryIsUnixTime = /^\d+$/.test(query);
  const date = new Date(query);

  if (queryIsUnixTime) {
    res.json({ unix: Number(query), utc: new Date(query * 1).toUTCString() });
  } else if (date != "Invalid Date") {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  } else {
    res.json({ error: "Invalid Date" });
  }
});

module.exports = dateRouter;
