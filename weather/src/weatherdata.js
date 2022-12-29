import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './App';

function WeatherData({ currentCity }) {

    const [weatherData, setWeatherData] = useState(null);
    const darkMode = useContext(ThemeContext);


    useEffect(() => {
        if (currentCity !== null) {

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.lat}&lon=${currentCity.lon}&appid=aff6f1194660ee7643d426b59c2f2742`)
                .then(res => res.json())
                .then(data => {
                    setWeatherData(data)
                    // console.log(data)
                })
        }
    }, [currentCity])

    // console.log(darkMode)
    const listItemStyle = "list-group-item text-center " + (darkMode ? 'text-white bg-dark' : "")

    return (
        currentCity && weatherData ?
        <>
        <h1 className='display-6 text-center'>Weather Data:</h1>
            <div className={'card mb-5 ' + (darkMode ? 'text-white bg-dark' : "")}>
                <img alt='weather description img'  className='card-img-top' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} style={{width:'100px', margin:'auto'}}/>
                <div className='card-body'>
                    <h3 className='text-center card-title'>
                        {currentCity.name}, {currentCity.country}
                    </h3>

                    <h5 className='text-center card-title'>{weatherData.weather[0].description}</h5>


                </div>
                <ul className='list-group list-group-flush'>
                    <li className={listItemStyle}>Temp: {Math.floor((weatherData.main.temp - 273.15)*100)/100 } &deg;C </li>
                    <li className={listItemStyle} >Low: {Math.floor((weatherData.main.temp_min - 273.15)*100)/100 } &deg;C </li>
                    <li className={listItemStyle}>High: {Math.floor((weatherData.main.temp_max - 273.15)*100)/100 } &deg;C </li>

                </ul>


            </div>
        </>

            :
            null
    )


}

export default WeatherData