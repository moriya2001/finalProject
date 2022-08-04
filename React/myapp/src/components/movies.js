import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import MovieChild from './movie'
import { useNavigate } from 'react-router-dom'
const Movies = () => {
  const [allMovies, setAllMovies] = useState()
  const [findMovie, setFindMovie] = useState()
  const navigate = useNavigate()
  const getallmovies = async () => {
    const { data } = await axios.get("http://localhost:8001/movies")
    setAllMovies(data)
  }
  const addMovie = () => {
    navigate("/home/addmovie")
  }
  const findByName = async () => {
    // const { data } = await axios.get("http://localhost:8001/movies/" + findMovie)
let name=allMovies.filter((x=>x.name.includes(findMovie)))
    setAllMovies(name)
  }
  return (
    <div>
      <h3>Movies</h3>
      <button onClick={getallmovies} style={{ backgroundColor: "lightsalmon" }}>All Movies</button>
      <button onClick={addMovie} style={{ backgroundColor: "lightsalmon" }}>Add Movies</button>
      Find Movie:<input type={"text"} onChange={e => setFindMovie(e.target.value)} />
      <button onClick={findByName} style={{ backgroundColor: "lightsalmon" }}>Find</button>
      {allMovies && allMovies.map((movie, index) => {
        
        return <MovieChild key={index} movie={movie} getmovies={getallmovies} />
      })}

    </div>
  )
}

export default Movies
