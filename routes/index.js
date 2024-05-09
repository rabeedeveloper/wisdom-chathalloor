var express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wisdom Chathalloor' ,
    hti:"Wisdom Chathalloor"
  } );
});

module.exports = router;