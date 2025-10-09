
import { useState } from 'react';
import './App.css'

import CityModal from './components/CityModal';
import CardWeather from './CardWeather';
import CardFocus from './CardFocus';

function App() {
  const [cityName, setCityName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  // Env variables in Vite are accessed via import.meta.env (removed require('dotenv').config())
  const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;

  async function getWeather() {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${weatherApi}`);
      console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${weatherApi}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(response);
      if (result.length > 0) {
        const { lat, lon, name, country } = result[0];
        console.log(`Location: ${name}, ${country} (${lat}, ${lon})`);
      } else {
        console.warn("No location found for given city name");
      }
    } catch {
      console.error("Fetch error");
    }
  }


  return (
    <div className='relative min-h-screen text-white'>
      {isModalOpen && <CityModal setIsOpen={setIsModalOpen} />}
      <div className='fixed inset-0 bg-gray-900 -z-10 pointer-events-none' />
      <div>
        <CardWeather>
          ☀︎
        </CardWeather>
        <CardFocus/>
      </div>
      <div>
        { }
      </div>
    </div>

  )
}

export default App
