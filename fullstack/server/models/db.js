const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (!err) { console.log('MongoDB connection succesful...'); }
    else { console.log('MongoDB connection error.....: ' + JSON.stringify(err, undefined, 2)); }
});


require('./user.model');