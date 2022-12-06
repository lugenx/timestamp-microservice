const express = require("express");
const dateRouter = express.Router();

dateRouter.get("/:date", (req, res) => {
  const query = req.params.date;

  const queryIsDashedDate =
    /^(\d{4,5}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$/gm.test(query);

  const queryIsUnixTime = /^\d+$/.test(query);

  if (queryIsDashedDate) {
    const date = new Date(query);
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  } else if (queryIsUnixTime) {
    const date = new Date(query * 1).toLocaleDateString();
    res.json({ unix: Number(query), utc: new Date(date).toUTCString() });
  } else {
    res.json({ error: "Invalid Date" });
  }
});

module.exports = dateRouter;
