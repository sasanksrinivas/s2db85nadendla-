var express = require('express');
const egg_controlers = require('../controllers/egg');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }



/* GET costumes */
router.get('/', egg_controlers.egg_view_all_Page );

// GET request for one egg. 
router.get('/egg/:id', egg_controlers.egg_detail); 

/* GET detail egg page */ 
router.get('/detail', egg_controlers.egg_view_one_Page); 

/* GET create egg page */ 
router.get('/create',secured, egg_controlers.egg_create_Page); 

/* GET create update page */ 
router.get('/update',secured, egg_controlers.egg_update_Page); 

/* GET delete egg page */ 
router.get('/delete',secured, egg_controlers.egg_delete_Page); 
 
 

module.exports = router;