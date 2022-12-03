import { React } from 'react';

function GoogleMaps(props) {
    let url = `https://maps.google.com/maps?q=${props.name}&t=k&z=4&output=embed`
    return (
        <iframe src={url} className="map" title="Google Map" loading="lazy"></iframe>
    )
}

export default GoogleMaps;