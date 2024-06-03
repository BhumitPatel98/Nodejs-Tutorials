const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb =>{
    fs.readFile(p, (err, filecontent) => {
        if (err) {
            cb ([]);
        }else{
            cb(JSON.parse(filecontent))   
        }
    });
};
module.exports = class Product {
    constructor(id,title,imageUrl,price,discription) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.discription = discription;
    }

    save(){
        
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            if(this.id){
            
            }
            products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
        });
        // fs.readFile(p, (err, filecontent) => {});
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static findById(id,cb){
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
};

