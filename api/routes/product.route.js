const express = require('express');


const router = express.Router();
const controller=require('../controllers/product.controller');

router.get('/', controller.index);

// router.post('/login', controller.postLogin);

module.exports = router;
