import { React } from 'react';

function SunData(props) {
    return (
        <div>
            <p className="details">Sunrise:  {props.sundata.sunrise}</p>
            <p className="details">Sunset: {props.sundata.sunset}</p>
            <p className="details">Dawn: {props.sundata.dawn}</p>
            <p className="details">Dusk: {props.sundata.dusk}</p>
            <p className="details">Golden Hour: {props.sundata.golden_hour}</p>
            <p className="details">Day Length: {props.sundata.day_length}</p>
        </div>
    )
}

export default SunData;