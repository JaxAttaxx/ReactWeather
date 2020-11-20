import React, { useState, useEffect } from 'react'
import { APIkey, Imperial } from '../config'
import { useSelector } from 'react-redux'


export default function Multiday(props){

    const weatherInfo = useSelector(state => state.weatherLocation.weatherLocation)

    const userLocation = useSelector(state => state.userLocation.userLocation)

console.log(userLocation)
    
    const [weatherInfoDaily, setWeatherInfoDaily] = useState(null)

    useEffect(() => {
        

            
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherInfo.coord.lat}&lon=${weatherInfo.coord.lon}${Imperial}&appid=${APIkey}`)
            .then(res => res.json())
            
            .then(data => {
                
                setWeatherInfoDaily(data)
                
            })
            .catch(error => console.log(error))

        
                
        
            
    }, [setWeatherInfoDaily, weatherInfo.coord.lat, weatherInfo.coord.lon])
    console.log("Weather Infos", weatherInfo)
    console.log("Hourly Data", weatherInfoDaily)
    

    if (!weatherInfoDaily) {
        return ""
    }


    return(
        <div>
            <div className="text-center text-gray-200 text-5xl text-opacity-75">{weatherInfo.name}: 8 Day Forecast</div>
            <div className="overscroll-contain grid grid-cols-4 gap-4">
            {weatherInfoDaily.daily.map((dataBlock, idx) => {
                
                return (
                    <div className="m-4 text-center max-w-sm rounded-3xl overflow-hidden bg-white bg-opacity-25" key={idx}>
                        
                        
                        
                        <div className="px-6 py-4">
                            <div className="text-5xl text-center text-red-400">{dataBlock.weather[0].main}</div>
                            <div className="text-green-400 text-3xl">High temp: {Math.round(dataBlock.temp.max)}&#8457;</div>
                            <div className="text-blue-400 text-3xl">Low temp: {Math.round(dataBlock.temp.min)}&#8457;</div>
                            <br></br>
                            
                        
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

