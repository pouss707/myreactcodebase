import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wind from '../assets/wind.png';
import temp from '../assets/temp.png';
import humidiy from '../assets/humidity.png';
import day from '../assets/day.png';
import night from '../assets/night.png';
import sunrise from '../assets/sunrise.png';
import sunset from '../assets/sunset.png';
import clearskysun from '../assets/weather/clearskysun.png';
import partlycloudy from '../assets/weather/partlycloudy.png';
import heavyrain from '../assets/weather/heavyrain.png';
import heavysnowfall from '../assets/weather/heavysnowfall.png';
import mainlyclear from '../assets/weather/mainlyclear.png';
import overcast from '../assets/weather/overcast.png';
import slightrain from '../assets/weather/slightrain.png';
import thunder from '../assets/weather/thunder.png';
import clearskymoon from '../assets/weather/clearskymoon.png';
import mainlyclearmoon from '../assets/weather/mainlyclearmoon.png';
import partlycloudymoon from '../assets/weather/partlycloudymoon.png';
import slightrainmoon from '../assets/weather/slightrainmoon.png';
import nightbg from '../assets/nightbg.png';
import morningbg from '../assets/morningbg.png';
import { fetchData } from '../api/weatherapi';

function Weather() {
    const [data, setData] = useState(null);
    const [weather, setWeather] = useState(null);
    const [weatherText, setWeatherText] = useState('');
    const [loading, setLoading] = useState(true);  // Track loading state

    useEffect(() => {
        const getData = async () => {
            const fetchedTasks = await fetchData([]);
            setData(fetchedTasks);
            setLoading(false);  // Once data is fetched, set loading to false
        };
        getData();
    }, []);

    useEffect(() => {
        if (data && data.current) {
            const weatherKey = `${data.current.weather_code}-${data.current.is_day}`;
            switch (weatherKey) {
                case '0-1':
                    setWeather(<img className="h-[150px] w-[150px]" src={clearskysun} alt="clearskysun" />);
                    setWeatherText("Clear sky");
                    break;
                case '0-0':
                    setWeather(<img className="h-[150px] w-[150px]" src={clearskymoon} alt="clearskymoon" />);
                    setWeatherText("Clear sky");
                    break;
                case '1-1':
                    setWeather(<img className="h-[150px] w-[150px]" src={partlycloudy} alt="partlycloudy" />);
                    setWeatherText("Partly cloudy");
                    break;
                case '1-0':
                    setWeather(<img className="h-[150px] w-[150px]" src={partlycloudymoon} alt="partlycloudymoon" />);
                    setWeatherText("Partly cloudy");
                    break;
                case '2-1':
                    setWeather(<img className="h-[150px] w-[150px]" src={mainlyclear} alt="mainlyclear" />);
                    setWeatherText("Mainly clear");
                    break;
                case '2-0':
                    setWeather(<img className="h-[150px] w-[150px]" src={mainlyclearmoon} alt="mainlyclearmoon" />);
                    setWeatherText("Mainly clear");
                    break;
                case '3':
                    setWeather(<img className="h-[150px] w-[150px]" src={overcast} alt="overcast" />);
                    setWeatherText("Overcast");
                    break;
                case '61-1':
                    setWeather(<img className="h-[150px] w-[150px]" src={slightrain} alt="slightrain" />);
                    setWeatherText("Slight rain");
                    break;
                case '61-0':
                    setWeather(<img className="h-[150px] w-[150px]" src={slightrainmoon} alt="slightrainmoon" />);
                    setWeatherText("Slight rain");
                    break;
                case '65':
                    setWeather(<img className="h-[150px] w-[150px]" src={heavyrain} alt="heavyrain" />);
                    setWeatherText("Heavy rain");
                    break;
                case '73':
                    setWeather(<img className="h-[150px] w-[150px]" src={heavysnowfall} alt="heavysnowfall" />);
                    setWeatherText("Snowfall");
                    break;
                case '99':
                    setWeather(<img className="h-[150px] w-[150px]" src={thunder} alt="thunder" />);
                    setWeatherText("Thunderstorm");
                    break;
                default:
                    setWeather(null);
                    setWeatherText("Weather not available");
                    break;
            }
        }
    }, [data]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <header className="bg-blue-400 text-black flex justify-between items-center p-[10px] h-[60px] shadow-[0_0_0_0.05_black] font-bold">
                <h1 className='text-[24px]'>MyReactCodeBase</h1>
                <nav className='mr-[10px] p-[10px]'>
                    <ul className="flex gap-[10px] list-image-none">
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/"}>Home</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Postsharing"}>Posts</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/BodyMassIndex"}>BMI</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Usersrendering"}>Users</Link></li>
                        <li className='rounded-[5px] border-[2px] border-black bg-white shadow-[4px_4px_black] text-[16px] font-black cursor-pointer transition-all duration-250 position:relative overflow-hidden z-10 m-0 p-[5px]'><Link to={"/Calculator"}>Calc</Link></li>
                    </ul>
                </nav>
            </header>

            {data && (
                <div style={{ backgroundImage: `url(${data.current.is_day === 1 ? morningbg : nightbg})` }} className="h-screen w-screen flex justify-center items-center p-[20px] bg-cover bg-center">
                    <div className='bg-blue-400 h-[650px] w-[650px] rounded-[5px] shadow-[0px_0px_10px_2px_black]'>
                        <div className='flex items-center justify-center gap-[50px] h-[50%]'>
                            <div className='flex flex-col items-center justify-center'>
                                {weather}
                                {weatherText}
                            </div>
                            <div className='flex flex-col items-center justify-center mb-[100px]'>
                                <h1 className='text-[150px]'>fes</h1>
                                <h3>{data.current.time}</h3>
                            </div>
                            <div>
                                <img className='w-[150px] h-[150px]' src={temp} alt="temp" />
                                <h1 className='flex flex-col items-center justify-center'>{data.current.temperature_2m}°C</h1>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-[10px] h-[50%]'>
                            <div className='flex flex-col justify-start gap-[20px] h-[100%] w-[50%] pb-[30px]'>
                                <div className='flex items-center justify-center gap-[10px] top-[499px] left-[470px] absolute'>
                                    <img className='w-[70px] h-[70px]' src={data.current.is_day === 1 ? day : night} alt="daynight" />
                                    <h1>{data.current.is_day === 1 ? "Day" : "Night"}</h1>
                                </div>
                                <div className='flex items-center justify-center gap-[10px] top-[585px] left-[470px] absolute'>
                                    <img className='w-[70px] h-[70px]' src={humidiy} alt="humidity" />
                                    <h1>Humidity: {data.current.relative_humidity_2m}%</h1>
                                </div>
                                <div className='flex items-center justify-center gap-[10px] top-[677px] left-[470px] absolute'>
                                    <img className='w-[70px] h-[70px]' src={sunrise} alt="sunrise" />
                                    <h1>{data.daily.sunrise[0]}</h1>
                                </div>
                            </div>

                            <div className='flex flex-col justify-end gap-[20px] h-[100%] w-[50%] pb-[25px]'>
                                <div className='flex items-center justify-center gap-[10px] ml-[110px]'>
                                    <h1>FL: {data.current.apparent_temperature}°C</h1>
                                    <img className='w-[70px] h-[70px]' src={temp} alt="temp" />
                                </div>
                                <div className='flex items-center justify-center gap-[10px] ml-[120px]'>
                                    <h1>{data.current.wind_speed_10m}km/h</h1>
                                    <img className='w-[70px] h-[70px]' src={wind} alt="wind" />
                                </div>
                                <div className='flex items-center justify-center gap-[10px] ml-[50px]'>
                                    <h1>{data.daily.sunset[0]}</h1>
                                    <img className='w-[70px] h-[70px]' src={sunset} alt="sunset" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Weather;
