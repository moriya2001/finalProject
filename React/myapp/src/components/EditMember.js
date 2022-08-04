import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const EditMember = (props) => {
    const [member,setMember]=useState({})
    const updateMember=async()=>{
        const {data}=await axios.put("http://localhost:8001/members/"+props.edit._id,member)
        console.log(data)
        alert("update!!!")
        props.funcget()
      }
      const cancelMember=()=>{
         props.is()
      }
  return (
    <div style={{ backgroundColor: "pink" }}>
        <h3>Edit Member : {props.edit.name}</h3><br/>
        Name:<input type={"text"} placeholder={props.edit.name} onChange={e=>setMember({name:e.target.value})}/><br/>
        Email:<input type={"text"} placeholder={props.edit.email} onChange={e=>setMember({email:e.target.value})}/><br/>
        City:<input type={"text"} placeholder={props.edit.city} onChange={e=>setMember({city:e.target.value})}/><br/>
        <button onClick={updateMember}style={{ backgroundColor: "lightsalmon" }}>update</button>
        <button onClick={cancelMember}style={{ backgroundColor: "lightsalmon" }}>cancel</button>
    </div>
  )
}

export default EditMember