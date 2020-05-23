const express = require('express');
const router = express.Router();
const gardeController = require('../../controllers/exams/grade');

router.get('/get', gardeController.getAllGrades);
router.post('/add', gardeController.addGrade);
router.put('/update/:gradeId', gardeController.updateGrade);
router.delete('/delete/:deleteId', gardeController.deleteGrade);

module.exports = router;