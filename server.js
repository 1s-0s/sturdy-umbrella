const path=require("path");
const express= require("express");
const session=require("express-session");
const bodyParser=require("body-parser");

const app=express();

app.get("/",(req,res)=>{
    res.send("hello world");
    res.end();
})

app.listen("3000",()=>{
    console.log("server running on port 3000!");
})