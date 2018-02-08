var express = require("express");
var router = express.Router();

// Get list of friends from DB
router.get("/friends", function (req, res) {
  res.send({ type: 'GET' })
});

//add a new friend to DB
router.post("/friends", function (req, res) {
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    rank: req.body.friendliness
  })
});

// Update a friend in the db
router.put("/friends/:id", function (req, res) {
  res.send({ type: 'PUT' })
});

//delete a friend in the db
router.delete("/friends/:id", function (req, res) {
  res.send({ type: 'DELETE' })
});

module.exports = router;