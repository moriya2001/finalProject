import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Home from './home'
const LoginPage = () => {
  const [userName,setUserName]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const login=async()=>{
   const {data}=await axios.get("http://localhost:8001/users")
   let user=data.find(user=>{
     return user.username==userName&&user.password==password//בדיקה אם יש את ה user
   })
   if(user){
     navigate("/home")//אם יש הולך לדף הבית
   }
   else{
     alert("User not found")
   }
  }

  return(
    <div style={{ border: "4px solid black"}}>
   
      <h1>Login Page</h1><br/>
      User name:<input type={"text"} onChange={(e)=>setUserName(e.target.value)}/><br/>
      Password:<input type={"text"}onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button onClick={login} style={{backgroundColor:"lightsalmon"}}>Login</button>
    </div>
  )
}

export default LoginPage