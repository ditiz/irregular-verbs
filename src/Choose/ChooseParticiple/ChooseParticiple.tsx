import React from "react";
import Choose from "../Choose";
import { VerbAttribute, IVerb } from "../../types";
import ParticipleIndicator from "../../Indicators/ParticipleIndicator";

interface IChooseParticiple {
    activeVerbs: IVerb[];
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChooseParticiple({
    activeVerbs,
    score,
    setScore,
    resetScore,
    setReload,
}: IChooseParticiple) {
    const title = (
        <span>
            Trouver la forme <strong>participe passé</strong>
            <ParticipleIndicator />
        </span>
    );

    const use = VerbAttribute.participle;

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

export default ChooseParticiple;
