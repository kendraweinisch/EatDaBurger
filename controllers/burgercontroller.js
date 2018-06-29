var express = require('express');
// var methodOverride = require('methodOverride');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);

    });

});

router.post('/burgers', function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.burger_type, function(results) {
        console.log(results)
        res.redirect('/burgers')
    })
    });
router.put('/burgers', function(req, res) {
    var id = req.body.id
    console.log(req.body)

    burger.updateOne(id, function(data) {
        console.log(data)
        // res.redirect('/burgers');
        res.json(data)
    });
 });

module.exports = router;