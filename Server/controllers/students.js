const Student = require('../models/Students');

/**
 * get all the students
 */
exports.getAllStudents = async (req, res) => {

    try {
        const students = await Student.find();
        res.json({ students });
    } catch (err) {
        res.json({ message: err })
    }
}