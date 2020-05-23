const Attendance = require('../models/attendance');
const promise = require('../middleware/promise');
/**
 * get all the student name from student table
 * get the attendance of the student
 */
exports.getAllAttendance = promise(async (req, res) => {
    const attendance = await Attendance.find();
    res.json({
        attendance
    });
});
