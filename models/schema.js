const mongoose = require('mongoose');
const count = require('mongoose-sequence')(mongoose);


const lnfschema = new mongoose.Schema({
    _id: Number,
    username: {
        type: String,
        required: true
    },

    lostStatus: {
        type: Boolean,
        required: false,
        default: true
    },
    date: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    
    }


})

lnfschema.plugin(count);

module.exports = mongoose.model('list', lnfschema);