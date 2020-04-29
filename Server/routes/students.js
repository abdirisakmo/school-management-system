const express = require('express');
const router = express.Router();

//model
const studentsController = require('../controllers/students');

//@route GET students
router.get('/', studentsController.getAllStudents);
//@route POST students
router.post('/', studentsController.createStudent);
//@route Single Student
router.get('/:studentId', studentsController.getSingleStudent);
//update a student 
router.put('/:studentId', studentsController.updateStudent);
//delete a student
router.delete('/:studentId', studentsController.deleteStudent);


module.exports = router;