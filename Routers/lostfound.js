const express = require('express');
const route = express.Router();  //executing 
const list = require('../models/schema'); //get the handle of this schema, we want the access of this schema
const number = require('../models/num');






route.get('/', async(req, res) => {
    try{
        //const n = await number.findOne().limit(1).number;
        //res.send(n);
       
        const items = await list.find({_id:{$gt: 0}}).find({"lostStatus": "true"}).limit(10);
        
        res.json(items);

    }catch(err){
        res.send('Found Error '+err);
    }
});

route.post('/', async(req,res)=>{
    const itemlist = new list({
        username: req.body.username,
        lostStatus: req.body.lostStatus,
        date: Date.now(),
        imageUrl: req.body.imageUrl,
        place: req.body.place,
        item: req.body.item,
        description: req.body.description,
        PhoneNumber: req.body.PhoneNumber
    })
    try{
        const l = await itemlist.save();
        res.json(l);

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
