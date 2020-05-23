const router = require('express').Router();
const attendanceController = require('../controllers/attendance');

router.get('/get', attendanceController.getAllAttendance);

module.exports = router;
