import { React } from 'react';

function SunData(props) {
    return (
        <div>
            <p className="details">Sunrise:  {props.moredata.sunrise}</p>
            <p className="details">Sunset: {props.moredata.sunset}</p>
            <p className="details">Dawn: {props.moredata.dawn}</p>
            <p className="details">Dusk: {props.moredata.dusk}</p>
            <p className="details">Golden Hour: {props.moredata.golden_hour}</p>
            <p className="details">Day Length: {props.moredata.day_length}</p>
        </div>
    )
}

export default SunData;