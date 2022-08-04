import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Addmovie = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate()
  const save = async () => {
    let { data } = await axios.post("http://localhost:8001/movies", movie)
    console.log(data)
    alert("save this movie!!!!")
  }
  const cancel = () => {
    navigate("/home/movies")
  }

  return <div style={{ backgroundColor: "pink" }}>
    <h1>Movies</h1>
    Name:<input type="text" onChange={e => setMovie({ ...movie, name: e.target.value })} /><br />
    Generes:<input type="text" onChange={e => setMovie({ ...movie, genres: e.target.value })} /><br />
    Image Url:<input type="text" onChange={e => setMovie({ ...movie, img: e.target.value })} /><br />
    Permired:<input type="text" onChange={e => setMovie({ ...movie, yearPremiered: e.target.value })} /><br />
    <button onClick={save} style={{ backgroundColor: "lightsalmon" }}>Save</button>
    <button style={{ backgroundColor: "lightsalmon" }} onClick={cancel}>Cancel</button>

  </div>
}

export default Addmovie




