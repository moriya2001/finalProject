const mongoose=require("mongoose")
let subscriptionSchema=new mongoose.Schema({
   movieid:String,
   memberid:String,
   date:String
})
const model=mongoose.model("subscription",subscriptionSchema)
module.exports=model