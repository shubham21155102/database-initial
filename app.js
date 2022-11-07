const Register=require("./models/resisters");
require('./db/conn');
const express = require('express')
const path=require("path");
const {json}=require("express");
const bodyParser=require("body-parser");
// connectToMongo();
const ejs=require("ejs");
const app = express();
const port = 5000
const static_path=path.join(__dirname,"./public");
const template_path=path.join(__dirname,"../templates/views");
app.use(express.static(static_path));
app.set("view engine","ejs");
// app.set("views",template_path);
app.use(express.json())

app.use(express.urlencoded({extended:false}));
app.get("/",function(req,res){
    // res.send("Hello BellaCiao");
    res.render("index");
})
app.get("/resister",function(req,res){
    // res.send("Hello BellaCiao");
    res.render("register");
});

app.post("/resister",async (req,res)=>{
    // res.send("Hello BellaCiao");
    // res.render("register");
    try{
const pass=req.body.password;
const cpass=req.body.confirmpassword;
if(pass===cpass){
    const registerEmployee=new Register({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        // phone:req.body.phone,
        gender:req.body.gender,
        // age:req.body.age,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        // question:req.body.question,
        // answer:req.body.answer



    });
    const registered=await registerEmployee.save();
    
     res.status(201).render("index");
    
}
else{
    res.send("Password match nahin kar raha hai"); 
}
    } catch(error){
        res.status(400).send(error);
    }
})
// middleware

app.get("/login",function(req,res){
    // res.send("Hello BellaCiao");
    res.render("login");
});
// Available routes
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})