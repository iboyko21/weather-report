import React, {Component} from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: "",
            weather: "",
            moredata: "",
            mapcity: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    async handleOnClick(event) {
        event.preventDefault();
            const API_KEY = "35744fcbc64af99ab966567e92a887df";
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=imperial`)
            .then(res => res.json())
            .then(data => data);

            const moredata = await fetch(`https://api.sunrisesunset.io/json?lat=${data.coord.lat}&lng=${data.coord.lon}&date=today`)
            .then(res => res.json())
            .then(data => data);

            this.setState({
                data: data,
                weather: data.weather[0].main,
                moredata: moredata.results,
                mapcity: data.name
            });
        }

    handleOnChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
        
    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1 class="title title--shadow" data-text="Weather Report">Weather Report</h1>
                        <form>
                            <input type="text" id="city" className="input" placeholder="enter city" 
                                    value={this.state.city} onChange={this.handleOnChange}/><br/>
                            <button className="button" onClick={this.handleOnClick}>Submit</button>
                        </form>
                </div>
                <DisplayWeather data={this.state.data} moredata={this.state.moredata} 
                                weather={this.state.weather} city={this.state.mapcity}/>
            </div>
        );
    }
}



export default Weather;