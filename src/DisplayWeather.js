import React from "react";
import "./weather.css";

function DisplayWeather(props) {
    const data = props.data;
    const weather = props.weather;
    // const iconurl = `http://openweathermap.org/img/wn/${data !== "" ? data.weather[0].icon : null}.png`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let logo;
    let color;
    switch(weather) {
        case 'Clouds':
            logo = "clouds.gif";
            color = "#2DA4F7";
            break;
        case 'Clear':
            logo = "clear.gif";
            color = "#2DA4F7";
            break;
        case 'Rain':
            logo = "rain.gif";
            color = "#8C8C8C";
            break;
        case 'Mist':
            logo = "mist.gif";
            color = "#8C8C8C";
            break;
        case 'Fog':
            logo = "fog.gif";
            color = "#8C8C8C";
            break;
        case 'Snow':
            logo = "snow.gif";
            color = "#3278FF";
            break;
        default:
            logo = null;
    }

    if(data) {
        // document.body.style.backgroundColor = color;
        return (
            <div className="data" id="data">
                <div>
                    <b>{data.name}, {data.sys.country}</b><br/>
                    {new Date().toLocaleDateString('en-US',options)} as of {new Date().toLocaleTimeString()}
                </div>

                <div id="data-container" style={{backgroundColor: color}}>
                    <div>
                        <img src={logo}  alt=""/>
                        {/* <p className="small">{data.weather[0].description}</p> */}
                    </div>

                    <div>
                        <p className="big">{Math.floor(data.main.temp)}<sup>o</sup> F </p>
                        <p className="small">{data.weather[0].description}</p>
                    </div>

                        <div>
                            <p className="details">Feels like: {Math.floor(data.main.feels_like)}<sup>o</sup></p>
                            <p className="details">Low: {Math.floor(data.main.temp_min)}<sup>o</sup></p>
                            <p className="details">High: {Math.floor(data.main.temp_max)}<sup>o</sup></p>
                            <p className="details">Wind speed: {Math.floor(data.wind.speed * 0.681818)} mph</p>
                        </div>
                  
                        <div>
                            <p className="details">Humidity: {data.main.humidity}%<br/></p>
                            <p className="details">Pressure:  {data.main.pressure} hPa<br/></p>
                            <p className="details">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}<br/></p>
                            <p className="details">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                        </div>
                    </div>                
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DisplayWeather;