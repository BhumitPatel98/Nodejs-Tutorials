const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const { engine } = require('express-handlebars');
const errorscontroller = require('./controllers/errors');
// const {engine} = require('express-handlebars');
// import { engine } from 'express-handlebars';

const app = express();

// app.engine('handlebars', engine({ layoutsDir:'views/layouts/', defaultLayout: "main_layout",extname: 'hbs' }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopData = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopData);

app.use(errorscontroller.get404);

// const server =http.createServer(app);

app.listen(3000);
