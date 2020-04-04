import React, { useEffect, useState } from 'react';
import Choice from '../Choice/Choice';
import verbs from '../data/verbs.json';
import { IVerb } from '../IVerb';
import { getRandomVerb } from '../utils';

interface IChoices {
    verbResponse: IVerb;
    handleTruth: (trigger: boolean) => void;
    handleWrong: (trigger: boolean) => void;
    score: number;
}
function Choices({ verbResponse, handleTruth, handleWrong, score }: IChoices) {
    const [randChoices, setRandChoices] = useState<JSX.Element[]>([]);
    const [verb, setVerb] = useState<IVerb>();

    useEffect(() => {
        if (verbResponse !== verb) {
            const rand = () => verbs[getRandomVerb()];

            const choices = [<Choice key={0} response={verbResponse.past} handleClick={handleTruth} />];

            const localVerbs = [verbResponse];

            const n = score < 90 ? 3 + Math.floor(score / 10) : 12;
            for (let i = 1; i < n; i++) {
                let fake = verbResponse;

                while (localVerbs.includes(fake)) {
                    fake = rand();
                }

                choices.push(<Choice key={choices.length} response={fake.past} handleClick={handleWrong} />);
            }

            setRandChoices(
                choices.sort(() => {
                    return 0.5 - Math.random();
                }),
            );

            setVerb(verbResponse);
        }
    }, [verbResponse, handleTruth, handleWrong, score, verb, setVerb]);

    return <div className="choices">{randChoices}</div>;
}

export default Choices;
