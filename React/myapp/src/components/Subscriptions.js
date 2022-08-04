import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Member from './Member'
import { useNavigate } from 'react-router-dom'
const Subscriptions = () => {
  const [allMembers, setAllMembers] = useState()
  const navigate = useNavigate()
  const getAllMembers = async () => {
    const { data } = await axios.get("http://localhost:8001/members")
    setAllMembers(data)
  }
  const addMember = async () => {
    navigate("/home/addmember")
  }
  return (
    <div style={{ border: "4px solid black" }}>
      <h2>Subscriptions</h2>
      <button onClick={getAllMembers} style={{ backgroundColor: "lightsalmon" }}>All Members</button>
      <button onClick={addMember} style={{ backgroundColor: "lightsalmon" }}>Add Member</button>
      {allMembers && allMembers.map((member, index) => {
        return <Member key={index} member={member} getmember={getAllMembers} />
      })}
    </div>
  )
}

export default Subscriptions