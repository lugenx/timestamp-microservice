const express = require("express");
const app = express();

const helloRoutes = require("./routes/helloRoutes.js");
const dateRoutes = require("./routes/dateRoutes.js");
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that API is remotely testable by freeCodeCamp
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api", helloRoutes);
app.use("/api", dateRoutes);

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
