const express = require("express")
const router = express.Router()
const subscriptionBL = require("../models/subscriptionsBL")
router.get("/", async function (req, res) {
    try {
        let data = await subscriptionBL.getSubscription()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

})
router.post("/", async function (req, res) {
    let subscription = req.body
    await subscriptionBL.createsubscription(subscription)
    res.send("created!!!!")
})
router.put("/:id", async function (req, res) {
    let id = req.params.id
    let subscription = req.body
    let status = await subscriptionBL.updatesubscription(id, subscription)
    res.status(200).json({ msg: status })
})
router.delete("/:id",async function(req,res){
    let id=req.params.id
    let status=await subscriptionBL.deletesubscription(id)
    res.status(200).json({msg:status})
})

module.exports = router