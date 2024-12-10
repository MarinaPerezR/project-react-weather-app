import React from "react";
import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
         <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city.." className="form-control"/>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
         </div>   
        </form>
        <h1>London</h1>
        <ul>
            <li>Cloudy</li>
            <li>Tuesday 07:00</li>
        </ul>  
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/>

                6°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitations: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 13 km/h</li>
                </ul>
            </div>
        </div>
    </div>

    );      
}