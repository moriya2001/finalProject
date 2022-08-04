import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
const SubscriptionsMember = (props) => {
  const [subscription, setSubscription] = useState([])
  const getSubscriptions = async () => {
    let { data } = await axios.get("http://localhost:8001/subscription")
    let resp = data.filter(x => x.movieid == props.movie._id)
    console.log(resp)
    let data2 = await axios.get("http://localhost:8001/members")
    let data3 = data2.data
    if (data3) {
      resp = resp.map((m) => {
        let member = data3.find((y) => m.memberid == y._id)
        if(resp){
          if (member) {
            return { name: member.name, member: member, date: m.date }
          }
        }
        
      })
      setSubscription(resp)
    }
  }
  useEffect(() => {
    getSubscriptions()
  }, [])

  return (
    <div>
      <h4>Subscriptions Watched</h4>
      <ul>
        {
          subscription && subscription.map((x, index) => {
            if(x) return <li key={index}>{x.name},{x.date}</li>
           })
         }
      </ul>

    </div>
  )
}

export default SubscriptionsMember