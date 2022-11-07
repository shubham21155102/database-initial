// const mongoose = require('mongoose');
// // const mongoURI = "mongodb+srv://shubham5130:shubham@cluster0.wx6zfvx.mongodb.net/?retryWrites=true&w=majority"
// const mongoURI="mongodb://localhost:27017/databaseeeee"
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to Mongo Successfully")
//     })
// }
// module.exports = connectToMongo;


const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/testNewly",{
    useNewUrlParser: true,
    // useUnifiedToplogy:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("successfull connection");
}).catch((e)=>{
    console.log("no connection")
    console.log(e);
});