const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const schema = mongoose.Schema;

const gameSchema = new schema({
    'gameID': {
        type: String,
        required: true,
        length: 50,
        unique: true
    },
    'name': {
        type: String,
        required: true,
    },
    'price': {
        type: Number,
        required: true,
        length: 100
    },
    'ownerID': {
        type: String,
        required: true,
        ref: 'userModel',
        field: 'userID'
    }
},{timestamps: true});

module.exports = mongoose.model('gameModel', gameSchema);