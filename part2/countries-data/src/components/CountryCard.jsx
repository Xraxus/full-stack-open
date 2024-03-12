import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryCard({ country }) {
  const weatherKey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${weatherKey}`
      )
      .then((response) => response.data[0])
      .then((response) =>
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${response.lat}&lon=${response.lon}&appid=${weatherKey}&units=metric`
        )
      )
      .then((response) => setWeatherData(response.data));
  }, []);

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital - {country.capital[0]}</p>
      <p>Area - {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h4>Weather:</h4>
      <p>Temperature: {weatherData?.main?.temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`}
      ></img>
      <p>Wind: {weatherData?.wind?.speed} m/s</p>
    </>
  );
}
