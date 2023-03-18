const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb+srv://ADMIN:mEvbNxBTN1ks6r8X@catcomdatabase.tnlvvk6.mongodb.net/test',{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (!err) { console.log('MongoDB connection succesful...'); }
    else { console.log('MongoDB connection error.....: ' + JSON.stringify(err, undefined, 2)); }
});
module.exports=mongoose