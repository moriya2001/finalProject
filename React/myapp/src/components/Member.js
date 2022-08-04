import React from 'react'
import { useState } from 'react'
import EditMember from './EditMember'
import axios from 'axios'
import ChildMember from './ChildMember'
const Member = (props) => {
    const [isEdit,setIsEdit]=useState()
    const deleteMember = async () => {
      let {data} = await axios.delete("http://localhost:8001/members/" + props.member._id)
        props.getmember()
     }
    const editMember = () => {
        setIsEdit(!isEdit)
    }
  return (
    <div style={{ backgroundColor: "burlywood" ,border:"3px solid black"}}>
       <h3>{props.member.name}</h3><br/>
       Email:   {props.member.email}<br/>
        City:   {props.member.city}<br/>
        <button onClick={editMember} style={{ backgroundColor: "lightsalmon" }}>Edit</button>
        <button onClick={deleteMember} style={{ backgroundColor: "lightsalmon" }}>Delete</button>
        {isEdit?<EditMember edit={props.member} funcget={props.getmember} is={editMember}/>:null}
        {<ChildMember member={props.member} getmember={props.getmember}/>}
       
        </div>
  )
}

export default Member