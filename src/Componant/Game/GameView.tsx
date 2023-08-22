import { useCallback, useEffect, useState } from "react";
import { Demineur } from "../../Controller/Demineur";
import CaseView from "./CaseView";

interface GameViewProps {
    game: Demineur;
    selectedMode: number;
    setNombreBombe: (nbCaseSafe: number) => void;
    isEndGame: (resultat: number) => void;
}

const GameView: React.FC<GameViewProps> = ({ game, selectedMode, isEndGame }) => {
    const [caseView, setCaseView] = useState<JSX.Element[]>([]);

    const updateCaseViews = useCallback(() => {
        const caseViews: JSX.Element[] = [];
        for (let i = 0; i < game.getPlateau.getWidth; i++) {
            for (let j = 0; j < game.getPlateau.getHeight; j++) {
                const caseData = game.getPlateau.getGame[i][j];
                caseViews.push(
                    <CaseView key={`${i}-${j}`} w={i} h={j}
                        voisin={caseData.getNbBombVoisin}
                        show={caseData.isShow} mode={caseData.getModeBomb}
                        isBomb={caseData.isBomb}
                    />
                );
            }
        }
        setCaseView(caseViews);
    }, [game]);

    useEffect(() => {
        updateCaseViews();
    }, [updateCaseViews]);

    const handleShowCase = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLDivElement) {
            const target = e.target as HTMLDivElement;
            const width = parseInt(target.dataset.width || '0', 10);
            const height = parseInt(target.dataset.height || '0', 10);

            if (game.getPlateau.getGame[width][height].getNbBombVoisin === -2) {
                game.initGame(width, height);
            }
            game.showCase(width, height, selectedMode === 0);

            if (game.getPlateau.getNbCaseSafe < 1) {
                game.getPlateau.showBomb(game.getPlateau.getNbCaseSafe === -1);
            }
            updateCaseViews();
        }

        if (game.getPlateau.getNbCaseSafe < 1) {
            setTimeout(() => isEndGame(game.getPlateau.getNbCaseSafe), 1000);
        }
    }

    return (
        <div onClick={handleShowCase} className="grid-cols-10 grid gap-px bg-gray-600 rounded-md">
            {caseView}
        </div>
    );
};

export default GameView;
