import React, { useState, useEffect} from 'react';
import axios from "axios"

export function WeatherApp() {
    const [post, setPost] = useState([]);
    const [names, setNames] = useState("delhi");
    
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=eea12d5fa383f1ce6361b62b932ec60c`)
        .then((response) => {
            console.log(response.data);
            setPost(response.data)
            
        }).catch(() => {})
        console.log(post);
    }, [names]);
  return (
    <>
    <h2>WeatherApp</h2>
    <input type="text" onChange={(e) => setNames(e.target.value)}/>
    <button>click</button>
    <h2>City : {post.name}</h2>
    <h2> Temperature : {Math.floor(post['main'].temp - 273)}</h2>
    <h2> Humidity : {post['main'].humidity}</h2>
    <h2> Pressure : {post['main'].pressure}</h2>
    </>
  )
}
