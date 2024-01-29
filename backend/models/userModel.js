const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    'userID': {
        type: String,
        required: true,
        length: 50,
        unique: true
    },
    'email': {
        type: String,
        required: true,
        length: 100
    },
    'age': {
        type: Number,
        required: true,
    }
},{timestamps: true});

module.exports = mongoose.model('userModel', userSchema);