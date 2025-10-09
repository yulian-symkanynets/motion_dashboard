import React from "react";

type CardProps = {
    children: React.ReactNode;
}

function CardWeather({children} : CardProps) {

    const cityName = localStorage.getItem('cityName') || 'London';
const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;
    
    const getWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApi}`);
        const data = await response.json();
        return data;
    }   

    const [weatherData, setWeatherData] = React.useState(null);

    React.useEffect(() => {
        getWeather().then(data => setWeatherData(data));
    }, []);

    return(
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 w-72 h-72 flex flex-col items-center justify-center text-6xl">
            {weatherData ? (
                <>
                    <div className="font-bold justify-center">{weatherData.name}</div>
                    <div className="text-2xl">{weatherData.weather[0].description}</div>
                    <div>{Math.round(weatherData.main.temp - 273.15)}°C</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )

}

export default CardWeather;