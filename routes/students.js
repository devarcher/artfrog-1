const express = require('express');

const router = express.Router();
const studentsController = require('../controllers/students');

router.get('/students', studentsController.getAllStudents);

router.put('/students', studentsController.editStudent);

router.delete('/students', studentsController.deleteStudent);

module.exports = router;

// Accept query parameter passed into getAllStudents - limit amount 
// Lodash.js throttle only invokes function once or so often Look at seach complete 
// Also look at debounce
// Also limit search
