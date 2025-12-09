import React, { useState } from "react";

export type TimeFormat ={
    hours : number, 
    minutes : number,
    seconds : number 
}


function Time() {

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        const data: TimeFormat = {
            hours: parseInt(hours),
            minutes: parseInt(minutes),
            seconds: parseInt(seconds)
        }; 

        return data;
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    

    
    return (
        <div>
            <div className="text-white font-bold text-5xl">
                {currentTime.hours.toString().padStart(2, '0')}:
                {currentTime.minutes.toString().padStart(2, '0')}:
                {currentTime.seconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
}

export default Time;