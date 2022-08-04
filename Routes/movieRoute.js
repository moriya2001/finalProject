const express = require("express")
const router = express.Router()
const movieBL = require("../models/movieBL")


//get from jison
const getMoviesf = async (req, res, next) => {
    const movies = await movieBL.getMovie();
    if (movies.length > 0) {
        console.log("Already have movies")
        next()
    } else {
        await movieBL.getMoviesFromJson();
        next()
    }
}
//get
router.get("/", getMoviesf, async function (req, res) {
    try {
        let movies = await movieBL.getMovie();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})
//get by name
router.get("/:name", async function (req, res) {
    let name = req.params.name
    let movie = await movieBL.getMovieByName(name)
    res.json(movie)
})
router.post("/", async function (req, res) {
    let movie = req.body
    await movieBL.createMovie(movie)
    res.send("created!!!!")
})
router.put("/:id", async function (req, res) {
    let id = req.params.id
    let movie = req.body
    let status = await movieBL.updateMovie(id, movie)
    res.status(200).json({ msg: status })
})
router.delete("/:id", async function (req, res) {
    let id = req.params.id
    let status = await movieBL.deleteMovie(id)
    res.status(200).json({ msg: status })
})

module.exports = router