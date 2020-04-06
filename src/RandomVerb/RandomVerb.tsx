import React, { useEffect, useState } from 'react';
import GuestFr from '../ChooseFr/ChooseFr';
import GuestParticiple from '../ChooseParticiple/ChooseParticiple';
import GuestPast from '../ChoosePast/ChoosePast';
import { randNumber } from '../utils';
import WriteParticiple from '../WriteParticiple/WriteParticiple';
import WritePast from '../WritePast/WritePast';

interface IRandomVerbProps {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
}

function RandomVerb({ score, setScore, resetScore }: IRandomVerbProps) {
    const [reload, setReload] = useState(false);
    const [elements] = useState<JSX.Element[]>([
        <GuestPast score={score} setScore={setScore} resetScore={resetScore} setReload={setReload} />,
        <GuestParticiple score={score} setScore={setScore} resetScore={resetScore} setReload={setReload} />,
        <GuestFr score={score} setScore={setScore} resetScore={resetScore} setReload={setReload} />,
        <WritePast setScore={setScore} resetScore={resetScore} setReload={setReload} />,
        <WriteParticiple setScore={setScore} resetScore={resetScore} setReload={setReload} />,
    ]);

    const [render, setRender] = useState<JSX.Element>(elements[randNumber(elements.length)]);

    useEffect(() => {
        if (reload) {
            setRender(elements[randNumber(elements.length)]);
            setReload(false);
        }
    }, [elements, setRender, score, reload]);

    return render;
}

export default RandomVerb;
