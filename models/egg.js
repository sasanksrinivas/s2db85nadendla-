const mongoose = require("mongoose") 
const eggSchema = mongoose.Schema({ 
 egg_type: String, 
 Quantity: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("egg", 
eggSchema)