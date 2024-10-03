const express = require('express');
const add_course = require('../controllers/course/add_course_controller');
const get_all_courses = require('../controllers/course/get_all_courses_controller');
const get_course_image = require('../controllers/course/get_course_image_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');
const get_course_details = require('../controllers/course/get_course_details');

const router = express.Router();

router.post('/course', auth_middleware, add_course);
router.get('/course', get_all_courses);
router.get('/course-image/:id', get_course_image);
router.get('/course-details/:id', auth_middleware, get_course_details);

module.exports = router;