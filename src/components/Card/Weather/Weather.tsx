import { IoSunnyOutline } from "react-icons/io5";

import React from "react";

type WeatherData = {
  main: {
    temp: number;
  };
  name: string;
};

function Weather() {
  // const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;
  const cityName = localStorage.getItem("cityName") || "London";
  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6736dd7600e80cd8bdf0be2a765c91b8`
    );
    const data = await response.json();
    return data;
  };
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);

  React.useEffect(() => {
    getWeather().then((data) => setWeatherData(data));
  }, []);

  return (
    <div className="flex flex-row align-center gap-15">
      <IoSunnyOutline size={70} color="FAD656" />
      <div className="flex flex-col items-center">
        {weatherData ? (
          <div className="font-bold justify-center text-5xl text-white">
            {(weatherData.main.temp - 273.15).toFixed(0)}°C
          </div>
        ) : (
          <div>Loading...</div>
        )}
        {weatherData ? (
          <div className="font-bold text-2xl justify-center text-white">{weatherData.name}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
export default Weather;
