const express = require('express');
const path=require("path");
const app = express();
const cookieParser = require('cookie-parser');


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())

app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    const html=`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My App</title>
            <link href="${hour<=6&&hour>=18?'/css/day.css':'/css/night.css'}" rel="stylesheet">
        </head>
        <body>
            <form action='/result' method='POST'>
                <label>Name <input type='text' name='name'></label>
                <label>Age <input type='text' name='age'></label>
                <input type='submit' value='submit query'></label>
            </form>
        </body>
    </html>
`

    res.send(html);
});
app.post('/result',(req,res)=>{
    res.cookie('name', req.body.name)
    res.cookie('age', req.body.age)
    res.redirect("/output");
});
app.get('/output', (req, res) => {
    let name = req.cookies.name;
    let age = req.cookies.age;

    age = (!age) ? "not mentioned" : age;
    name = (!name) ? "person" : name;
    res.send(`Welcome ${name} , your age is: ${age}`);
});

app.listen(3000);