var express = require('express');
var router = express.Router();

var request = require('request');

var url = 'http://localhost:3000/getjson';

var array;
router.get('/', function(req, res, next) {

  request(url, function (error, response, body){
    if (!error && response.statusCode==200){
       array = JSON.parse(body);
    }else{
      return res.sendStatus(500);
    }
  });
  res.render('index', { tweets: array });
});

module.exports = router;
