//PACKAGE CONFIGURATIONS

    //EXPRESS
    const express       =       require("express"),
    app           =       express();
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(__dirname + '/public'));
  //EJS
      ejs           =       require("ejs");
      app.set('view engine', 'ejs');
  //SERVER STATIC FILES
  

    //MONGOOSE
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/User', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

    //All MODEL ROUTES
    const User  = require("./models/user");

    //ROUTES
    //HOME ROUTE
    app.get("/", function(req,res){
        res.render("index");
    });

    //ROUTE TO HANDLE POST FOMR REQUEST
    app.post("/new", function(req,res){
        const newUser=req.body;
        User.create(newUser, function(err){
          if (err) {
            res.redirect("/");
            console.log(err);
          } else {
            res.redirect("/users");
          }
        });
    });

    //ROUTE TO SHOW ALL USERS
    app.get("/users", function(req,res){
      User.find({}, function(err, allUsers){
          if(err){
              res.redirect("/");
              console.log(err);
          } else {
              res.render("users", {allUsers});
          }
      });
  });

    //PORT LISTENER
    app.listen(3000, function(){
      console.log("Server started");
    });