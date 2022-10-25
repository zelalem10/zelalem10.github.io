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


// exports.addToCart = (req, res) => {

//     let product = Product.getById(req.body.id)[0];

//     Cart.add(product);
//     let allCarItems = Cart.getAll();
//     res.render("shoppingCart", { product: allCarItems.products, totalPrice : allCarItems.totalPrice });
// }


exports.addToCart = (req, res, next) => {
    console.log(req.session)
    if (!req.session.cart) {
        req.session.cart = []; // put views object into session
      }

    let product = Product.getById(req.body.id)[0];

    req.session.cart[req.body.id] = product;
    let allCarItems = req.session.cart;
    console.log(allCarItems)
    res.render("shoppingCart", { product: allCarItems});
}

