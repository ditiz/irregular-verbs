import React from 'react';
import Choose from '../Choose/Choose';
import { VerbAttribute } from '../types';

interface IChooseFr {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChooseFr({ score, setScore, resetScore, setReload }: IChooseFr) {
    const title = (
        <span>
            Trouver la <strong>traduction</strong>
        </span>
    );

    const use = VerbAttribute.fr;

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

export default ChooseFr;
