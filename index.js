"use strict";
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import Routes
const authRoute = require('./routes/auth');
// Connect to mongoose

mongoose.Promise = global.Promise;

var db = mongoose.connection;

// Added check for DB connection

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

dotenv.config();


mongoose.connect('mongodb+srv://devGuru:Guru@1234@cluster0-rcsfx.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('DB Connected!'))
.catch(err => console.error(err));





app.use('/api/user', authRoute);

app.listen(5000, () => console.log('Server is Up and running'));