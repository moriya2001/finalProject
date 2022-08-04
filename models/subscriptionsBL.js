const subscriptionModel=require("./subscriptionsModel")
const getSubscription = () => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({}, (err, subscription) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(subscription)
        }
      })
    })
  }
  const createsubscription = (obj) => {
    return new Promise((resolve, reject) => {
      let subscription = new subscriptionModel(obj)
      subscription.save((err, data) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    })
  }
  const updatesubscription=(id,obj)=>{
    return new Promise((resolve,reject)=>{
        subscriptionModel.findByIdAndUpdate(id,obj,(err)=>{
        if(err){
          reject(err)
        }
        else{
          resolve("updata!!!")
        }
      })
    })
  }
  const deletesubscription=(id)=>{
    return new Promise((resolve,reject)=>{
        subscriptionModel.findByIdAndRemove(id,(err)=>{
        if(err){
          reject(err)
        }
        else{
          resolve("delete!!!")
        }
      })
    })
  }
  
  module.exports = { getSubscription, createsubscription,updatesubscription,deletesubscription }