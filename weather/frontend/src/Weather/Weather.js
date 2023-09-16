import React from "react";
import { useState } from "react";
import './style.css';
import search from './images/search.png';
import day from './images/day.svg';
import night from './images/night.svg';
import thunder from './images/thunder.svg';
import mist from './images/foggy-unscreen.gif';
import cloudy from './images/cloudy.svg';
import brokenCloud from './images/brokenCloud-unscreen.gif';
import wind from './images/wind-turbine-unscreen.gif';
import humidity from './images/humidity-unscreen.gif';
import locationPin from './images/location-pin-unscreen.gif';
import cloudy_day_3 from './images/cloudy-day-3.svg';
import cloudy_night_3 from './images/cloudy-night-3.svg';
import rainy_3 from './images/rainy-3.svg';
import rainy_4 from './images/rainy-4.svg';
import rainy_6 from './images/rainy-6.svg';
import snowy_1 from './images/snowy-1.svg';
import snowy_3 from './images/snowy-3.svg';
import snowy_6 from './images/snowy-6.svg';

function WeatherApp() {
    const [icon, setIcon] = useState();

    const getWeather = async () => {
        let city = document.getElementById('loc')
        const key = '5eb07d305a240523662d444770397cf9';
        if (city.value === '') {
            return alert("Enter City Name .");
        }
        let weat = document.getElementById('weat');
        weat.style.display = 'block';
        let url, resp, data;
        try {
            url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=${key}`;
            resp = await fetch(url);
            data = await resp.json();
            if (data.cod === '404') {
                alert('Enter Valid City Name.');
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }

        let temp = document.getElementsByClassName('temp');
        let location = document.getElementsByClassName('city');
        let pin = document.getElementsByClassName('pin');
        let dateTime = document.getElementsByClassName('dateTime');
        let wind = document.getElementsByClassName('wind');
        let humidity = document.getElementsByClassName('humidity');
       
        let timezone = data.timezone;
        let date = new Date((new Date().getTime()) + timezone * 1000).toUTCString().split(' ');
        let month = '';
        switch (date[2]) {
            case 'Jan': { month = 'January'; break; }
            case 'Feb': { month = 'February'; break; }
            case 'Mar': { month = 'March'; break; }
            case 'Apr': { month = 'April'; break; }
            case 'May': { month = 'May'; break; }
            case 'Jun': { month = 'June'; break; }
            case 'Jul': { month = 'July'; break; }
            case 'Aug': { month = 'August'; break; }
            case 'Sep': { month = 'September'; break; }
            case 'Oct': { month = 'October'; break; }
            case 'Nov': { month = 'November'; break; }
            case 'Dec': { month = 'December'; break; }
            default: { month = 'Data Not Found' }
        }
        let days = '';
        switch (date[0]) {
            case 'Sun,': { days = 'Sunday'; break; }
            case 'Mon,': { days = 'Monday'; break; }
            case 'Tue,': { days = 'Tuesday'; break; }
            case 'Wed,': { days = 'Wednesday'; break; }
            case 'Thu,': { days = 'Thursday'; break; }
            case 'Fri,': { days = 'Friday'; break; }
            case 'Sat,': { days = 'Saturday'; break; }
            default: { days = 'Data Not Found' }
        }
        let time = date[4].split(':')
        let hours = parseInt(time[0]);
        let minutes = parseInt(time[1]);
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0' + minutes : minutes;
        time = hours + ':' + minutes + ' ' + ampm;

        temp[0].innerHTML = Math.floor(data.main.temp) + '°c';
        location[0].innerHTML = data.weather[0].description;
        pin[0].innerHTML = `${data.name}`;
        dateTime[0].innerHTML = `${time} - ${days}, ${date[1]} ${month} ${date[3]}`; 
        wind[0].innerHTML = data.wind.speed + ' km/hr';
        humidity[0].innerHTML = data.main.humidity + ' %';

        switch (data.weather[0].icon) {
            case '01d': { setIcon(day); break; }
            case '01n': { setIcon(night); break; }
            case '02d': { setIcon(cloudy_day_3); break; }
            case '02n': { setIcon(cloudy_night_3); break; }
            case '03d': { setIcon(cloudy); break; }
            case '03n': { setIcon(cloudy); break; }
            case '04d': { setIcon(brokenCloud); break; }
            case '04n': { setIcon(brokenCloud); break; }
            case '09d': { setIcon(rainy_4); break; }
            case '09n': { setIcon(rainy_4); break; }
            case '10d': { setIcon(rainy_3); break; }
            case '10n': { setIcon(rainy_6); break; }
            case '11d': { setIcon(thunder); break; }
            case '11n': { setIcon(thunder); break; }
            case '13d': { setIcon(snowy_3); break; }
            case '13n': { setIcon(snowy_6); break; }
            case '50d': { setIcon(mist); break; }
            case '50n': { setIcon(mist); break; }
            default: { setIcon(snowy_1) }
        }

        city.value = '';

    }

    return (<>
        <div className="card">
            <div className="search">
                <input type="text" className="location" id="loc" placeholder="Enter The City Name"></input>
                <button onClick={getWeather}><img src={search} alt=""></img></button>
            </div>
            <div className="weather" id="weat">
                <img className="locationPin" src={locationPin} alt=""></img>
                <p className="pin"></p>
                <p className="dateTime"></p>

                <img src={icon} className="weather-icon" alt=""></img>
                <h1 className="temp"></h1>
                <h2 className="city"></h2>
                <div className="details">
                    <div className="col">
                        <img src={wind} alt=""></img>
                        <div>
                            <p className="wind"></p>
                            <p className="title">Wind Speed</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={humidity} alt=""></img>
                        <div>
                            <p className="humidity"></p>
                            <p className="title">Humidity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default WeatherApp;
