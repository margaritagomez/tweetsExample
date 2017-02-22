var express = require('express');
var router = express.Router();

var tweets = require('../tweets.json');

/* GET tweets */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.json(tweets);
});

module.exports = router;
