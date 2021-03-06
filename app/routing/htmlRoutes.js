//Pull in required dependencies
var path = require('path');

//Export HTML Routes
module.exports = function (app) {
  //Home
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  //Survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
}