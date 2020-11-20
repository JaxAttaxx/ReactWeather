import React, { useState, useEffect } from 'react'
import { APIkey, Imperial } from "../config"
import { useSelector , useDispatch } from 'react-redux'
import { changeWeatherLocation } from './weatherSlice'
import WeatherIcon from 'react-icons-weather';



export default function Card(props) {

    const dispatch = useDispatch()

    const userLocation = useSelector(state => state.userLocation.userLocation)

    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userLocation}${Imperial}&APPID=${APIkey}`)
            .then(res => res.json())
            
            .then(data => {
                console.log("Home Search", data)
                setWeatherInfo(data)
                dispatch(changeWeatherLocation(data))
                
            })
            console.log("Weather Infos", weatherInfo)
    }
            , [weatherInfo, dispatch, userLocation])
        if (!weatherInfo) {
            return ""
        }
    
    return (
        <div className="flex flex-col justify-center text-center text-gray-200 text-5xl text-opacity-75">{weatherInfo.name} is currently:
            <div className="m-4 mx-auto text-center max-w-sm rounded-3xl overflow-hidden bg-white bg-opacity-25">
                    
                    <div className="text-6xl">
                        <WeatherIcon name="owm" iconId={weatherInfo.weather[0].id} />
                    </div>
                
                    <div className="px-6 py-4">

                        <div className="text-5xl text-red-400">{weatherInfo.weather[0].main}</div>
                        <div className="text-5xl text-green-400">Temp: {Math.round(weatherInfo.main.temp)}&#8457;</div>
                    
                </div>
            </div>
        </div>
    )
}