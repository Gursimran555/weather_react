import React, { useState } from 'react' ;
import './Weather_App.css' ;
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import temp from '../assets/temp.png';
import back from '../assets/back.jpg';

const Weather_App = () => {
  let api_key="dfc4a5bbc9a84e907401d68be66ee6fa" ;
  const [Wicon,setWicon] = useState(cloud_icon);
  const search = async () => {
    const element=document.getElementsByClassName("cityInput")
    if (element[0].value==="") {
      return 0 ; 
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&lon=10.99&appid=${api_key}`
    let response = await fetch(url);
    let data = await response.json();



    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const feels_like = document.getElementsByClassName("feels_like");
    const visibility = document.getElementsByClassName("visibility");
  
    humidity[0].innerHTML = data.main.humidity+" % ";
    wind[0].innerHTML = data.wind.speed+" km/h ";
    temperature[0].innerHTML = data.main.temp+" °C ";
    location[0].innerHTML = data.name;
    feels_like[0].innerHTML = data.main.feels_like+" °C ";
    visibility[0].innerHTML = data.visibility+" m ";
    
    if (data.weather[0].icon === "01d" || data.weather[0].icon ==="01n" ) {
      setWicon(clear_icon);
    }
    else if  (data.weather[0].icon === "02d" || data.weather[0].icon ==="02n" ) {
      setWicon(cloud_icon);
    }
    else if  (data.weather[0].icon === "03d" || data.weather[0].icon ==="03n" ) {
      setWicon(drizzle_icon);
    }
    else if  (data.weather[0].icon === "04d" || data.weather[0].icon ==="04n" ) {
      setWicon(drizzle_icon);
    }
    else if  (data.weather[0].icon === "09d" || data.weather[0].icon ==="09n" ) {
      setWicon(rain_icon);
    }
    else if  (data.weather[0].icon === "10d" || data.weather[0].icon ==="10n" ) {
      setWicon(rain_icon);
    }
    else if  (data.weather[0].icon === "13d" || data.weather[0].icon ==="13n" ) {
      setWicon(snow_icon);
    }
    else {
      setWicon(clear_icon);
    }

  }
 

  return (
  <>
      <div className='container'>
        <div className='top-bar'>
          <input type="text" className='cityInput' placeholder='SEARCH' />
          <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt="search logo " />
          </div>
        </div>
        <div className='weather-image'>
          <img src={Wicon} alt="weather image " />
        </div>

        <div className='weather-temp'>--</div>
        <div className='weather-location'>ENTER CITY NAME </div>

        <div className='data-container'>
          <div className="element">
            <img src={humidity_icon} alt="" className='icon' />
            <div className='data'>
              <div className="humidity-percentage">--</div>
              <div className="text">humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt="" className='icon' />
            <div className='data'>
              <div className="wind-rate">--</div>
              <div className="text">wind speed </div>
            </div>
          </div>
        </div> 
        <div className='data-container-2'>
          <div className="element">
            <img src={temp} alt="" className='icon temp-img' />
            <div className='data'>
              <div className="feels_like">--</div>
              <div className="text">feels like</div>
            </div>
          </div>
          <div className="element">
            <img src={humidity_icon} alt="" className='icon' />
            <div className='data'>
              <div className="visibility">--</div>
              <div className="text">visibility </div>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}

export default Weather_App