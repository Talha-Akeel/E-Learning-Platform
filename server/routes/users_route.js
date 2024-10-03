const express = require('express');
const register_user = require('../controllers/user/register_user_controller');
const login_user = require('../controllers/user/login_user_controller');
const get_user_info = require('../controllers/user/get_user_info_controller');
const get_user_profile_pic = require('../controllers/user/get_user_profile_pic_controller');
const remove_user = require('../controllers/user/remove_user_controller');
const update_user = require('../controllers/user/update_user_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/register-user', register_user);
router.post('/login-user', login_user);
router.get('/user', auth_middleware, get_user_info);
router.get('/user-profile-pic', auth_middleware, get_user_profile_pic);
router.delete('/user', auth_middleware, remove_user);
router.put('/user', auth_middleware, update_user);

module.exports = router;
