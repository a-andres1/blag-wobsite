const express = require ('express');
const router = express.Router();

router.get ("/", function(req,res) {
    res.render("homepage");
}); 

router.get ("/dashboard", function(req,res) {
    res.render("dash");
});

router.get ("/login", function(req,res) {
    res.render("login");
});

router.get ("/post", function(req,res) {
    res.render("post");
});

router.get ("/editor", function(req,res) {
    res.render("editor");
}); 





module.exports = router;