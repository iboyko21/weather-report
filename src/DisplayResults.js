import React from "react";
import GoogleMaps from "./GoogleMaps";
import MainData from "./MainData";
import "./weather.css";

function DisplayResults(props) {
    if(props.data) {
        return (
            <div id="data">
                <GoogleMaps name={props.data.name} />
                <MainData data={props.data} sundata={props.sundata} weather={props.weather} />         
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DisplayResults;