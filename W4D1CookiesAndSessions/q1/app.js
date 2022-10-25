const express = require('express')
const path = require('path');

const app = express();
const cookieParser = require('cookie-parser');

const Cookies = require("./model/Cookies")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser())

 app.get('/', (req, res) => {
   // const cookiesList = Cookies.getAllCookies() 
   console.log(req.cookies)
    res.render('cookies', {cookies : req.cookies});
 })

 app.post('/saveCookies', (req, res) => {

   // let rr =  {
   //    key: req.body.key,
   //    val: req.body.val,
   //  }
   // Cookies.addCookies(rr);
   res.cookie(req.body.key, req.body.val)
   res.redirect('/')
})


 app.listen(3000, (req, res) => {
    console.log('app is running at 3000')
 })