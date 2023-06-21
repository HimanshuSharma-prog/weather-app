import './css/style.css'
import react, { useEffect, useState } from 'react'
import Nav from './Nav'
import WeatherDiv from './WeatherDiv'

const Home=()=>{

    const [currentWeather,setCurrentWeather]=useState(null)

    const apiKey='86fb433eb7d03053c2f5aa098df855a7'
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric`
    
    const fetchWeather=async (cityname)=>{
        const response=await fetch(apiUrl+`&appid=${apiKey}`+`&q=${cityname}`);
        
        if(response.status===200){
            const data =await response.json();
            setCurrentWeather(data);
            console.log(data);
        }


    }
    
    useEffect(()=>{
        fetchWeather('narnaul')
    },[])
    return(
        <div>
            <Nav searchWeather={fetchWeather}/>
            <WeatherDiv weather={currentWeather} />
        </div>
    )
}

export default Home