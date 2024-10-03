const express = require('express');
const add_enrollment = require('../controllers/enrollments/add_enrollment_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/enrollment', auth_middleware, add_enrollment);

module.exports = router;