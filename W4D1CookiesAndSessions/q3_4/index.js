const express = require("express");
const path = require("path");
const parseurl = require("parseurl");
const session = require("express-session");
const app = express();

app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: "salt for cookie signing",
  })
);
let Product = require("./model/product");
let Cart = require("./model/Cart");
const productController = require("./controllers/product");
const cartController = require("./controllers/cart");

app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
    req.session.totalPrice = 0;
  }
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get("/", productController.getAllProducts);

app.post("/addToCart", (req, res, next) => {
  let product = Product.getById(req.body.id)[0];
  const existingProductIndex = req.session.cart.findIndex( (p) => p.id == product.id);
  if (existingProductIndex >= 0) {
    // exist in cart already
    var exsitingProduct = req.session.cart[existingProductIndex];
    exsitingProduct.quantity += 1;
    req.session.totalPrice += exsitingProduct.price
  } else {
    
    //not exist
    req.session.cart.quantity = 1;
    req.session.totalPrice += product.price
    
    req.session.cart.push(product);
  }

  let allCarItems = req.session.cart;
  res.render("shoppingCart", { product: allCarItems, totalPrice :  req.session.totalPrice});
});

app.listen(3000);
