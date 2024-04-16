const http = require('http');

const express = require('express');

const app = express();

// const routes = require('./routes');

// console.log(routes.someText);

// app.use((req,res,next) => {
//     console.log('In the middleware!');
//     next();
// });

app.use( '/', (req,res,next) => {
    console.log('This is always run');
    next();
});

app.use( '/add_product', (req,res,next) => {
    res.send('<body><form action="/product" method="POST"><input type="text" name ="title"><button type="submit">Send</button></form></bod>')
});
app.use( '/product', (req,res,next) => {
    // console.log(req.body);
    res.redirect('/');
});

// app.use( '/', (req,res,next) => {
//     console.log('This is always run');
//     next();
// });

// app.use('/add_products',(req,res,next) => {
//     console.log('In the other middleware!');
//     res.send('<h1>Add the Products!!!!</h1>');
// });

app.use('/',(req,res,next) => {
    console.log('In the other middleware!');
    res.send('<h1>Hello from Express.js!!!</h1>');
});

const server =http.createServer(app);

server.listen(3000);
