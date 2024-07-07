var express = require('express');
var birdspecies = require("../src/js/services/birdspecies.service.js");
var birdlist = require("../src/js/services/birdlist.service.js");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    birdlist.load()
        .then(allBirds => {
            // console.log("getting birdlist", allBirds);
            birdspecies.load(allBirds).then(response => {
                // console.log("getting species ", response);
                res.render('index', { birds: response });
            }).catch(error => {
                console.error("getting species error", error);
            });
            // res.status(200).json(allBirds);
        })
        .catch(error => {
            console.error("getting birdlist error", error);
        });

});

/* GET list of birds. */
router.get('/bird-list', (req, res) => {

});

module.exports = router;
