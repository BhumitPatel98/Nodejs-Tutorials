const path = require('path');
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/add_product', productsController.getAddProduct);

router.post('/add_product', productsController.postAddProduct);

module.exports = router;
