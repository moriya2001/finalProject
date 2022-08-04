import React from 'react'
import {Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
    const movies=()=>{
        navigate("movies")
    }
    const getSubscription=()=>{
      navigate("subscription")
    }
  return<div style={{ border: "4px solid black"}}>
      <h1>Movies-Subscriptions Web Site</h1>
     <button onClick={movies} style={{backgroundColor:"lightsalmon"}}>Movies</button>
     <button onClick={getSubscription} style={{backgroundColor:"lightsalmon"}}>Subscriptions</button>
     {/* <button style={{backgroundColor:"lightsalmon"}}>Users Management</button> */}
     {/* <button style={{backgroundColor:"lightsalmon"}}>Log Out</button> */}
     <Outlet/>
  </div>
    
 
}

export default Home