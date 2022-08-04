const express=require("express")
const router=express.Router()
const userBL=require("../models/userBL")
router.get("/", async function (req, res) {
    try {
        let data = await userBL.getUser()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

})
router.post("/", async function (req, res) {
    let user = req.body
    await userBL.createUser(user)
    res.send("created!!!!")
})
router.put("/:id", async function (req, res) {
    let id = req.params.id
    let user = req.body
    let status = await userBL.updateUser(id, user)
    res.status(200).json({ msg: status })
})
router.delete("/:id",async function(req,res){
    let id=req.params.id
    let status=await userBL.deleteUser(id)
    res.status(200).json({msg:status})
})

module.exports = router
