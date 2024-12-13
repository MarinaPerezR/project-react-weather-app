import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="London" />
       <footer>
          This project was coded by{" "}
          <a href='https://github.com/MarinaPerezR' rel="noreferrer" target='_blank'>Marina P.R.</a> and is open-sourced on{" "}
          <a href='https://github.com/MarinaPerezR/project-react-weather-app' rel="noreferrer" target='_blank'>GitHub</a>
       </footer> 
      </div>
    </div>
  );
}


