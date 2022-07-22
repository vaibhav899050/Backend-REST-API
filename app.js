const express = require('express');
const mongoose = require('mongoose');
const app = express();
const hbs = require('hbs');
const url = 'mongodb://localhost/lnf'; //url of our database
app.set("view engine", "hbs");
const path = require('path');

mongoose.connect(url, {useNewUrlParser:true}); //build a connection

const con = mongoose.connection; //hold on connection


//once we are connected to the database, we will fire an event
con.on('open', ()=>{
    console.log("connected");
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static('public'));


const lfroute = require('./Routers/lostfound.js');
const groute = require('./Routers/groute.js');
//middleware
//app.use('/lostfound',lfroute); //for all lostfound we have to send the request to lfroute, request comes too ths file and this file will forward that request to lostfound.js
app.use('/lostfound', lfroute);
app.use('/formfill', groute);



app.listen(3000, ()=>{
    console.log("connected to port");
});

