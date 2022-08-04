import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
const AddSubscribeToMovie = (props) => {
    const [movies,setMovies]=useState([])
    const [movie,setMovie]=useState({name:"",date:""})
    const getAllMovie=async()=>{
        let {data}=await axios.get("http://localhost:8001/movies")
        setMovies(data)
    }
    useEffect(()=>{
        getAllMovie()
    },[movies])
    const addMovieToMember=async()=>{
        let {data}=await axios.get("http://localhost:8001/movies/"+movie.name)
        data=data[0]
        let obj= {movieid:data._id,memberid:props.member._id,date:movie.date}
        const data2=await axios.post("http://localhost:8001/subscription",obj)
        props.getsubscription()
    }
    

  return (
    <div style={{ backgroundColor:"pink" }}>
        <h3>Add a new Movie</h3>

        <select value={movie.name}onChange={e=>setMovie({...movie,name:e.target.value})}>
            {
              movies.map((movie,index)=>{
                  return<option key={index} >{movie.name}</option>
              })
            }
        </select>
        <input type={"date"} onChange={e=>setMovie({...movie,date:e.target.value})}/><br/>
        <button onClick={addMovieToMember} style={{ backgroundColor: "lightsalmon" }}>Subscribe</button>
        </div>
  )
}

export default AddSubscribeToMovie