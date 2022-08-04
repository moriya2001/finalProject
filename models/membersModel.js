const mongoose=require("mongoose")
let membersSchema=new mongoose.Schema({
    name:String,
    email:String,
    city:String
})
const model=mongoose.model("members",membersSchema)
module.exports=model