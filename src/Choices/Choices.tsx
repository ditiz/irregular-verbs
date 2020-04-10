import React, { useEffect, useState, useRef } from "react";
import Choice from "../Choice/Choice";
import verbs from "../data/verbs.json";
import { IVerb, VerbAttribute } from "../types";
import { getRandomVerb } from "../utils";

interface IChoices {
    verbResponse: IVerb;
    handleTruth: (trigger: boolean) => void;
    handleWrong: (trigger: boolean) => void;
    score: number;
    use: VerbAttribute;
}

interface ITrigger {
    [x: number]: boolean;
}

function Choices({
    verbResponse,
    handleTruth,
    handleWrong,
    score,
    use,
}: IChoices) {
    const nbChoices = 3;
    const [randChoices, setRandChoices] = useState<JSX.Element[]>([]);
    const [triggers, setTriggers] = useState<ITrigger>({
        ...[...Array(nbChoices)].map(() => false),
    });
    const [verb, setVerb] = useState<IVerb>();

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        divRef.current?.focus();
    }, [divRef, verbResponse]);

    useEffect(() => {
        if (verbResponse !== verb) {
            const _handleTruth = (trigger: boolean) => {
                setTriggers({
                    ...[...Array(nbChoices)].map(() => false),
                });
                handleTruth(trigger);
            };

            const _handleWrong = (trigger: boolean) => {
                setTriggers({
                    ...[...Array(nbChoices)].map(() => false),
                });
                handleWrong(trigger);
            };

            const rand = () => verbs[getRandomVerb()];

            const choices: JSX.Element[] = [];

            choices.push(
                <Choice
                    key={0}
                    response={verbResponse[use]}
                    handleClick={_handleTruth}
                    keyTrigger={triggers[choices.length]}
                />
            );

            const localVerbs = [verbResponse];

            const n = score < 90 ? 3 + Math.floor(score / 10) : 12;
            for (let i = 1; i < n; i++) {
                let fake = verbResponse;

                while (localVerbs.includes(fake)) {
                    fake = rand();
                }

                choices.push(
                    <Choice
                        key={choices.length}
                        response={fake[use]}
                        handleClick={_handleWrong}
                        keyTrigger={triggers[choices.length]}
                    />
                );
            }

            setRandChoices(choices.sort(() => 0.5 - Math.random()));

            setVerb(verbResponse);
        } else {
            setRandChoices((choices) =>
                choices.map((choice, i) => {
                    return {
                        ...choice,
                        props: {
                            ...choice.props,
                            keyTrigger: triggers[i],
                        },
                    };
                })
            );
        }
    }, [
        verbResponse,
        score,
        verb,
        setVerb,
        use,
        triggers,
        handleTruth,
        handleWrong,
    ]);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case "1":
            case "&":
                setTriggers((ts) => ({ 0: true, 1: false, 2: false }));
                break;
            case "2":
            case "é":
                setTriggers((ts) => ({ 0: false, 1: true, 2: false }));
                break;
            case "3":
            case '"':
                setTriggers((ts) => ({ 0: false, 1: false, 2: true }));
                break;
        }
    };

    return (
        <div
            className="choices"
            tabIndex={0}
            ref={divRef}
            onKeyDown={handleOnKeyDown}
        >
            {randChoices}
        </div>
    );
}

export default Choices;
