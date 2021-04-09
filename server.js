const  express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/user.routes');  //CALL THE ROUTES FOLDER

require('dotenv').config();

const zigmapp = express(); // framwework to be used
const port  = process.env.PORT || 5000 ; // the port .env give port if 5000 already used

zigmapp.use(cors()); // zigmapp will use cors
zigmapp.use(express.json());// zigmapp use express.json

const uri = process.env.ATLAS_URI; // getting the datas in the .env which is the mongo database

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}); // MONGO DB NEEDED CONFIG.

const connection = mongoose.connection;// CONNECT NOW TO DATABASE / MONGO DB

connection.once('open',()=>{
    console.log("MONGO DB CONNECTION ESTABLISHED! HINAMPAK");

})



zigmapp.use('/user',UserRouter); //



zigmapp.listen(port,() =>{
    console.log('Server is running in port:' + port);
})



