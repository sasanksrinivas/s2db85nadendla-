var egg = require('../models/egg');

exports.egg_list = async function (req, res) {
    try{
        tegg = await egg.find();
        res.send(tegg);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.egg_create_post = async function (req, res) {
    console.log(req.body)
    let document = new egg();
    document.egg_Itemname = req.body.egg_Itemname;
    document.egg_Quantity = req.body.egg_Quantity;
    document.egg_price = req.body.egg_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle bakery delete form on DELETE.
exports.egg_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await egg.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};




exports.egg_view_all_Page = async function (req, res) {
    try {
        tegg = await egg.find();
        res.render('egg', { title: 'egg Search Results', results: tegg });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);  
    }
};

// for a specific egg.
exports.egg_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await egg.findById( req.params.id)
    res.send(result)
    }catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

//Handle egg update form on PUT.
exports.egg_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await egg.findById( req.params.id)
    // Do updates of properties
    if(req.body.egg_Itemname) 
    toUpdate.egg_Itemname = req.body.egg_Itemname;
    if(req.body.egg_Quantity) toUpdate.egg_Quantity = req.body.egg_Quantity;
    if(req.body.egg_price) toUpdate.egg_price = req.body.egg_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
    }
};

 // Handle a show one view with id specified by query
 exports.egg_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await egg.findById( req.query.id)
        res.render('eggdetail', 
        { title: 'egg Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.egg_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('eggcreate', { title: 'egg Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`); 
    }
};

// Handle building the view for updating a fish.
// query provides the id
exports.egg_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await egg.findById(req.query.id)
        res.render('eggupdate', { title: 'egg Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);        
    }
};

// Handle a delete one view with id from query
exports.egg_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await egg.findById(req.query.id)
        res.render('eggdelete', { title: 'egg Delete', toShow: 
result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};