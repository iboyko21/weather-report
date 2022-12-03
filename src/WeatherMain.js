import { React } from 'react';

function WeatherMain(props) {
    return (
        <div>
            <img src={props.img}  alt="weather logo"/>
            <p className="big">{Math.floor(props.data.main.temp)}<sup>o</sup> F </p>
            <p className="small">{props.data.weather[0].description}</p>
        </div>
    )
}

export default WeatherMain;