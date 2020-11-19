import React, { useState, useEffect } from 'react'
import { APIkey, Imperial } from "../config"
import { useSelector , useDispatch } from 'react-redux'


export default function Card(props) {

    const userLocation = useSelector(state => state.userLocation.userLocation)

    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userLocation}${Imperial}&APPID=${APIkey}`)
            .then(res => res.json())
            // .then(data => data)
            // .then(data => setWeatherInfos(data))
            .then(data => {
                console.log("Home Search", data)
                setWeatherInfo(data)
                // setWeatherInfos(weatherInfos.concat(data.weatherInfo))
            })
            console.log("Weather Infos", weatherInfo)
    }
            , [])
        if (!weatherInfo) {
            return ""
        }
    return (
        <div className="main-card">
            <h2>{weatherInfo.name} (Time: {weatherInfo.dt})</h2>
            {/* <h4>Time: {weatherInfo.dt}</h4> */}
            <h4>Temp: {Math.round(weatherInfo.main.temp)}&#8457;</h4>
            {/* <i class="wi wi-day-cloudy-high">{weatherInfo.weather[0].icon}</i> */}
            <img src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} />
            <p>{weatherInfo.weather[0].main}</p>
            {/* <p>{weatherInfo.weather[0].description}</p> */}
        </div>
    )
}
// http://openweathermap.org/img/w/${props.icon}.png