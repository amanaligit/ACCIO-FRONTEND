import React, {useState} from 'react'
import { useEffect } from 'react';

function Timer(){

    // days, hours, minutes, seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "January, 1, 2023"
    // we can convert this deadline into a date object
    
    const updateTime = ()=>{
        const newYearDate = Date.parse(deadline);
        const remainingTime = newYearDate - Date.now();
        // console.log(remainingTime);
        setDays(Math.floor((remainingTime/1000/60/60/24)))
        setHours(Math.floor((remainingTime/1000/60/60)%24))
        setMinutes(Math.floor((remainingTime/1000/60)%60))
        setSeconds(Math.floor((remainingTime/1000)%60));
    }
    
    useEffect(()=> {
        const interval = setInterval(() => {
            // update the states
            updateTime();
        }, 1000)

        // return a cleanup function
        return () => {clearInterval(interval)}
    }, [])


    return(
        <div className='timer'>
            <h1>Happy New Year In</h1>
            <div className='col-4'>
                <div className='box'>
                    <p id="day">{days >= 10 ? days : '0' + days}</p>
                    <span className='text'>Days</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id="hour">{hours >= 10 ? hours : '0' + hours}</p>
                    <span className='text'>hours</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id="minute">{minutes >= 10 ? minutes : '0' + minutes}</p>
                    <span className='text'>minutes</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id="second">{seconds >= 10 ? seconds : '0' + seconds}</p>
                    <span className='text'>seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Timer