import React, { useState, useEffect } from 'react'
import { APIkey, Imperial } from '../config'
import WeatherIcon from 'react-icons-weather';
import { useSelector , useDispatch } from 'react-redux'

export default function Multiday(props){

    const userLocation = useSelector(state => state.userLocation.userLocation)

console.log(userLocation)
    const [weatherInfo, setWeatherInfo] = useState(null)
    const [weatherInfoDaily, setWeatherInfoDaily] = useState(null)

    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=30307${Imperial}&APPID=650ac2b3dcc67642ef611442e2c0ab09`)
            .then(res => res.json())
            // .then(data => data)
            // .then(data => setWeatherInfos(data))
            .then(data => {
                console.log("Home Search", data)
                setWeatherInfo(data)
                // setWeatherInfos(weatherInfos.concat(data.weatherInfo))
            })
            

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=34.11&lon=-84.51&appid=650ac2b3dcc67642ef611442e2c0ab09`)
                .then(res => res.json())
                // .then(data => data)
                // .then(data => setWeatherInfos(data))
                .then(data => {
                    console.log(data)
                    setWeatherInfoDaily(data)
                    // setWeatherInfos(weatherInfos.concat(data.weatherInfo))
                })
                .catch(error => console.log(error))
                
                
        
            
    }, [userLocation])
    console.log("Weather Infos", weatherInfo)
    console.log("Hourly Data", weatherInfoDaily)
    
    // if (!weatherInfo) {
    //     return ""
    // }
    
    // console.log(weatherInfo.city.coord.lat)

    // if (weatherInfo !== null ) {
    //         return null
    // }

    if (!weatherInfoDaily) {
        return ""
    }

//About to change to TailwindCSS....
    return(
        <div>
            <div className="text-center text-gray-200 text-6xl">{weatherInfo.city.name}: 5 Days / 3 Hour</div>
            <div className="overscroll-contain grid grid-cols-4 gap-4">
            {weatherInfoDaily.daily.map((dataBlock, idx) => {
                
                return (
                    <div className="m-4 text-center max-w-sm rounded-3xl overflow-hidden bg-white bg-opacity-25" key={idx}>
                        <div className="text-6xl">
                            {/* <WeatherIcon name="owm" iconId={dataBlock.weather[0].id} /> */}
                        </div>
                        
                        <div className="px-6 py-4">
                            <div className="text-5xl text-green-400">{Math.round(dataBlock.temp.day)}&#8457;</div>
                            {/* <div className="text-white text-2xl">{dataBlock.weather[0].main}</div>
                            <br></br>
                            <div className="text-gray-300 text-sm">{dataBlock.dt_txt}</div> */}
                        
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

