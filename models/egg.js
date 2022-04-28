const mongoose = require("mongoose") 
const eggSchema = mongoose.Schema({ 
 egg_Itemname: {
    type:String,
    required:true
},
 egg_Quantity: Number, 
 egg_price: {
    type:Number,
    min:2,
    max:4444
}
}) 
module.exports = mongoose.model("egg", eggSchema)