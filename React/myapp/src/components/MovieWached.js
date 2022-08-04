import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MovieChild from './movie'
const MovieWached = () => {
  const location=useLocation()
  const {movie1}=location.state
  const [movie,setMovie]=useState()
  const navigate=useNavigate()
  const getByName=async()=>{
    const {data}=await axios.get("http://localhost:8001/movies/"+movie1.name)
    console.log(data)
    setMovie(data)
}
const back=()=>{
  navigate("/home/subscription")
}
useEffect(() => {
    if(movie1.name)
    getByName()
}, []);
  return (
    <div>
         {movie &&< MovieChild movie={movie[0]} p={getByName}/> }
         <button onClick={back} style={{backgroundColor:"lightsalmon"}}>Back</button>
  
    </div>
  )
}

export default MovieWached