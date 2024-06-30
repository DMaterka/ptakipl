var express = require('express');
var birdspecies = require("../src/services/birdspecies.service.js");
var birdlist = require("../src/services/birdlist.service.js");

birdlist.load()
    .then(response => {
      console.log("getting birdlist", response.data);
    })
    .catch(error => {
      console.error("getting birdlist error", error);
    });

birdspecies.load(['houspa', 'eutspa'])
    .then(response => {
      console.log("getting species ", response.data);
    })
    .catch(error => {
      console.error("getting species error", error);
    });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET list of birds. */
router.get('/bird-list', (req, res) => {
  res.status(200).json(birdspecies);
});

module.exports = router;
