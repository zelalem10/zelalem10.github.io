const express = require('express');
const parseurl = require('parseurl')
const session = require('express-session')
let Product = require("../model/product");
let Cart = require("../model/Cart");
const app = express();

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'salt for cookie signing',
}));

app.use(express.urlencoded({ extended: false }));


exports.addToCart = (req, res) => {

    let product = Product.getById(req.body.id)[0];

    Cart.add(product);
    let allCarItems = Cart.getAll();
    res.render("shoppingCart", { product: allCarItems.products, totalPrice : allCarItems.totalPrice });
}





