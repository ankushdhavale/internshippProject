const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        set:(v) => 
        v==""?
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :v,
    },
    price:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }, 
    duration:{
        type:String,
    },
    skills:{
        type:String,
    },
    companyUrl:{
        type:String,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }, 
})


const Listing = mongoose.model("Listing",listingSchema)

module.exports = Listing;