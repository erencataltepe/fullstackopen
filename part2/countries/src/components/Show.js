import { useState, useEffect } from "react";
import axios from "axios";

function Show({ country }) {
  const [weatherData, setWeatherData] = useState("");
  const [icon, setIcon] = useState("");

  const countryName = country.name.common;
  const capital = country.capital;
  const area = country.area;
  const languages = Object.values(country.languages);
  const flag = country.flags.png;
  const [lat, lng] = country.latlng;
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`
      )
      .then((response) => {
        setWeatherData(response.data);
        setIcon(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
      });
  }, [api_key, lat, lng]);

  if (weatherData === "") {
    return <div>Fetching country info...</div>;
  } else {
    return (
      <div>
        <h2>{countryName}</h2>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <h3>Languages: </h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <div>
          <img src={flag} alt="country flag" />
        </div>
        <h2>Weather in {capital}</h2>
        <div>
          <p>Temperature {(weatherData.main.temp - 273.15).toFixed(2)}</p>
          <img src={icon} alt="weather icon" />
          <p>Wind {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    );
  }
}

export default Show;
