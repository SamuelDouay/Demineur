import { Bomb, Goal } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CaseViewProps {
    w: number;
    h: number;
    voisin: number;
    show: boolean;
    mode: boolean;
}

const CaseView: React.FC<CaseViewProps> = ({ w, h, voisin, show, mode }) => {
    const [caseData, setCaseData] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        const idCase = document.querySelector("#w-" + w + "_h-" + h);
        if (show && mode) {
            idCase?.classList.remove("bg-pink-700");
            if (voisin === -1) {
                idCase?.classList.add("bg-red-600");
                setCaseData(<Bomb />);
            } else {
                idCase?.classList.add("bg-blue-700");
                voisin > 0 ? setCaseData(voisin) : setCaseData(null);
            }
        }
        if (!mode) {
            idCase?.classList.add("bg-pink-700");
            setCaseData(<Goal />)
        }

    }, [voisin, show, mode, h, w]);

    return (
        <div id={"w-" + w + "_h-" + h} className={`flex items-center justify-center width-${w} height-${h} w-9 h-9 text-white text-center p-1 relative rounded-lg`}>
            {caseData}
            <div className={`width-${w} height-${h} position absolute top-[3px] bottom-[3px] right-[3px] left-[3px] border rounded-md border-neutral-300 bg-black bg-opacity-10`}></div>
        </div>
    );
};

export default CaseView;
