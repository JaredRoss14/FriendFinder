var express = require("express");

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(__dirname + "/app/public"));

// Routes

app.get("/", function (req, res) {
  res.sendfile("app/public/home.html")
})

app.listen(PORT, function () {
  console.log("app running");
})