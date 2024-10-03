const express = require('express');
const add_comment_reply = require('../controllers/comment_replies/add_comment_replies_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/comment-replies', auth_middleware, add_comment_reply);

module.exports = router;