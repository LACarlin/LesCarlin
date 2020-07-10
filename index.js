const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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

app.post("/contact", function(req, res){

});

app.listen(3000, function(){
    console.log("server started on port 3000")
});
