//Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080

// Join public files
app.use(express.static(__dirname + "app/public"));

// Pull in necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//App Routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function () {
  console.log("app running");
})
