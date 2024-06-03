const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getAddProduct = (req,res,next) => {
    res.render('admin/edit_product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        editing: false
    });
};

exports.getEditProduct = (req,res,next) => {
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, product => {
        if(!product){
            return res.redirect('/');
        }
        res.render('admin/edit_product', {
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product', 
            editing: editMode,
            product: product
        });    
    });
};

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const discription = req.body.discription;
    const product = new Product(title,imageUrl,price,discription);
    product.save();
    res.redirect('/');
};

exports.postEditProduct = (req,res,next) => {
    const prodId = req.body
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products'
        });
    });
};


