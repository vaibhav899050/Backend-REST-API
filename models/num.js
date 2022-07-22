const mongoose = require('mongoose');

const num = new mongoose.Schema({
    number: {
        type: Number
    }
});


module.exports = mongoose.model('num', num);