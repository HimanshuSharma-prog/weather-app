import React from 'react'

const WeatherDiv = ({weather}) => {

    const weatherData={
        temp:weather===null?'18°C':weather.main.temp,
        climate:weather===null?'partially clouds':weather.weather[0].description,
        loc:weather===null?'Narnaul':weather.name,
        feelLike:weather===null?'18°C':weather.main.feels_like,
        pressure:weather===null?'1008':weather.main.pressure,
        windSpeed:weather===null?'2':weather.wind.speed,
        humidity:weather===null?'10':weather.main.humidity,
    }

    console.log(weatherData.climate)
    return (
        <div className='mainDiv'>
            <div className='weatherDiv'>
                {/* <div className='dateDiv'>
                    <p>6/21/2023</p>
                </div> */}
                <div className='iconDiv'>
                    <i class='bx bxs-sun'></i>
                    <div className='temp'> 
                        <h2>{weatherData.temp} °C</h2>
                        <p>{weatherData.climate}</p>
                    </div>
                </div>
                <div className='locDiv'>
                    <p>{weatherData.loc}</p>
                </div>
                <div className='cardDiv'>
                    <div className='card'>
                        <div>
                            <i class='bx bx-brightness-half' ></i>
                        </div>
                        <div>
                            <p>{weatherData.feelLike}°C </p>
                            <p>Feels Like</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                        <i class='bx bx-tachometer' ></i>
                        </div>
                        <div>
                            <p>{weatherData.pressure} hpa</p>
                            <p>Pressure</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <i class='bx bx-wind' ></i>
                        </div>
                        <div>
                            <p>{weatherData.windSpeed} m/s</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <i class='bx bx-water' ></i>
                        </div>
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WeatherDiv