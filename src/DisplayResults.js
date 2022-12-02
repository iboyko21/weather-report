import React from "react";
import "./weather.css";

function DisplayResults(props) {
    const data = props.data;
    const moredata = props.moredata;
    const weather = props.weather;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // const iconurl = `http://openweathermap.org/img/wn/${data !== "" ? data.weather[0].icon : null}.png`;
 
    let logo;
    let color;
    switch(weather) {
        case 'Clouds':
            logo = "clouds.gif";
            color = "#B6B6B6";
            break;
        case 'Clear':
            logo = "clear.gif";
            color = "#2DA4F7";
            break;
        case 'Rain':
            logo = "rain.gif";
            color = "#585858";
            break;
        case 'Mist':
            logo = "mist.gif";
            color = "#8C8C8C";
            break;
        case 'Fog':
            logo = "fog.gif";
            color = "#B6D0D9";
            break;
        case 'Haze':
            logo = "fog.gif";
            color = "#B6D0D9";
            break;
        case 'Snow':
            logo = "snow.gif";
            color = "#F5F7F7";
            break;
        default:
            logo = null;
    }

    if(data) {
        let url = `https://maps.google.com/maps?q=${data.name}&t=k&z=6&output=embed`
        return (
            <div id="data">
                <div>
                    <iframe src={url} className="map" title="Google Map" loading="lazy"></iframe>
                </div>
                
                <div id="data-container" style={{backgroundColor: color}}>
                    <div className="datetime">
                            <span className="city-name"><b>{data.name}, {data.sys.country}</b></span><br/>
                            <span className="small-date">
                                {new Date().toLocaleDateString("en-US", options)}<br/>
                                {new Date().toLocaleTimeString()}
                            </span>
                    </div>
                    
                    <div>
                        <img src={logo}  alt="weather logo"/>
                        <p className="big">{Math.floor(data.main.temp)}<sup>o</sup> F </p>
                        <p className="small">{data.weather[0].description}</p>
                    </div>

                    <div>
                        <p className="details">Feels like: {Math.floor(data.main.feels_like)} F</p>
                        <p className="details">Low: {Math.floor(data.main.temp_min)} F</p>
                        <p className="details">High: {Math.floor(data.main.temp_max)} F</p>
                        <p className="details">Wind: {Math.floor(data.wind.speed * 0.681818)} mph</p>
                        <p className="details">Humidity: {data.main.humidity}%</p>
                        <p className="details">Pressure:  {data.main.pressure} hPa</p>
                    </div>

                    <div>
                        <p className="details">Sunrise:  {moredata.sunrise}</p>
                        <p className="details">Sunset: {moredata.sunset}</p>
                        <p className="details">Dawn: {moredata.dawn}</p>
                        <p className="details">Dusk: {moredata.dusk}</p>
                        <p className="details">Golden Hour: {moredata.golden_hour}</p>
                        <p className="details">Day Length: {moredata.day_length}</p>
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

export default DisplayResults;