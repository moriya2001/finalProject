const mongoose=require("mongoose")
let userSchema=new mongoose.Schema({
    fullname:String,
    username:String,
    password:String
})
const model=mongoose.model("user",userSchema)
module.exports=model