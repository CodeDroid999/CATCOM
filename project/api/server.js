//create ex[ress server
const express = require("express");

const app = express();

// start server
app.listen("5000", () => console.log(`Express server connection succesful....server started at port : 5000`));