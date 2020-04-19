import React from "react";
import Choose from "../Choose";
import { VerbAttribute, IVerb } from "../../types";
import PastIndicator from "../../Indicators/PastIndicator";

interface IChoosePast {
    activeVerbs: IVerb[];
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChoosePast({
    activeVerbs,
    score,
    setScore,
    resetScore,
    setReload,
}: IChoosePast) {
    const title = (
        <span>
            Trouver la forme <strong>prétérit (passé)</strong>
            <PastIndicator />
        </span>
    );

    const use = VerbAttribute.past;

    return (
        <Choose
            activeVerbs={activeVerbs}
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
