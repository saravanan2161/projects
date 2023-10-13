const { Schema, model } = require('mongoose');

const studSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Id: {
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Number: {
        type: Number,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        optinal: true
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: true
    },

});

module.exports = model('Stud', studSchema);