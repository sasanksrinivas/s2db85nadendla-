var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var egg_controller = require('../controllers/egg'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// egg ROUTES /// 
 
// POST request for creating a egg.  
router.post('/egg', egg_controller.egg_create_post); 
 
// DELETE request to delete egg. 
router.delete('/egg/:id', egg_controller.egg_delete); 
 
// PUT request to update egg. 
router.put('/egg/:id', egg_controller.egg_update_put); 
 
// GET request for one egg. 
router.get('/egg/:id', egg_controller.egg_detail); 
 
// GET request for list of all egg items. 
router.get('/egg', egg_controller.egg_list); 
 
module.exports = router; 