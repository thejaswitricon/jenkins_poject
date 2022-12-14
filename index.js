const express = require("express");
const app = express();

const dotenv= require("dotenv");
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1>actions page<h2>");
})

app.listen(PORT,(req,res)=>{
    console.log("Server is started in port this ",PORT);
})