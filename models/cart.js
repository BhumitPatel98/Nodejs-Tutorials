const fs = require('fs');
const path = require('path');
const Product = require('./product');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);
module.exports =class Cart{
    static  addproduct(id, productPrice){
        // Fetch the previous cart
        fs.readFile(p, (err, filecontent) => {
            let cart = { products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(filecontent);
            }
            //analyze the cart => find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);   
            let updatedProduct;
            //Add new product/ increase quantity 
            if(existingProduct){
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1; 
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            } 
            cart.totalPrice= [...cart.products, updatedProduct];
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
};