const path = require("path")
const jfile = require("jsonfile")
const pfile = path.join(__dirname, "./shows.json");
const movieModel = require("./movieModel")
//get from json
const getMoviesFromJson = async () => {
  return new Promise((resolve, reject) => {
    jfile.readFile(pfile, (err, data) => {
      if (err)
        reject(err)
      else {
        data.forEach(movie => {
          const moviel = new movieModel({
            name: movie.name,
            yearPremiered: movie.premiered.slice(0, 4),
            genres: movie.genres,
            img: movie.image.medium
          })
          moviel.save(err => {
            if (err)
              console.log(err)
            else {
              console.log("Success");
              resolve(moviel);
            }
          })
        })
      }
    })
  })
}

//get
const getMovie = () => {
  return new Promise((resolve, reject) => {
    movieModel.find({}, (err, movie) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(movie)
      }
    })
  })
}
const getMovieByName=(name)=>{
  return new Promise((resolve,reject)=>{
     movieModel.find({name:name},(err,movie)=>{
       if(err){
         reject(err)
       }
       else{
         resolve(movie)
       }
     })
  })
 }
const createMovie = (obj) => {
  return new Promise((resolve, reject) => {
    let movie = new movieModel({
      name: obj.name,
      yearPremiered: obj.yearPremiered,
      genres: obj.genres.split(" ,"),
      img: obj.img
    })
    movie.save((err, data) => {
      if (err) {
        reject(err)
        console.log(err)
      }
      else {
        resolve(data)
      }
    })
  })
}
const updateMovie = (id, obj) => {
  return new Promise((resolve, reject) => {
    movieModel.findByIdAndUpdate(id, obj, (err) => {
      if (err) {
        reject(err)
      }
      else {
        resolve("updata!!!")
      }
    })
  })
}
const deleteMovie = (id) => {
  return new Promise((resolve, reject) => {
    movieModel.findByIdAndDelete(id, (err) => {
      if (err) {
        reject(err)
      }
      else {
        resolve("delete!!!")
      }
    })
  })
}

module.exports = { getMovie, createMovie, updateMovie, deleteMovie, getMoviesFromJson,getMovieByName }