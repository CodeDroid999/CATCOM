const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');


const mongoose = require('./db.js');

const app = express();


app.use(bodyParser.json());