const memberModel = require("./membersModel")
const getMember = () => {
  return new Promise((resolve, reject) => {
    memberModel.find({}, (err, user) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(user)
      }
    })
  })
}
const createMember = (obj) => {
  return new Promise((resolve, reject) => {
    let member = new memberModel(obj)
    member.save((err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}
const updateMember = (id, obj) => {
  return new Promise((resolve, reject) => {
    memberModel.findByIdAndUpdate(id, obj, (err) => {
      if (err) {
        reject(err)
      }
      else {
        resolve("updata!!!")
      }
    })
  })
}
const deleteMember = (id) => {
  return new Promise((resolve, reject) => {
    memberModel.findByIdAndRemove(id, (err) => {
      if (err) {
        reject(err)
      }
      else {
        resolve("delete!!!")
      }
    })
  })
}

module.exports = { getMember, createMember, updateMember, deleteMember }