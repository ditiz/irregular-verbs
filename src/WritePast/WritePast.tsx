import React, { useEffect, useRef, useState } from "react";
import verbs from "../data/verbs.json";
import Message from "../Message/Message";
import { getRandomVerb, initHint, randNumber } from "../utils";

interface IWritePast {
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function WritePast({ setScore, resetScore, setReload }: IWritePast) {
    const [verb, setVerb] = useState(verbs[getRandomVerb()]);
    const [messageStatus, setMessageStatus] = useState<
        "truth" | "wrong" | "ignore"
    >("ignore");
    const [inputValue, setInputValue] = useState("");
    const [hint, setHint] = useState<string>(initHint(verb.past));
    const [trigger, setTrigger] = useState<boolean>(false);

    const refInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (verb.past !== hint) {
            setHint(initHint(verb.past));
        }
    }, [verb, messageStatus, inputValue]);

    useEffect(() => {
        refInput.current?.focus();
    }, [verb]);

    const truth = (trigger: boolean) => {
        setMessageStatus("truth");

        if (!trigger) {
            setScore((s) => s + 1);
            setTrigger(true);
        }
    };

    const wrong = () => {
        setMessageStatus("wrong");
        resetScore();

        setHint((h) => {
            if (h === verb.past) {
                return h;
            }

            let index = randNumber(h.length);

            if (verb.past.length !== verbs.length) {
                return (
                    h.substr(0, index) + verb.past[index] + h.substr(index + 1)
                );
            }
            while (h[index] !== "-") {
                index = randNumber(h.length);
            }

            return h.substr(0, index) + verb.past[index] + h.substr(index + 1);
        });
    };

    const next = () => {
        const newVerb = verbs[getRandomVerb()];
        setMessageStatus("ignore");
        setVerb(newVerb);
        setReload(true);
        setHint(initHint(verb.past));
        setInputValue("");
    };

    const title = (
        <span>
            Trouver la forme <strong>prétérit (passé)</strong>
        </span>
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value);

    const check = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = inputValue.trim().toLowerCase();
        if (value === verb.past) {
            truth(trigger);
        } else {
            wrong();
        }
    };

    return (
        <div className="content">
            <h2>{verb.base}</h2>
            <Message title={title} status={messageStatus} next={next} />
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

export default WritePast;
