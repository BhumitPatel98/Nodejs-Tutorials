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
        }     
        cb(JSON.parse(filecontent))    
    });
};
module.exports = class Product {
    constructor(title,imageUrl,price,discription) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.discription = discription;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
        });
        fs.readFile(p, (err, filecontent) => {});

    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
};

