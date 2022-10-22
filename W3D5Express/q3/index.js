const express = require('express');
const path=require("path");
const app = express();

app.use(express.urlencoded({
    extended:true
}))
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
    let name= req.body.name;
    let age=req.body.age;
    console.log("age="+age)
   name=(name)?name:"your name";
   age=(!age)?"your age":age;
    res.end(`welcome ${name} your age is ${age}`)
});

app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);