const express = require('express');
const add_lecture = require('../controllers/lectures/add_lecture_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/lecture', auth_middleware, add_lecture);

module.exports = router;