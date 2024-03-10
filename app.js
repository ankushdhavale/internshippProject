const express = require("express");
require("dotenv").config();
const app = express(); 
const mongoose = require("mongoose");
const path = require("node:path");
const methodOverride = require("method-override");
const { log } = require("console");
const engine = require("ejs-mate");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
var flash = require('connect-flash');
const session = require("express-session");
const MongoStore = require('connect-mongo');


const listingRouter = require("./routes/listing.js")
const userRouter = require("./routes/user.js");


const dbUrl = process.env.MONGODB_URL;
console.log(dbUrl);

main()
  .then(() => {
    console.log("Database Connncted Succcessfully");
})
.catch((err) =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
}

// ejs all set the engin to run ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, "/public")));



const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET,
  },
  touchAfter:24 * 3600,
})


store.on("error", () =>{
  console.log("ERROR IN MONGO SESSION" , err);
})
const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    //expires
    cookie:{
        httpOnly:true,
        expires:Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly:true,
    }
}


app.get("/" , (req , res)=>{
  res.render("listings/home.ejs");
})


app.use(session(sessionOptions))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session())  /// uses identify user 1 page to another
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.sucsses = req.flash("sucsses");
  res.locals.error = req.flash("error");
  next();
})




app.use((req,res,next)=>{
 res.locals.currUser = req.user;
 next();
})
// app.get("/UserDemo" , async(req , res) =>{
//     let fakeUser= new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     })

//     let registerUser = await User.register(fakeUser , "password");
//     res.send(registerUser);

// })


app.use("/listings" , listingRouter);
app.use("/" , userRouter);


app.use((err,req,res,next)=>{
  res.send("Something went wrong");
  next();
})

app.listen(8080 , () => {
    console.log("server is listening port 8080");
})