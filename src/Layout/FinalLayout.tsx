interface FinalLayoutProps {
    time: string;
    level: string;
    resultat: string;
    setDensite: (densite: number) => void;
}

const FinalLayout: React.FC<FinalLayoutProps> = ({ resultat, time, level, setDensite }) => {

    return (
        <div className="flex flex-col items-center w-60 h-60 justify-around">
            <h2 className="text-3xl font-black mb-4">{resultat}</h2>
            <div className="flex w-full text-lg">
                <div className="mr-4">Temps</div>
                <div>{time}</div>
            </div>
            <div className="flex w-full text-lg">
                <div className="mr-4">Niveau</div>
                <div>{level}</div>
            </div>
            <button onClick={() => setDensite(0)} className="block w-full rounded-lg bg-indigo-600 p-3 text-sm font-medium text-white">Recommencé</button>
        </div>
    );
}

export default FinalLayout;