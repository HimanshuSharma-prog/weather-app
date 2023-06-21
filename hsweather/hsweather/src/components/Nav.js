import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ searchWeather }) => {

    const [loc, setLoc] = useState('')

    const navLink = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Forecast',
            link: '/Forecast',
        },
        {
            title: 'AQI',
            link: '/Aqi'
        },
    ]
    return (
        <div className='navDiv'>
            <nav>
                <h2>
                    Weather App
                </h2>
                <div className='searchDiv'>
                    <input
                        type='text'
                        placeholder='Search'
                        value={loc}
                        onChange={(e)=>setLoc(e.target.value)}
                    />
                    <div className='btn' onClick={()=>{
                        searchWeather(loc);
                    }}>
                        <i class='bx bx-search' ></i>
                    </div>
                </div>
                <div className='linkDiv'>
                    {navLink.map((mapdata) => (
                        <Link to={mapdata.link} className='link'>{mapdata.title}</Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Nav