import React, { useEffect, useState } from "react";
import MenuLayout from "../Layout/MenuLayout";
import GameLayout from "../Layout/GameLayout";
import FinalLayout from "../Layout/FinalLayout";

const DemineurPage = () => {
    const [densite, setDensite] = useState<number>(0);
    const [resultat, setResultat] = useState<string>('Gagné/Perdu');
    const [time, setTime] = useState<string>('00:00');
    const [level, setLevel] = useState<string>('Level');
    const [render, setRender] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        if (densite === 0) {
            setRender(<MenuLayout setDensite={setDensite} setLevel={setLevel} />);
        } else if (densite === -1) {
            setRender(<FinalLayout resultat={resultat} level={level} time={time} setDensite={setDensite} />);
        } else {
            setRender(<GameLayout densite={densite} setDensite={setDensite} handleEndGame={handleEndGame} />);
        }
    }, [densite]);

    const handleEndGame = (endTime: string, gameResult: string) => {
        setResultat(gameResult);
        setTime(endTime);
        setDensite(-1);
    };

    return (
        <section className="min-h-screen min-w-full flex items-center flex-col justify-center bg-neutral-300">
            <div className="shadow-x1 p-10 bg-white rounded">
                {render}
            </div>
        </section>
    );
};

export default DemineurPage;
