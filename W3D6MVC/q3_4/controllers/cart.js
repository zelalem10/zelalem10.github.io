let Product = require("../model/product");
let Cart = require("../model/Cart");

const session = require('express-session')

exports.addToCart = (req, res) => {

    let product = Product.getById(req.body.id)[0];

    Cart.add(product);
    let allCarItems = Cart.getAll();
    res.render("shoppingCart", { product: allCarItems.products, totalPrice : allCarItems.totalPrice });
}
