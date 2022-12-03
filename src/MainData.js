import { React } from 'react';
import WeatherData from './WeatherData';
import WeatherMain from './WeatherMain';
import SunData from './SunData';

function MainData(props) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let img;
    let color;
    switch(props.weather) {
        case 'Clouds':
            img = "clouds.gif";
            color = "#B6B6B6";
            break;
        case 'Clear':
            img = "clear.gif";
            color = "#2DA4F7";
            break;
        case 'Rain':
            img = "rain.gif";
            color = "#585858";
            break;
        case 'Mist':
            img = "mist.gif";
            color = "#8C8C8C";
            break;
        case 'Fog':
            img = "fog.gif";
            color = "#B6D0D9";
            break;
        case 'Haze':
            img = "fog.gif";
            color = "#B6D0D9";
            break;
        case 'Snow':
            img = "snow.gif";
            color = "#F5F7F7";
            break;
        default:
            img = null;
    }

    return (
        <div id="data-container" style={{backgroundColor: color}}>
            <div className="datetime">
                <span className="city-name"><b>{props.data.name}, {props.data.sys.country}</b></span><br/>
                <span className="small-date">
                    {new Date().toLocaleDateString("en-US", options)} {new Date().toLocaleTimeString()}
                </span>
            </div>
            <WeatherMain img={img} data={props.data}/>
            <WeatherData data={props.data}/>
            <SunData moredata={props.moredata}/>
        </div>
    )
}

export default MainData;