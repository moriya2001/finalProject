import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddSubscribeToMovie from './AddSubscribeToMovie'
import MovieWached from './MovieWached'
const ChildMember = (props) => {
  const [subscription, setSubscription] = useState([])
  const [isSubscripe, setIsSubscripe] = useState(false)
  // const [isLink, setIsLink] = useState(false)
const getSubscriptions = async () => {
    const { data } = await axios.get("http://localhost:8001/subscription")
    //כל המנויים
    let resp = data.filter(x => x.memberid == props.member._id)//מערך של כל בן אדם שמנוי לכמה סרטים
    // console.log(resp)
    //חבר מסויים
    let data2 = await axios.get("http://localhost:8001/movies")
    //כל החברים
    let data3 = data2.data
    if (data3) {
      if (resp) {
        resp = resp.map((m) => {
          let movie = data3.find((y) => m.movieid == y._id)
          // console.log(movie)
          if (movie)
            if (resp)
              return { name: movie.name, date: movie.yearPremiered }

        })
        setSubscription(resp)
      }
    }
}
  useEffect(() => {
    getSubscriptions()
  }, [subscription])

  const addSubscribe = () => {
    setIsSubscripe(!isSubscripe)
  }

  return (
    <div style={{ border: "2px solid black", backgroundColor: "palegoldenrod" }}>
      <h4>Movie Watched</h4><br />
      <button onClick={addSubscribe} style={{ backgroundColor: "lightsalmon" }}>Subscripe to new movie</button>
      <ul>
        {
          
          subscription && subscription.map((x, index) => {
            if (x) return <li key={index}><Link to={"/home/detailsMovie"}state={{movie1:x}}   element={<MovieWached />}>{x.name}</Link>,{x.date}</li>
          })
        }
       
        {isSubscripe ? <AddSubscribeToMovie member={props.member} getsubscription={getSubscriptions} func={props.getmember} /> : null}
      </ul>
    </div>
  )
}

export default ChildMember