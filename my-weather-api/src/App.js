// src/App.js
import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";
const API_KEY = "aea7a4b69928005f64bfa34a0e0de1dd";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setError("City not found. Please enter a valid city name.");
      }
    } catch (err) {
      setError("Error fetching weather data. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <CitySearch onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} error={error} />
    </div>
  );
};

export default App;
