const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "Bella";
  }
  //age=(!age)?"not mentioned":age;
  if (!age) {
    age = 18;
  }
  res.send(`Welcome  ${name}  and your age is : ${age}`);
});
app.listen(3000);
console.log("your server is running on 3000");
