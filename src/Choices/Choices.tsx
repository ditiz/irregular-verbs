import React, { useEffect, useState, useRef } from "react";
import Choice from "./Choice/Choice";
import { IVerb, VerbAttribute } from "../types";
import { getRandomVerb } from "../utils";

interface IChoices {
    activeVerbs: IVerb[];
    verbResponse: IVerb;
    handleTruth: (trigger: boolean) => void;
    handleWrong: (trigger: boolean) => void;
    score: number;
    use: VerbAttribute;
    triggerNext: boolean;
    setTriggerNext: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITrigger {
    [x: number]: boolean;
}

function Choices({
    activeVerbs,
    verbResponse,
    handleTruth,
    handleWrong,
    score,
    use,
    triggerNext,
    setTriggerNext,
}: IChoices) {
    const nbChoices = 3;
    const [randChoices, setRandChoices] = useState<JSX.Element[]>([]);
    const [triggers, setTriggers] = useState<ITrigger>({
        ...[...Array(nbChoices)].map(() => false),
    });
    const [reloadTriggers, setReloadTriggers] = useState<boolean>(false);
    const [verb, setVerb] = useState<IVerb>();

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        divRef.current?.focus();
    }, [divRef, verbResponse]);

    useEffect(() => {
        setTriggers({
            ...[...Array(nbChoices)].map(() => false),
        });
        setReloadTriggers(true);
        setTriggerNext(false);
    }, [triggerNext, setTriggers, setTriggerNext, setReloadTriggers]);

    useEffect(() => {
        if (verbResponse !== verb && !triggerNext) {
            const _handleTruth = (trigger: boolean) => {
                handleTruth(trigger);
            };

            const _handleWrong = (trigger: boolean) => {
                handleWrong(trigger);
            };

            const rand = () => activeVerbs[getRandomVerb(activeVerbs, verb)];

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
        } else if (reloadTriggers) {
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

            setReloadTriggers(false);
        }
    }, [
        verbResponse,
        score,
        verb,
        activeVerbs,
        setVerb,
        use,
        triggers,
        triggerNext,
        reloadTriggers,
        setReloadTriggers,
        handleTruth,
        handleWrong,
    ]);

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case "1":
            case "&":
                setTriggers((ts) => ({ 0: true, 1: false, 2: false }));
                setReloadTriggers(true);
                break;
            case "2":
            case "é":
                setTriggers((ts) => ({ 0: false, 1: true, 2: false }));
                setReloadTriggers(true);
                break;
            case "3":
            case '"':
                setTriggers((ts) => ({ 0: false, 1: false, 2: true }));
                setReloadTriggers(true);
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
