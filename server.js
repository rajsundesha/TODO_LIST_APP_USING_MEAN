var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var tasks = require("./routes/tasks");
var cors = require("cors");

var port = 3000;

var app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api", tasks);

app.listen(port, function() {
  console.log("Server started on port" + port);
});
