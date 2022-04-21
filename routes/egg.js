var express = require('express');
const egg_controllers= require('../controllers/egg');
var router = express.Router();


/* GET detail costume page */ 
router.get('/detail', egg_controlers.egg_view_one_Page); 

module.exports = router;


