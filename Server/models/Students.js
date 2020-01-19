const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//defining the schema 
const StudentSchema = new Schema({
    studentId: {
        type: Number,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    shift: {
        type: String,
        required: false
    },
    studentClass: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }
});

// const Student = mongoose.model('stduents', studentSchema);
module.exports = Student = mongoose.model('student', StudentSchema);