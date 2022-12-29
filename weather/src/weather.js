import React, { useState, useEffect } from 'react'
import WeatherData from './weatherdata';

function Weather() {

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentCity, setCurrentCity] = useState(null);
    const [userCoord, setUserCoord] = useState(null);

    // show the user's current location weather data
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((geo) => {
            const lat = geo.coords.latitude;
            const lon = geo.coords.longitude;

            setUserCoord({ lat: lat, lon: lon })
            // console.log(lat, lon)

            // call the geolocation API to get the city, country names
            fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=aff6f1194660ee7643d426b59c2f2742`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setCurrentCity(data[0])
                });
        });

    }, [])

    // when user clicks on search button:
    function searchBtnHandler() {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=5&appid=aff6f1194660ee7643d426b59c2f2742`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data);
                setSearchInput("");
            })
    }




    return (
        <>
            <h1 className='text-center display-2' >Weather API</h1>
            {/* component to display the weather results of the selected city: */}
            <WeatherData currentCity={currentCity}/>
            <h1 className='display-6 text-center'>Maps:</h1>
            {currentCity && currentCity.name && userCoord &&
                <div className='d-flex justify-content-center'>
                    <iframe
                        height="500"
                        frameBorder="0" style={{ border: 0, margin: '20px' }}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&origin=${userCoord.lat + ',' + userCoord.lon}&destination=${currentCity.name}`}
                        allowFullScreen>
                    </iframe>
                    <iframe
                        
                        height="500"
                        frameBorder="0" style={{ border: 0, margin: '20px' }}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg&q=${userCoord.lat + ',' + userCoord.lon}&maptype=satellite`}
                        allowFullScreen>
                    </iframe>
                </div>
            }

            <label className='form-label' htmlFor='location'>Enter Location</label>
            <input type='text' id='location' className='form-control'
                value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button className='d-block btn btn-primary m-auto my-2' onClick={searchBtnHandler}>Search</button>



            {/* search results here: */}
            <ul className='list-group'>
                {searchResults.map((city, i) =>
                    <li key={i} className='btn btn-secondary list-group-item' onClick={() => setCurrentCity(city)} >
                        {city.name}, {city.country}
                    </li>)}
            </ul>

        </>
    )
}

export default Weather