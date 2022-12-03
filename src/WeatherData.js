import { React } from 'react';

function WeatherData(props) {
    return (
        <div>
            <p className="details">Feels like: {Math.floor(props.data.main.feels_like)} F</p>
            <p className="details">Low: {Math.floor(props.data.main.temp_min)} F</p>
            <p className="details">High: {Math.floor(props.data.main.temp_max)} F</p>
            <p className="details">Wind: {Math.floor(props.data.wind.speed * 0.681818)} mph</p>
            <p className="details">Humidity: {props.data.main.humidity}%</p>
            <p className="details">Pressure:  {props.data.main.pressure} hPa</p>
        </div>
    )
}

export default WeatherData;