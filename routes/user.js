const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


router.get("/signup" , (req , res) =>{
    res.render("users/signup.ejs");
});


router.post("/signup" ,async(req , res) =>{
   try{
    let {username , email , password} = req.body;
    const newUser = new User({email,username });
    const registerUser = await User.register(newUser ,password);
    console.log(registerUser);
    req.login(registerUser , (err)=>{
        if(err){
            next(err);
        }
        req.flash("sucsses" , "Welcome to our Portal.!")
        res.redirect("/listings");
    })
   }catch(e){
     req.flash("error" , e.message)
     res.redirect("/signup")
   }
})


//login

router.get("/login", (req,res) =>{
    res.render("users/login.ejs")
})

router.post(
"/login",
saveRedirectUrl,
passport.authenticate('local', { 
    failureRedirect: '/login',
    failureFlash:true ,
}), 
    async(req,res)=>{
        req.flash("sucsses" , "Welcome Back to our Portal");
        res.redirect(res.locals.redirectUrl || "/listings");
})

///logout
router.get("/logout", (req , res)=>{
    req.logout((err) =>{
        if(err){
            next(err);
        }
        req.flash("sucsses","You are LogOut Now");
        res.redirect("/listings");
    })
})


module.exports = router;