var express = require("express");
var routes = require("./app/routing/apiRoutes");
var bodyParser = require("body-parser");

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080


app.use(bodyParser.json());
app.use("/api", routes);


app.listen(PORT, function () {
  console.log("app running");
})

// app.use(express.static(__dirname + "/app/public"));

// Routes

// app.get("/", function (req, res) {
//   res.sendfile("app/public/home.html")
// })