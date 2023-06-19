const express =require('express')
const router =express.Router()

// required for 
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const messages = [
    {
      text: "Hallo Welt!",
      user: "Marian",
      added: new Date(),
      nr:1
    }
 ];



router.get("/",function(req,res){
    res.render('index', { title: "Basic Messageboard", messages: messages })
});

router.get("/new",function(req,res,next){
    res.render('form')
});


router.post("/new",(req,res)=>{
    messages.push({text: req.body.message, user: req.body.name, added: new Date()});
    res.redirect('/')
})


module.exports=router;