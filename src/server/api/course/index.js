const express = require('express');
const courseController = require('./course.controller');

const router = express.Router();

router.route('/save').post(courseController.createCourse);


module.exports = router;