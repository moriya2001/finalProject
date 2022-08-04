const mongoose=require("mongoose")
let movieSchema=new mongoose.Schema({
    name:String,
    yearPremiered:String,
    genres:[String],
    img:String
})
const model=mongoose.model("movie",movieSchema)
module.exports=model