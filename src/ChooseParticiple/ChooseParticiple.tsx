import React from 'react';
import Choose from '../Choose/Choose';
import { VerbAttribute } from '../types';

interface IChooseParticiple {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChooseParticiple({ score, setScore, resetScore, setReload }: IChooseParticiple) {
    const title = (
        <span>
            Trouver la forme <strong>participe passé</strong>
        </span>
    );

    const use = VerbAttribute.participle;

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

export default ChooseParticiple;
