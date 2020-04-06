import React from 'react';
import { VerbAttribute } from '../types';
import Write from '../Write/Write';

interface IWritePast {
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function WritePast({ setScore, resetScore, setReload }: IWritePast) {
    const title = (
        <span>
            Trouver la forme <strong>prétérit (passé)</strong>
        </span>
    );

    const use = VerbAttribute.past;

    return <Write setScore={setScore} resetScore={resetScore} setReload={setReload} use={use} title={title} />;
}

export default WritePast;
