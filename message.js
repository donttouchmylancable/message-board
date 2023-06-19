const mongoose=require("mongoose");

const message=new mongoose.Schema({
    nr:Number,
    text:String,
    user:String,
    added:Date
})

module.exports=mongoose.model("message",message);