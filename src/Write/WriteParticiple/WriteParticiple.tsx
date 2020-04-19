import React from "react";
import { VerbAttribute, IVerb } from "../../types";
import Write from "../Write";
import ParticipleIndicator from "../../Indicators/ParticipleIndicator";

interface IWriteParticiple {
    activeVerbs: IVerb[],
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteParticiple({
    activeVerbs,
    setScore,
    resetScore,
    setReload,
}: IWriteParticiple) {
    const use = VerbAttribute.participle;

    const title = (
        <span>
            Trouver la forme <strong>participe passé</strong>
            <ParticipleIndicator />
        </span>
    );

    return (
        <Write
            activeVerbs={activeVerbs}
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
            use={use}
            title={title}
        />
    );
}

export default WriteParticiple;
