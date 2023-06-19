const express=require('express');
const mongoose=require('mongoose');
const message=require('./message')




const app=express();
app.set('view engine','ejs')
const router=require("./routes/message")

app.use("/",router)



app.listen(3005,()=>{
    console.log("listenening on port 3005")
})
//mongoose.connect("mongodb://localhost:3131/test");

