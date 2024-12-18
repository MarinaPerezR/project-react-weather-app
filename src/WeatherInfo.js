import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
           
             <h1 className="mb-3">
             <i className="bi bi-geo-alt-fill"> </i>
                {props.data.city}
             </h1>
            
                <ul>
                    <li>
                     <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">-{props.data.description}-</li>
                </ul>  
                <div className="row mt-3 mx-1">
                    <div className="IconTemp col-6 mb-4">
                        <div className="clearfix">
                            <div className="float-left">
                              <img src={props.data.iconUrl} alt={props.data.description} style={{ width: "120px" }} />
                            </div>
                           
                            <div className="float-left mt-4">
                              <WeatherTemperature celsius={props.data.temperature} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <ul>  
                            <li className="mt-4">
                            <i class="bi bi-droplet"> </i>
                                Humidity: {props.data.humidity}%</li>
                            <li>
                            <i className="bi bi-wind"> </i>
                                Wind: {props.data.wind} m/s</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}