import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import { VerbAttribute, IVerb } from "../types";
import { getRandomVerb, initHint, randNumber } from "../utils";

interface IWrite {
    activeVerbs: IVerb[];
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
    use: VerbAttribute;
    title: JSX.Element;
}

function Write({
    activeVerbs,
    setScore,
    resetScore,
    setReload,
    use,
    title,
}: IWrite) {
    const [verb, setVerb] = useState(activeVerbs[getRandomVerb(activeVerbs)]);

    const [messageStatus, setMessageStatus] = useState<
        "truth" | "wrong" | "ignore"
    >("ignore");
    const [inputValue, setInputValue] = useState("");
    const [hint, setHint] = useState<string>(initHint(verb[use]));
    const [trigger, setTrigger] = useState<boolean>(false);

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setHint((h) => {
            if (verb[use] !== h) {
                return initHint(verb[use]);
            }
            return h;
        });
    }, [verb, use]);

    useEffect(() => {
        refInput.current?.focus();
    }, [verb]);

    const truth = (trigger: boolean) => {
        setMessageStatus("truth");

        if (!trigger) {
            setScore((s) => s + 1);
            setTrigger(false);
        }
    };

    const wrong = () => {
        setMessageStatus("wrong");
        resetScore();

        setHint((h) => {
            if (h === verb[use]) {
                return h;
            }

            let index = randNumber(h.length);
            let result = h;

            if (verb[use].length !== activeVerbs.length) {
                result =
                    h.substr(0, index) + verb[use][index] + h.substr(index + 1);
            }

            while (h[index] !== "-") {
                index = randNumber(h.length);
                result =
                    h.substr(0, index) + verb[use][index] + h.substr(index + 1);
            }

            return result;
        });
    };

    const next = () => {
        const newVerb = activeVerbs[getRandomVerb(activeVerbs, verb)];
        setMessageStatus("ignore");
        setVerb(newVerb);
        setReload(true);
        setHint(initHint(verb[use]));
        setInputValue("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);

    const check = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = inputValue.trim().toLowerCase();
        if (value === verb[use]) {
            truth(trigger);
        } else {
            wrong();
        }
    };

    return (
        <div className="content">
            <h2>{verb.base}</h2>
            <Message
                title={title}
                status={messageStatus}
                next={next}
                verb={verb}
            />
            <div className="hint">
                <small>indice:</small> {hint}
            </div>
            <form onSubmit={check} className="response">
                <input
                    type="text"
                    autoFocus
                    ref={refInput}
                    value={inputValue}
                    onChange={handleChange}
                />
                <input type="submit" value="Valider" />
            </form>
        </div>
    );
}

export default Write;
