var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('egg', { title: 'Search Results egg' });
});

module.exports = router;
