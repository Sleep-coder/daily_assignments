import React from "react";

const WeatherDisplay = ({ weather, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (!weather) {
    return <div>Enter city to search</div>;
  }

  const { name, main, weather: weatherInfo } = weather;

  return (
    <div className="container weather-details">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Condition: {weatherInfo[0].description}</p>
      <p>Time: {Math.floor(Date.now() / 1000)}</p>
    </div>
  );
};

export default WeatherDisplay;
