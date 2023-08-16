import { useEffect, useState } from "react";
import { Demineur } from "../../Model/Demineur/Demineur";
import CaseView from "./CaseView";

interface GameViewProps {
    width: number;
    height: number;
    densite: number;
    handleMode: () => boolean;
    recupNombreCaseSafe: (nbCaseSafe: number) => void;
    isEndGame: (resultat: number) => void;
}

const GameView: React.FC<GameViewProps> = ({ width, height, densite, handleMode, recupNombreCaseSafe, isEndGame }) => {
    const [caseView, setCaseView] = useState<JSX.Element[]>([]);
    const [game] = useState<Demineur>(() => new Demineur(width, height, densite));

    const updateCaseViews = () => {
        const caseViews: JSX.Element[] = [];
        for (let i = 0; i < game.getPlateau.getWidth; i++) {
            for (let j = 0; j < game.getPlateau.getHeight; j++) {
                const caseData = game.getPlateau.getGame[i][j];
                caseViews.push(
                    <CaseView
                        key={`${i}-${j}`}
                        w={i}
                        h={j}
                        voisin={caseData.getNbBombVoisin}
                        show={caseData.isShow}
                        mode={caseData.getModeBomb}
                    />
                );
            }
        }

        setCaseView(caseViews);
    };

    useEffect(() => {
        game.initGame();
        recupNombreCaseSafe(game.getPlateau.getNbCaseSafe);
        updateCaseViews();
    }, [game]);

    const handleShowCase = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLDivElement) {

            const classNames = e.target.getAttribute("class")?.split(' ');
            const widthValue = classNames?.find(value => /^width-/.test(value))?.split('-')[1];
            const heightValue = classNames?.find(value => /^height-/.test(value))?.split('-')[1];

            if (widthValue && heightValue) {
                const width = parseInt(widthValue);
                const height = parseInt(heightValue);

                game.showCase(width, height, handleMode());
                updateCaseViews();

                if (game.getPlateau.getNbCaseSafe < 1) {
                    setTimeout(() => isEndGame(game.getPlateau.getNbCaseSafe), 500);
                }
            }
        }
    }

    return (
        <div onClick={handleShowCase} className="grid-cols-10 grid gap-px bg-gray-600 rounded-md">
            {caseView}
        </div>
    );
};

export default GameView;
