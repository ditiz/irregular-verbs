import React from "react";
import { VerbAttribute, IVerb } from "../../types";
import Write from "../Write";
import PastIndicator from "../../Indicators/PastIndicator";

interface IWritePast {
    activeVerbs: IVerb[];
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function WritePast({
    activeVerbs,
    setScore,
    resetScore,
    setReload,
}: IWritePast) {
    const title = (
        <span>
            Trouver la forme <strong>prétérit (passé)</strong>
            <PastIndicator />
        </span>
    );

    const use = VerbAttribute.past;

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

export default WritePast;
