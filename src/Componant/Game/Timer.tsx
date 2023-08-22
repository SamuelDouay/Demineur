import { useEffect } from "react";

interface TimerProps {
    nombreBombe: number;
    time: number;
    setTime: (timer: number) => void;
}

const Timer: React.FC<TimerProps> = ({ nombreBombe, time, setTime }) => {
    useEffect(() => {
        const intervalId = setInterval(() => setTime(1 + Number(time)), 10);
        return () => clearInterval(intervalId);
    });

    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return (
        <div className="py-3 px-2 rounded-lg border border-gray-200 w-1/3">
            <span className="bg-black py-2 px-3 rounded-full text-center text-white mr-4">{nombreBombe}</span>
            {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </div>
    );
}

export default Timer;