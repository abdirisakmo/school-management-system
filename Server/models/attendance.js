const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true,
        minlengeth: 4
    },
    idNumber: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
module.exports = attendance = mongoose.model('Attendance', attendanceSchema);