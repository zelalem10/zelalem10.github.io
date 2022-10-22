const express = require('express');
const path=require("path");
const app = express();

app.use(express.urlencoded({extended:false}));

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
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    age = (!age) ? "not mentioned" : age;
    name = (!name) ? "person" : name;
    res.send(`Welcome ${name} , your age is: ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);