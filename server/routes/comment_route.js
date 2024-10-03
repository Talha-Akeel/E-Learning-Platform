const express = require('express');
const add_comment = require('../controllers/comments/add_comment_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/comment', auth_middleware, add_comment);

module.exports = router;