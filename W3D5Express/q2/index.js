const express= require('express');
const app = express();

app.listen(3000)
console.log("your server is running on port 3000!!")
app.use(function (req,res,next){
    console.log("mw--"+req.url)
    next();
})
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
const form=`
    <form method="POST" action="/result">
    <label for="name" >Name</lable>
    <input id="name"  type="text" name="name">
    <label for="age" >Age</lable>
    <input id="age" type="number" name="age">
    <input type="submit" value ="submit Query" >
    </form>
`
res.send(form);
});

app.post('/result',(req,res)=>{
    let name= req.body.name;
    let age=req.body.age;
    console.log("age="+age)
   name=(name)?name:"your name";
   age=(!age)?"your age":age;
    res.end(`welcome ${name} your age is ${age}`)
});