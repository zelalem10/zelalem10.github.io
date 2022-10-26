  
const express = require('express');
const router  = require("./router");
const path    = require('path');
const session = require('express-session');
const app     = express();

app.use(session({
    secret: 'this is secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.use(express.urlencoded({extended:false}));

app.use('/products', router);
app.get("/products/:productId",function(req,res){
    res.render("product",{product:Product.getAllProducts()[req.params.productId]});
});
app.post("/product/addtocart",function(req,res){
    req.session[req.body.productId]=(req.session[req.body.productId]||0)+1;
    res.redirect(303,"back");
});
app.get("/cart",function(req,res){
    let cart=new Cart();
    console.log(req.session);
    for(let prodId in req.session){
        if(!isNaN(prodId)){
            cart.add(Product.getAllProducts()[parseInt(prodId)],req.session[prodId]);
        }
    }
    res.render("cart",{cart:cart});
});

app.listen(3000);
