const mongoose = require("mongoose");
require("dotenv").config();
const initData = require("../init//data.js");
const Listing = require("../models/listing.js");


const dbUrl = process.env.MONGODB_URL;

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

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj , owner:"656312a39cf62d8b361e23e2"}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}
initDB();