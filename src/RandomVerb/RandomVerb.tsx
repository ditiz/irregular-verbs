import React, { useEffect, useState } from "react";
import ChooseFr from "../Choose/ChooseFr/ChooseFr";
import ChooseParticiple from "../Choose/ChooseParticiple/ChooseParticiple";
import ChoosePast from "../Choose/ChoosePast/ChoosePast";
import { randNumber } from "../utils";
import WriteParticiple from "../Write/WriteParticiple/WriteParticiple";
import WritePast from "../Write/WritePast/WritePast";

interface IRandomVerbProps {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
}

function RandomVerb({ score, setScore, resetScore }: IRandomVerbProps) {
    const [reload, setReload] = useState(false);
    const [elements] = useState<JSX.Element[]>([
        <ChoosePast
            score={score}
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
        />,
        <ChooseParticiple
            score={score}
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
        />,
        <ChooseFr
            score={score}
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
        />,
        <WritePast
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
        />,
        <WriteParticiple
            setScore={setScore}
            resetScore={resetScore}
            setReload={setReload}
        />,
    ]);

    const [render, setRender] = useState<JSX.Element>(
        elements[randNumber(elements.length)]
    );

    useEffect(() => {
        if (reload) {
            setRender(elements[randNumber(elements.length)]);
            setReload(false);
        }
    }, [elements, setRender, score, reload]);

    return render;
}

export default RandomVerb;
