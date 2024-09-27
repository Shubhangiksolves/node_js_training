const mongoose = require('mongoose');

// Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'PUBLIC'
    }
}, {timestamps: true})

// Model
const Student = mongoose.model("student", studentSchema);

module.exports = Student;