import GameView from "../Componant/Game/GameView";
import ModeComponant from "../Componant/Game/ModeComponant";
import React, { useState } from "react";
import Timer from "../Componant/Game/Timer";


interface GameLayoutProps {
    densite: number;
    setDensite: (densite: number) => void;
    handleEndGame: (time: string, resultat: string) => void;
}


const GameLayout: React.FC<GameLayoutProps> = ({ densite, setDensite, handleEndGame }) => {
    const [selectedMode, setSelectedMode] = useState(0);
    const [nombreBombe, setNombreBombe] = useState(0);
    const [time, setTime] = useState(0);

    const changeMode = () => {
        return selectedMode === 0;
    }

    const recupNombreCaseSafe = (nbCaseSafe: number) => {
        setNombreBombe(100 - nbCaseSafe);
    }

    const isEndGame = (resultat: number) => {
        const minutes = Math.floor((time % 360000) / 6000);
        const seconds = Math.floor((time % 6000) / 100);
        const finaletime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
        if (resultat === 0) {
            handleEndGame(finaletime, 'Gagné');
            return;
        }
        handleEndGame(finaletime, 'Perdu');

    }

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex justify-between mb-5">
                <div onClick={() => setDensite(0)} className="rounded-lg border border-gray-200 p-3 hover:border-black hover:bg-black hover:fill-white w-14 flex items-center flex-col">
                    <div className="relative items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5">
                            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
                        </svg>
                    </div>
                </div>
                <Timer nombreBombe={nombreBombe} time={time} setTime={setTime} />
                <ModeComponant selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
            </div>
            <GameView height={10} width={10} densite={densite} handleMode={changeMode} recupNombreCaseSafe={recupNombreCaseSafe} isEndGame={isEndGame} />
        </div>
    );
}


export default GameLayout;