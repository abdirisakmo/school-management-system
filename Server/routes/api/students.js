const express = require('express');
const router = express.Router();

//model
const Student = require('../../models/Students');

//@route GET api/students
router.get('/', (req, res) => {
    Student.find().sort({ date: -1 }).then(students => res.json(students));
})


module.exports = router;