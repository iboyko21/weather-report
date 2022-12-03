import { React } from 'react';

function WeatherData(props) {
    const data = props.data;
    return (
        <div>
            <p className="details">Feels like: {Math.floor(data.main.feels_like)} F</p>
            <p className="details">Low: {Math.floor(data.main.temp_min)} F</p>
            <p className="details">High: {Math.floor(data.main.temp_max)} F</p>
            <p className="details">Wind: {Math.floor(data.wind.speed * 0.681818)} mph</p>
            <p className="details">Humidity: {data.main.humidity}%</p>
            <p className="details">Pressure:  {data.main.pressure} hPa</p>
        </div>
    )
}

export default WeatherData;