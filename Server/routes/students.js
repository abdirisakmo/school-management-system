const express = require('express');
const router = express.Router();

//model
const studentsController = require('../controllers/students');

//@route GET api/students
router.get('/', studentsController.getAllStudents);


module.exports = router;