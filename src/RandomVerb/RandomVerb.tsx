import React, { useCallback, useState } from 'react';
import Choices from '../Choices/Choices';
import verbs from '../data/verbs.json';
import Message from '../Message/Message';
import { getRandomVerb } from '../utils';

interface IRandomVerb {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

function RandomVerb({ score, setScore }: IRandomVerb) {
    const [messageStatus, setMessageStatus] = useState<'truth' | 'wrong' | 'ignore'>('ignore');
    const [verb, setVerb] = useState(verbs[getRandomVerb()]);

    const truth = useCallback(() => {
        setScore((score) => score + 1);
        setMessageStatus('truth');
    }, [setScore]);

    const wrong = useCallback(() => {
        setMessageStatus('wrong');
        setScore(0);
    }, []);

    const next = () => {
        setMessageStatus('ignore');
        setVerb(verbs[getRandomVerb()]);
    };

    const title = (
        <span>
            Trouver la forme <strong>passé</strong>
        </span>
    );

    return (
        <div className="content">
            <h2>{verb.base}</h2>
            <Message title={title} status={messageStatus} next={next} />
            <Choices verbResponse={verb} handleTruth={truth} handleWrong={wrong} score={score} />
        </div>
    );
}

export default RandomVerb;
