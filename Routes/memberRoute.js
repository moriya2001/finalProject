const express = require("express")
const router = express.Router()
const memberBL = require("../models/membersBL")
router.get("/", async function (req, res) {
    try {
        let data = await memberBL.getMember()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

})
router.post("/", async function (req, res) {
    let member = req.body
    await memberBL.createMember(member)
    res.send("created!!!!")
})
router.put("/:id", async function (req, res) {
    let id = req.params.id
    let movie = req.body
    let status = await memberBL.updateMember(id, movie)
    res.status(200).json({ msg: status })
})
router.delete("/:id",async function(req,res){
    let id=req.params.id
    let status=await memberBL.deleteMember(id)
    res.status(200).json({msg:status})
})

module.exports = router