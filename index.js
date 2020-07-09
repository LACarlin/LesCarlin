const express = require("express");
// const ejs = require("ejs");

const app = express();

// app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/views/about.html")
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/views/contact.html")
});


app.listen(3000, function(){
    console.log("server started on port 3000")
});
