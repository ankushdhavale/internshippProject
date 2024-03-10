const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js")
const {isLoggedIn} = require("../middleware.js");





// index route show the frontend listing 
router.get("/",async (req , res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , { allListings });
})

//New Route
router.get("/new", isLoggedIn , (req,res)=>{
  if(!req.isAuthenticated()){
    req.flash("error" , "You must be logged in to our portal.!");
    res.redirect("/listings")
  }
    res.render("listings/new.ejs");
 })

 
//Show route read the data or create the data
router.get("/:id" ,isLoggedIn , async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate("owner");
    if(!listing){
      req.flash("error" , " Intrenship does not exist!");
      res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs" , { listing });
})

//Create Route
router.post("/", isLoggedIn ,async (req, res , next) => {
    try{
      const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("sucsses" , "Successfully Create a New Internship");
    res.redirect("/listings");
    }catch(err){
      console.log(err);
      next(err);
    }
  });

  // Edit route
  router.get("/:id/edit", isLoggedIn ,async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
      req.flash("error" , " Intrenship does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs" , { listing })
  })

  // Update route

  router.put("/:id" , async (req, res)=>{
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing });
    req.flash("sucsses" , "Successfully Update Internship");
    res.redirect(`/listings/${id}`);
  } )

  // Delete route
  router.delete("/:id", isLoggedIn ,async (req,res)=>{
    const { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("sucsses" , " Deleted Internship Successfully");
    res.redirect("/listings");
  })

  
module.exports = router;