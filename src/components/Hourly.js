import React, { useState, useEffect } from 'react'
import { APIkey, Imperial } from '../config'
import WeatherIcon from 'react-icons-weather';
import { useSelector } from 'react-redux'

export default function Multiday(props){

    const userLocation = useSelector(state => state.userLocation.userLocation)

console.log(userLocation)
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${userLocation}${Imperial}&appid=${APIkey}`)
            .then(res => res.json())
            
            .then(data => {
                console.log(data)
                setWeatherInfo(data)
                
            })
            .catch(error => console.log(error))

    }, [userLocation])

    if (!weatherInfo) {
        return ""
    }

    return(
        <div>
            <div className="text-center text-gray-200 text-5xl text-opacity-75">{weatherInfo.city.name}: 5 Days / 3 Hour</div>
            <div className="overscroll-contain grid grid-cols-4 gap-4">
            {weatherInfo.list.map((dataBlock, idx) => {
                
                return (
                    <div className="m-4 text-center max-w-sm rounded-3xl overflow-hidden bg-white bg-opacity-25" key={idx}>
                        <div className="text-6xl">
                            <WeatherIcon name="owm" iconId={dataBlock.weather[0].id} />
                        </div>
                        
                        <div className="px-6 py-4">
                            <div className="text-5xl text-green-400">{Math.round(dataBlock.main.temp)}&#8457;</div>
                            <div className="text-red-400 text-2xl">{dataBlock.weather[0].main}</div>
                            <br></br>
                            <div className="text-gray-300 text-sm">{dataBlock.dt_txt}</div>
                        
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
