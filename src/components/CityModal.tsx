import { useState } from "react";

function CityModal({ setIsOpen }: { setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void }) {
    const [cityName, setCityName] = useState("");
    const weatherApi = import.meta.env.VITE_WEATHER_API_KEY;
    const handleSubmit = async () => {
        // Handle the city name submission logic here
        console.log("City submitted:", cityName);
        localStorage.setItem('cityName', cityName);
        // Close the modal or perform other actions as needed
        // For example, you might want to set a state in the parent component to close the modal
  // Reload to reflect changes in App component

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
            localStorage.setItem('lat', lat);
            localStorage.setItem('lon', lon);
        } else {
            console.warn("No location found for given city name");
        }
    setIsOpen(false);
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-80 text-center text-black" >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Enter City Name</h2>
                <input
                    type="text"
                    placeholder="City Name"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={cityName}
                    onChange={e => setCityName(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CityModal;