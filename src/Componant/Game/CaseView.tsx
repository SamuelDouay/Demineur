import { Bomb, Goal } from "lucide-react";
import { useEffect, useState } from "react";

interface CaseViewProps {
    w: number;
    h: number;
    voisin: number;
    show: boolean;
    mode: boolean;
    isBomb: boolean;
}

const CaseView: React.FC<CaseViewProps> = ({ w, h, voisin, show, mode, isBomb }) => {
    const [caseData, setCaseData] = useState<React.ReactNode | null>(null);
    const id = "w-" + w + "_h-" + h;
    const idCase = document.querySelector("#" + id);

    useEffect(() => {
        if (!mode) {
            idCase?.classList.add("bg-pink-700");
            setCaseData(<Goal />)
        } else {
            idCase?.classList.remove("bg-pink-700");
            if (show) {
                if (isBomb) {
                    idCase?.classList.add("bg-red-600");
                    setCaseData(<Bomb />);
                } else {
                    idCase?.classList.add("bg-blue-700");
                    voisin > 0 ? setCaseData(voisin) : setCaseData(null);
                }

            } else {
                setCaseData(null);
            }
        }

    }, [voisin, show, mode, h, w, isBomb, idCase]);

    return (
        <div id={id} data-width={w} data-height={h} className={`flex items-center justify-center w-8 h-8 text-white text-center p-1 relative rounded-lg`}>
            {caseData}
            <div data-width={w} data-height={h} className={`position absolute top-[3px] bottom-[3px] right-[3px] left-[3px] border rounded-md border-neutral-300 bg-black bg-opacity-10`}></div>
        </div>
    );
};

export default CaseView;
