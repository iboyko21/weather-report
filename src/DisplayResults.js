import React from "react";
import GoogleMaps from "./GoogleMaps";
import MainData from "./MainData";
import "./weather.css";

function DisplayResults(props) {
    const data = props.data;
    if(props.data) {
        return (
            <div id="data">
                <GoogleMaps name={data.name} />
                <MainData data={data} moredata={props.moredata} weather={props.weather} />         
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DisplayResults;