const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI);

var db=mongoose.connection;
//if error occurs
db.on('error',console.error.bind(console,'error connecting'));
//Up and running
db.once('open',function(){
    console.log("Successfully connected to Database");
});