const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/add_product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add_product', adminController.postAddProduct);

router.get('/edit_product/:productId', adminController.getEditProduct);

module.exports = router;
