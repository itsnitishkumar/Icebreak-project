let express= require ("express");
var app=express();


app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("home");
})

app.listen(3000,()=>{
    console.log("server on port 3000");
})