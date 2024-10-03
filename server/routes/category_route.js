const express = require('express');
const add_category = require('../controllers/category/add_category_controller');
const get_category_info = require('../controllers/category/get_categories_info_controller');
const { auth_middleware } = require('../middlewares/auth_middleware');

const router = express.Router();

router.post('/category', auth_middleware, add_category);
router.get('/category', auth_middleware, get_category_info);

module.exports = router;