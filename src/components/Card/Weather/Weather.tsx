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
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cbb94e086f9f646da25928e2c41d4439`
    );
    const data = await response.json();
    if (response.status !== 200) {
      return null;
    }
    return data;
  };
  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);

  React.useEffect(() => {
    getWeather().then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) return <div className="flex justify-center flex-row align-center gap-15">
    Nothing found
  </div>;
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
