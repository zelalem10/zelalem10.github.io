const express = require('express');
const path = require('path');
const app = express();

let Product = require("./model/Product");
let Cart = require("./model/Cart");
const productController = require('./controllers/product');
const cartController = require('./controllers/cart');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get('/', productController.getAllProducts);
app.post('/addToCart', cartController.addToCart)
app.listen(3000);