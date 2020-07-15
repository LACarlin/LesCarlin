require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.post("/contact", function(req, res){
    const client = {
        fName: req.body.firstName,
        lName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    };

    //to use env variable = process.env.VARIABLENAME

    console.log(client);

});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
