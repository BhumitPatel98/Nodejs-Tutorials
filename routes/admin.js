const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir =  require('../util/path');
const { title } = require('process');
const products = []
    // router.get( '/add_product', (req,res,next) => {
    //     res.send('<body><form action="/admin/add_product" method="POST"><input type="text" name ="title"><button type="submit">Send</button></form></bod>')
    // });

    router.get( '/add_product', (req,res,next) => {
        res.render('add_product', {pageTitle: 'Add Prodcut'});
    });
    router.post( '/add_product', (req,res,next) => {
        products.push({title: req.body.title});
        res.redirect('/');
    });

exports.routes = router;
exports.products = products;
