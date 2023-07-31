import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import ForecastCard from './ForecastCard'

const Forecast = () => {

    const [currentForecast,setCurrentForecast]=useState(null)

    const apiKey='*******************' //enter your openweather api
    const apiUrl='https://api.openweathermap.org/data/2.5/forecast?units=metric'


    const fetchForecast=async (cityname)=>{
        const response=await fetch(apiUrl + `&appid=${apiKey}` +`&q=${cityname}`)

        if(response.status===200){
            const data=await response.json();
            setCurrentForecast(data);
            console.log(data);
        }
    }

    useEffect(()=>{
        fetchForecast('narnaul');
    },[])
  return (
    <div className='forecastDiv'>
        <Nav />
        <div className='cardDiv'>
            <ForecastCard weather={currentForecast} />
        </div>
    </div>
  )
}

export default Forecast
