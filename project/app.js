
require('./config/config');
require('./models/db');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

// start server
app.listen(process.env.PORT, () => console.log(`Express server connection succesful....server started at port : ${process.env.PORT}`));





/*





const express = require('express')
const app = express()


app.listen(3000,function check(err)
{
    if(err)
    console.log("Error.....!");
    else
    console.log("Express server connection succesful....server started at port 3000");
});



// Import mongoose using Node.js `require()`
const mongoose = require('mongoose');
//connect  to mongodb using mongoose...
//TO DO:move the connection string to an env file
mongoose.connect('mongodb+srv://johnmwegah:zkituVgIBqTyAQs1@catcomdatabase.p8yfilu.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true },
function checkDB(Error)
{
    if(Error)
    console.log("MongiDB connection error.....!");
    else
    console.log("MongoDB connection succesful...");
});

*/