import React from "react";
import Choose from "../Choose";
import { VerbAttribute, IVerb } from "../../types";
import FrIndicator from "../../Indicators/FrIndicator";

interface IChooseFr {
    activeVerbs: IVerb[];
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChooseFr({
    activeVerbs,
    score,
    setScore,
    resetScore,
    setReload,
}: IChooseFr) {
    const title = (
        <span>
            Trouver la <strong>traduction</strong>
            <FrIndicator />
        </span>
    );

    const use = VerbAttribute.fr;

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

export default ChooseFr;
