const userModel=require("./userModel")

const getUser = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, user) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(user)
        }
      })
    })
  }
  const createUser = (obj) => {
    return new Promise((resolve, reject) => {
      let user = new userModel(obj)
      user.save((err, data) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    })
  }
  const updateUser=(id,obj)=>{
    return new Promise((resolve,reject)=>{
        userModel.findByIdAndUpdate(id,obj,(err)=>{
        if(err){
          reject(err)
        }
        else{
          resolve("updata!!!")
        }
      })
    })
  }
  const deleteUser=(id)=>{
    return new Promise((resolve,reject)=>{
        userModel.findByIdAndDelete(id,(err)=>{
        if(err){
          reject(err)
        }
        else{
          resolve("delete!!!")
        }
      })
    })
  }
  
  module.exports = { getUser, createUser,updateUser,deleteUser }