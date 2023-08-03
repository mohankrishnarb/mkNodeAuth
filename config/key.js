module.exports = {
    MongoURI: "mongodb+srv://mohankrishnarb:root24@cluster0.5pjbbol.mongodb.net/?retryWrites=true&w=majority"
}



const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/NodeAuth');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;