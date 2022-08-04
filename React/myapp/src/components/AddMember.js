import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const AddMember = () => {
  const [member,setMember]=useState({});
  const navigate=useNavigate()
  const save=async()=>{
      let {data}=await axios.post("http://localhost:8001/members",member)
      console.log(data)
      alert("save this member!!!!")
    }
    const cancel=()=>{
      navigate("/home/subscription")
    }
  return (
    <div style={{backgroundColor:"pink"}}>
        Name:<input type={"text"}onChange={e=>setMember({...member,name:e.target.value})}/><br/>
        Email:<input type={"text"}onChange={e=>setMember({...member,email:e.target.value})}/><br/>
        City:<input type={"text"}onChange={e=>setMember({...member,city:e.target.value})}/><br/>
        <button onClick={save} style={{backgroundColor:"lightsalmon"}}>Save</button>
        <button style={{backgroundColor:"lightsalmon"}} onClick={cancel}>Cancel</button>
    </div>
  )
}

export default AddMember