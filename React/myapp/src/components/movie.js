import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import EditMovie from './EditMovie'
import SubscriptionsMember from './SubscriptionsMember'
const MovieChild = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const deleteMovie = async () => {
        const { data } = await axios.delete("http://localhost:8001/movies/" + props.movie._id)
        console.log(data)
        props.getmovies()
    }
    const editMovie = () => {
        setIsEdit(!isEdit)
    }

    return (
        <div style={{ border: "4px solid black" }}>
            <h4> {props.movie.name},{props.movie.yearPremiered}</h4><br />
            genres:{props.movie.genres.map((x, index) => {
                return <span key={index}><q>{x}</q>,</span>
            })}<br />
            <img src={props.movie.img} /><br />
            <button onClick={editMovie} style={{ backgroundColor: "lightsalmon" }} >Edit</button>
            <button onClick={deleteMovie} style={{ backgroundColor: "lightsalmon" }}>Delete</button>
            {isEdit ? <EditMovie edit={props.movie} funcget={props.getmovies} is={editMovie} /> : null}
            {<SubscriptionsMember movie={props.movie} />}
        </div>

    )
}


export default MovieChild
