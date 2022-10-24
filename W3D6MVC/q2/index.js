const express= require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'))


app.use(function (req,res,next){
    console.log("mw--"+req.url)
    next();
})
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{

res.render("form", {
    title:"form"
});
});

app.post('/result',(req,res)=>{
 res.render('result', {
    name : req.body.name,
    age: req.body.age,
    test:"test from post method"
 })
});

app.listen(3000)
console.log("your server is running on port 3000!!")