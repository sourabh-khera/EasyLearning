const express = require('express');
const Course = require('../../server/api/course');
const Video = require('../../server/api/video');
const Events = require('../../server/api/events');
const router = express.Router();

router.use('/course',Course);
router.use('/video',Video);
router.use('/events',Events);

module.exports = router;