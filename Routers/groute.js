const express = require('express');
const route = express.Router();  //executing 
const list = require('../models/schema'); //get the handle of this schema, we want the access of this schema
const number = require('../models/num');



route.get('/', async(req,res)=>{
    res.render("index")
})






route.post('/', async(req,res)=>{
    const itemlist = new list({
        username: req.body.username,
        lostStatus: req.body.lostStatus,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
        place: req.body.place,
        item: req.body.item,
        description: req.body.description,
        PhoneNumber: req.body.PhoneNumber
    })
    try{
        const l = await itemlist.save();
        res.render("landing");

    }catch(err){
        res.send("error" +err);
    }
})

/*route.post('/', async(req,res)=>{
    const itemlist = new number({
        number: req.body.number
    })
    try{
        const l = await itemlist.save();
        res.json(l);

    }catch(err){
        res.send("error" +err);
    }
})*/


module.exports = route;
