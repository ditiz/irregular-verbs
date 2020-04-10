import React from "react";
import Choose from "../Choose/Choose";
import { VerbAttribute } from "../types";
import PastIndicator from "../Indicators/PastIndicator";

interface IChoosePast {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChoosePast({ score, setScore, resetScore, setReload }: IChoosePast) {
    const title = (
        <span>
            Trouver la forme <strong>prétérit (passé)</strong>
            <PastIndicator />
        </span>
    );

    const use = VerbAttribute.past;

    return (
        <Choose
            score={score}
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
            use={use}
            title={title}
        />
    );
}

export default ChoosePast;
