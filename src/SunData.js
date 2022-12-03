import { React } from 'react';

function SunData(props) {
    const moredata = props.moredata;
    return (
        <div>
            <p className="details">Sunrise:  {moredata.sunrise}</p>
            <p className="details">Sunset: {moredata.sunset}</p>
            <p className="details">Dawn: {moredata.dawn}</p>
            <p className="details">Dusk: {moredata.dusk}</p>
            <p className="details">Golden Hour: {moredata.golden_hour}</p>
            <p className="details">Day Length: {moredata.day_length}</p>
        </div>
    )
}

export default SunData;