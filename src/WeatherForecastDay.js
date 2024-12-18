import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum)
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum)
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div className="ForecastDay">
            <div className="WeatherForecast-day fw-bold">{day()}</div>
              <img src={props.data.condition.icon_url} alt="weather-icon" style={{ width: "70px" }} />
                <div className="WeatherForecast-temperatures">
                 <span className="WeatherForescast-temperature-max">{maxTemperature()}</span>
                 <span className="WeatherForescast-temperature-min ms-2 opacity-50">{minTemperature()}</span>
                </div>  
        </div>
               
    );
}