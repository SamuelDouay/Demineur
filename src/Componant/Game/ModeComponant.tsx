import { Bomb, Goal } from "lucide-react";
import ModeButton from "./ModeButton";
import { useEffect } from "react";

interface ModeProps {
    selectedMode: number;
    setSelectedMode: (mode: number) => void;
}

const ModeComponant: React.FC<ModeProps> = ({ selectedMode, setSelectedMode }) => {
    const modes = [<Bomb />, <Goal />];

    useEffect(() => {
        const modeGameElement = document.querySelector("#modeGame");
        if (modeGameElement) {
            if (selectedMode === 1) {
                modeGameElement.classList.add("translate-x-[70%]");
            } else {
                modeGameElement.classList.remove("translate-x-[70%]");
            }
        }

    }, [selectedMode]);


    return (
        <div className="w-2/5 uppercase rounded-lg border border-gray-200 p-3 flex items-center relative">
            {modes.map((modeName, index) => (
                <ModeButton key={index} name={modeName} numberMode={index} setSelectedMode={setSelectedMode}/>
            ))}
            <span id="modeGame" className="bg-black shadow text-white flex items-center justify-center w-1/2 rounded-lg h-9 absolute transition-all">
                {modes[selectedMode]}
            </span>
        </div>
    );
}

export default ModeComponant;