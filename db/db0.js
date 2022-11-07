import { MongoClient } from "mongodb";
module.exports =
{
    connectToDB :()=>{
        MongoClient.connect('mongodb://localhost:27017/bookstore')
    },
    getDB:()=>{}
}
// const MongoClient = require("mongodb").MongoClient;
// const assert=require("assert");

// // Connection URI
// const uri =
//   'mongodb://localhost:27017';
// const dbName='Shubham';

// // const uri =
//   // "mongodb+srv://shubham5130:shubham@cluster0.wx6zfvx.mongodb.net/?retryWrites=true&w=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri,{useNewUrlParser: true});
// client.connect(function(err){
//   assert.equal(null,err);
//   console.log("Connected Success Fully to the server");
//   const db=client.db(dbName);
//   client.close();
// });

// // async function run() {
// //   try {
// //     // Connect the client to the server (optional starting in v4.7)
// //     await client.connect();

// //     // Establish and verify connection
// //     await client.db("admin").command({ ping: 1 });
// //     console.log("Connected successfully to server");
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// // }
// // run().catch(console.dir);