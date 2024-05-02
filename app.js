const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const { engine } = require('express-handlebars');
// const {engine} = require('express-handlebars');
// import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine({ extname: 'hbs', layoutsDir:'views/layouts/', defaultLayout: "main_layout"}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopData = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopData.routes);

app.use((req,res,next) => {
        res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

const server =http.createServer(app);

server.listen(3000);
