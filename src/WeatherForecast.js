import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect( () => {
       setLoaded(false);
    }, [props.city]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);

    }

    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                      if (index < 5) {
                       return (
                         <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                         </div>   
                       );
                      } 
                    })}
                    
                </div>
            </div>
        );


    } else {
        let apiKey = "40b5c70t36fead3dof40b74ca69cca04";
      let city = props.city;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
        
    }

    
}    