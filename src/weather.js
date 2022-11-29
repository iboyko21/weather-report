import React, {Component} from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: "",
            weather: ""
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

            this.setState({
                data: data,
                weather: data.weather[0].main
            });
        }

        componentDidUpdate() {
            console.log(this.state);
        }
    
    handleOnChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Weather App</h1>
                        <form>
                            <input type="text" id="city" placeholder="enter city" value={this.state.city} onChange={this.handleOnChange}/>
                            <button onClick={this.handleOnClick}>Submit</button>
                        </form>
                </div>
                <DisplayWeather data={this.state.data} weather={this.state.weather}/>
            </div>
        );
    }
}



export default Weather;