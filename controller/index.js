const express = require ('express');
const router = express.Router();
const db = require("../models")

router.get ("/", function(req,res) {
    const hbsobj = {
        data: [{name: "Mr. Squiggles"}, {name: "Bob"}, {name: "Cloud"}, {name: "Aerith"}, {name: "Jean Claude Van Damme"}]
    }
    res.render("homepage", hbsobj);
}); 

router.get ("/dashboard", function(req,res) {
    res.render("dash");
});

router.get ("/login", function(req,res) {
    db.User.create({
        username: "Bobby",
        password: "Jenkins"
    }).then(function(){
        console.log("try")
    })
    res.render("login");
});

router.get ("/post", function(req,res) {
    res.render("post");
});

router.get ("/editor", function(req,res) {
    res.render("editor");
}); 





module.exports = router;