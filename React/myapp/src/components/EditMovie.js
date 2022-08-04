import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const EditMovie = (props) => {
    const [movie,setMovie]=useState({})
    const updateMovie=async()=>{
      const {data}=await axios.put("http://localhost:8001/movies/"+props.edit._id,movie)
      console.log(data)
      alert("update!!!")
      props.funcget()
    }
    const cancelMovie=()=>{
      props.is()
    }
   return(
    <div style={{backgroundColor:"pink"}}>
        <h1>Movies</h1>
        <h2>Edit movie : {props.edit.name}</h2>
        Name:<input type={"text"} placeholder={props.edit.name} onChange={e=>setMovie({...movie,name:e.target.value})}/><br/>
        Geners:<input type={"text"} placeholder={props.edit.genres.map(x=>x+" ,")}onChange={e=>setMovie({...movie,genres:e.target.value})}/><br/>
        img url:<input type={"text"}placeholder={props.edit.img}onChange={e=>setMovie({...movie,img:e.target.value})}/><br/> 
        Permid:<input type={"text"} placeholder={props.edit.yearPremiered}onChange={e=>setMovie({...movie,yearPremiered:e.target.value})}/><br/>
       <button onClick={updateMovie} style={{backgroundColor:"lightsalmon"}}>Update</button>
       <button onClick={cancelMovie} style={{backgroundColor:"lightsalmon"}}>Cancel</button>


    </div>
  )
}

export default EditMovie