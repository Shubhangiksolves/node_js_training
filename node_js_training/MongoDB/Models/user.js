const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    }
}, {timestamps: true})

// Model
const User = mongoose.model("user", userSchema);

module.exports = User;