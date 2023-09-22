const mongoose=require('mongoose');
//Item Schema-:
const itemSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
//Making the model
const Item=mongoose.model('Item',itemSchema);
//Exporting the item
module.exports=Item;