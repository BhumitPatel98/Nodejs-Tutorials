const { render } = require('pug');
const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product_list', {prods: products, 
        pageTitle: 'All Products', 
        path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product_detail',{
            product: product,
            pageTitle: product.tittle,
            path: '/products'
        });
    });
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/'
        });
    });
};

exports.getCart = (req,res,next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addproduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getOrders = (req,res,next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};