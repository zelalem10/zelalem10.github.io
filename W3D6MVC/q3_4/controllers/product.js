const Product = require("../model/product");
exports.getAllProducts = (req, res) => {
    res.render("index", { products: Product.getAllProducts() });
}