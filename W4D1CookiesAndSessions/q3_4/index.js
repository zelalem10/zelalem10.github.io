const express = require('express');
const path = require('path');
const parseurl = require('parseurl')
const session = require('express-session')
const app = express();

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'salt for cookie signing',
}));
let Product = require("./model/product");
let Cart = require("./model/Cart");
const productController = require('./controllers/product');
const cartController = require('./controllers/cart');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get('/', productController.getAllProducts);
app.post('/addToCart', cartController.addToCart)


app.listen(3000);