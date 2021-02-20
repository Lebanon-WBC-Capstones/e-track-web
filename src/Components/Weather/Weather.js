// http://api.openweathermap.org/data/2.5/weather?q=tripoli,lb&APPID=05d7bd1f7af88c88e838a9bb3ba46e8f
import { useEffect, useState } from 'react';
function Weather() {
  const [weather, setWeather] = useState(undefined);

  async function fetchWeather() {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=tripoli,lb&APPID=05d7bd1f7af88c88e838a9bb3ba46e8f'
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-wrap p-3 w-1/5 min-w-min justify-items-center content-center">
      {weather !== undefined ? (
        <>
          <figure>
            <img
              className="w-16 h-16 rounded-full mr-5 "
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </figure>
          <div className="text-Grey">
            <p className="font-medium text-Grey text-base">
              {parseInt(weather.main.temp - 273.15)} °C{' '}
            </p>
            <p className="text-gray-400">
              Feels like {parseInt(weather.main.feels_like - 273.15)} °C
            </p>
            <p className="text-gray-400">{weather.weather[0].description}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default Weather;
