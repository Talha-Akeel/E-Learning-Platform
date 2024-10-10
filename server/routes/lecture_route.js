const express = require('express');
const add_lecture = require('../controllers/lectures/add_lecture_controller');
const get_lecture_video = require('../controllers/lectures/get_lecture_video_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');
const get_all_lectures = require('../controllers/lectures/get_all_lectures');

const router = express.Router();

router.post('/lecture', auth_middleware, add_lecture);
router.get('/lecture/:id', auth_middleware, get_lecture_video);
router.get('/lecture', auth_middleware, get_all_lectures);

module.exports = router;