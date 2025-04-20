import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import wind from '../assets/wind.png'
import temp from '../assets/temp.png'
import humidiy from '../assets/humidity.png'
import day from '../assets/day.png'
import night from '../assets/night.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'
import axios from 'axios'
import clearskysun from '../assets/weather/clearskysun.png'
import partlycloudy from '../assets/weather/partlycloudy.png'
import heavyrain from '../assets/weather/heavyrain.png'
import heavysnowfall from '../assets/weather/heavysnowfall.png'
import mainlyclear from '../assets/weather/mainlyclear.png'
import overcast from '../assets/weather/overcast.png'
import slightrain from '../assets/weather/slightrain.png'
import thunder from '../assets/weather/thunder.png'
import clearskymoon from '../assets/weather/clearskymoon.png'
import mainlyclearmoon from '../assets/weather/mainlyclearmoon.png'
import partlycloudymoon from '../assets/weather/partlycloudymoon.png'
import slightrainmoon from '../assets/weather/slightrainmoon.png'
import nightbg from '../assets/nightbg.png'
import morningbg from '../assets/morningbg.png'

function Weather() {
    const [tempo, setTempo] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [windspeed, setWindspeed] = useState(0)
    const [timezone, setTimezone] = useState('')
    const [weatherCode, setWeatherCode] = useState(0)
    const [daynight, setDaynight] = useState(1)
    const [humidity, setHumidity] = useState(0)
    const [sunrisetime, setSunrisetime] = useState('')
    const [sunsettime, setSunsettime] = useState('')

    useEffect(() => {
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset&models=icon_seamless&current=temperature_2m,relative_humidity_2m,is_day,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m')
            .then(function (response) {
                setTempo(response.data.current.temperature_2m)
                setFeelsLike(response.data.current.apparent_temperature)
                setWindspeed(response.data.current.wind_speed_10m)
                setTimezone(response.data.current.time)
                setWeatherCode(response.data.current.weather_code)
                setDaynight(response.data.current.is_day)
                setHumidity(response.data.current.relative_humidity_2m)
                setSunrisetime(response.data.daily.sunrise[0])
                setSunsettime(response.data.daily.sunset[0])
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    function weather() {
        if (weatherCode === 0) {
            return daynight === 1
                ? <img className='h-[150px] w-[150px]' src={clearskysun} alt="clearskysun" />
                : <img className='h-[150px] w-[150px]' src={clearskymoon} alt="clearskymoon" />
        } else if (weatherCode === 1) {
            return daynight === 1
                ? <img className='h-[150px] w-[150px]' src={partlycloudy} alt="partlycloudy" />
                : <img className='h-[150px] w-[150px]' src={partlycloudymoon} alt="partlycloudymoon" />
        } else if (weatherCode === 2) {
            return daynight === 1
                ? <img className='h-[150px] w-[150px]' src={mainlyclear} alt="mainlyclear" />
                : <img className='h-[150px] w-[150px]' src={mainlyclearmoon} alt="mainlyclearmoon" />
        } else if (weatherCode === 3) {
            return <img className='h-[150px] w-[150px]' src={overcast} alt="overcast" />
        } else if (weatherCode === 61) {
            return daynight === 1
                ? <img className='h-[150px] w-[150px]' src={slightrain} alt="slightrain" />
                : <img className='h-[150px] w-[150px]' src={slightrainmoon} alt="slightrainmoon" />
        } else if (weatherCode === 65) {
            return <img className='h-[150px] w-[150px]' src={heavyrain} alt="heavyrain" />
        } else if (weatherCode === 73) {
            return <img className='h-[150px] w-[150px]' src={heavysnowfall} alt="heavysnowfall" />
        } else if (weatherCode === 99) {
            return <img className='h-[150px] w-[150px]' src={thunder} alt="thunder" />
        }
    }
    function Weathertext() {
        if (weatherCode === 0) {
            return "Clear sky"
        } else if (weatherCode === 1) {
            return "Partly cloudy"
        } else if (weatherCode === 2) {
            return "Mainly clear"
        } else if (weatherCode === 3) {
            return "Overcast"
        } else if (weatherCode === 61) {
            return "Slight rain"
        } else if (weatherCode === 65) {
            return "Heavy rain"
        } else if (weatherCode === 73) {
            return "snowfall"
        } else if (weatherCode === 99) {
            return "Thunderstorm"
        }
    }
    return (
        <div >
            <header className="bg-blue-400 text-black flex justify-between items-center p-[10px] h-[60px] shadow-[0_0_0_0.05_black] font-bold">
                <h1 className='text-[24px]' >MyReactCodeBase</h1>
                <nav className='mr-[10px] p-[10px] '>
                    <ul className="flex gap-[10px]  list-image-none ">
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative  overflow-hidden z-10  m-0 p-[5px]'><Link to={"/"}>Home</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Postsharing"}>Posts</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/BodyMassIndex"}>Bmi</Link></li>
                        <li className=' rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Usersrendering"}>Users</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Calculator"}>Calc</Link></li>
                    </ul>
                </nav>
            </header>
            <div style={{ backgroundImage: `url(${daynight === 1 ? morningbg : nightbg})`, }} className={`h-screen w-screen flex justify-center items-center p-[20px] bg-cover bg-center`}>
                <div className='bg-blue-400 h-[650px] w-[650px] rounded-[5px] shadow-[0px_0px_10px_2px_black] '>
                    <div className='flex items-center justify-center  gap-[50px] h-[50%]'>
                        <div className='flex flex-col items-center justify-center'>
                            {weather()}
                            {Weathertext()}
                        </div>
                        <div className='flex flex-col items-center justify-center mb-[100px]'>
                            <h1 className='text-[150px] '>fes</h1>
                            <h3>{timezone}</h3>
                        </div>
                        <div>
                            <img className='w-[150px] h-[150px]' src={temp} alt="temp" />
                            <h1 className='flex flex-col items-center justify-center'>{tempo}°C</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-[10px] h-[50%] '>
                        <div className='flex flex-col justify-start  gap-[20px] h-[100%] w-[50%] pb-[30px]  '>
                            <div className='flex items-center justify-center gap-[10px] top-[499px] left-[470px] absolute'>
                                <img className='w-[70px] h-[70px]' src={daynight === 1 ? day : night} alt="daynight" />
                                <h1 className='flex  items-center justify-center'>{daynight === 1 ? "Day" : "Night"}</h1>
                            </div>
                            <div className='flex items-center justify-center gap-[10px] top-[585px] left-[470px] absolute'>
                                <img className='w-[70px] h-[70px]' src={humidiy} alt="humidity" />
                                <h1 className='flex  items-center justify-center'>Humidity:{humidity}%</h1>
                            </div>
                            <div className='flex items-center justify-center gap-[10px] top-[677px] left-[470px] absolute'>
                                <img className='w-[70px] h-[70px]' src={sunrise} alt="sunrise" />
                                <h1 className='flex flex-col items-center justify-center'>{sunrisetime}</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end  gap-[20px] h-[100%] w-[50%] pb-[25px]  '>
                            <div className='flex items-center justify-center gap-[10px] ml-[110px]'>
                                <h1 className='flex items-center justify-center'>FL:{feelsLike}°C</h1>
                                <img className='w-[70px] h-[70px]' src={temp} alt="temp" />
                            </div>
                            <div className='flex items-center justify-center gap-[10px] ml-[120px]'>
                                <h1 className='flex items-center justify-center'>{windspeed}km/h</h1>
                                <img className='w-[70px] h-[70px]' src={wind} alt="wind" />
                            </div>
                            <div className='flex items-center justify-center gap-[10px] ml-[50px]'>
                                <h1 className='flex items-center justify-center'>{sunsettime}</h1>
                                <img className='w-[70px] h-[70px]' src={sunset} alt="sunset" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather