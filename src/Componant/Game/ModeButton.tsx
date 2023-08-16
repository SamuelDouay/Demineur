import { ReactElement } from "react";

interface ModeButtonProps {
    name: ReactElement;
    numberMode: number;
    setSelectedMode: (mode: number) => void;
}

const ModeButton: React.FC<ModeButtonProps> = ({ name, numberMode, setSelectedMode }) => {

    return (
        <button onClick={() => setSelectedMode(numberMode)} value={numberMode} className="w-full h-full flex justify-center uppercase">
            {name}
        </button>
    );
}

export default ModeButton;
