
import { useState } from 'react';
import './App.css'

import MainContent from './MainContent';

function App() {
  const [cityName, setCityName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  // Env variables in Vite are accessed via import.meta.env (removed require('dotenv').config())
  const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;


  return (
    <div className='relative min-h-screen text-white'>
      {/* {isModalOpen && <CityModal setIsOpen={setIsModalOpen} />} */}
      <div className='fixed inset-0 bg-custom-bg -z-10 pointer-events-none' />
      <MainContent />
    </div>

  )
}

export default App
