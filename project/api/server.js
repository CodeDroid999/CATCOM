//create ex[ress server
const express = require("express");
const app = express();



//configure db
const dotenv = require("dotenv");
dotenv.config();


const MONGODB_URI = process.env;
console.log(MONGODB_URI);

//database connnection
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://ADMIN:mEvbNxBTN1ks6r8X@catcomdatabase.tnlvvk6.mongodb.net/test').then(console.log('MongoDB connection succesful...')).catch((err)=>console.log(err));

// start server
app.listen("5000", () => console.log(`Express server connection succesful....server started at port : 5000`));

/*
mongoose.connect('mongodb+srv://ADMIN:mEvbNxBTN1ks6r8X@catcomdatabase.tnlvvk6.mongodb.net/test', 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(console.log('MongoDB connection succesful...'));
// start server
app.listen("5000", () => console.log(`Express server connection succesful....server started at port : 5000`));*/


/*

app.use("/", (req, res) => {
    console.log("Express server connection succesful")});
*/