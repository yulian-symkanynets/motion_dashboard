import { useEffect, useRef, useState } from "react";

function CardFocus() {
    const totalSeconds = 25 * 60;
    const [timeLeft, setTimeLeft] = useState(totalSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const progress = (timeLeft / totalSeconds) * circumference;

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isRunning, timeLeft]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const stopTimer = () => {
        setIsRunning(false);
        setTimeLeft(totalSeconds);
    };

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");

    return (
        <div className="bg-[#1b1d2a] p-6 rounded-xl shadow-lg flex flex-col items-center text-white">
            <h2 className="text-lg mb-4">Focus</h2>

            <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 192 192">
                    <circle cx="96" cy="96" r={radius} stroke="#2b2f3f" strokeWidth="10" fill="none" />
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="#2563eb"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-linear"
                    />
                </svg>

                <div className="absolute text-3xl font-semibold">
                    {minutes}:{seconds}
                </div>
            </div>

            <div className="flex gap-3 mt-6">
                <button onClick={startTimer} className="px-4 py-2 bg-[#2b2f3f] rounded-full hover:bg-[#374151]">
                    start
                </button>
                <button onClick={pauseTimer} className="px-4 py-2 bg-[#2b2f3f] rounded-full hover:bg-[#374151]">
                    pause
                </button>
                <button onClick={stopTimer} className="px-4 py-2 bg-[#2b2f3f] rounded-full hover:bg-[#374151]">
                    stop
                </button>
            </div>
        </div>
    );
}

export default CardFocus;