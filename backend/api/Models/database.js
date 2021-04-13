const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:127.0.0.1/LeaveDB';
mongoose.connect(mongoDB , {useNewUrlParser: true, useUnifiedTopology: true} , (error) => {
    if(!error)
    console.log("Database Connected Successfully");
    else
    console.log("Failed to Connect Database");
})

require('./user');