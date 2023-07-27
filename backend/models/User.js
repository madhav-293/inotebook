/* eslint-disable no-undef */
const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: { String, required: true },
    email: {
        type: String, required: true, unique:true
    },
    date: {
        type: Date,
        default: Date.now() // current time when user is created
    }
    
})

module.exports = mongoose.model('user',UserSchema);