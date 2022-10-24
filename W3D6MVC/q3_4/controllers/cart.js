let Product = require("../model/product");
let Cart = require("../model/Cart");

exports.addToCart = (req, res) => {

    let product = Product.getById(req.body.id);

    const tempCart = new Cart(product[0].id, product[0].name, product[0].price, product[0].quantity);

    tempCart.add();
    let allCarItems = tempCart.getAll();
    res.render("shoppingCart", { items: allCarItems });
}