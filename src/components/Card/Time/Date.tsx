import { useEffect, useState } from "react";



export type DateFormat = {
    day: number;
    month: string;
    year: number;
}

function DateComponent() {

  const getCurrentTime = () => {
          const now = new Date();
          
          const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
          const data: DateFormat = {
              day: now.getDate(),
              month: monthNames[now.getMonth()],
              year: now.getFullYear()
          }; 
  
          return data;
      };
  
      const [currentTime, setCurrentTime] = useState(getCurrentTime());
  
      useEffect(() => {
          const intervalId = setInterval(() => {
              setCurrentTime(getCurrentTime());
          }, 1000); // Update every second
  
          return () => clearInterval(intervalId);
      }, []);


      return (
          <div className="flex gap-3">
              <div className="text-white font-bold text-5xl">
                  {currentTime.day} 
              </div>
                <div className="text-white font-bold text-5xl">
                    {currentTime.month}
                </div>
                <div className="text-white font-bold text-5xl">
                    {currentTime.year}
                </div>
          </div>
      );
  
}

export default DateComponent;
