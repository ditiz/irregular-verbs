import React, { useState } from "react";
import { IVerb } from "../../types";
import Verbs from "../../data/verbs.json";

interface ISelectVerbs {
    activeVerbs: IVerb[];
    setActiveVerbs: React.Dispatch<React.SetStateAction<IVerb[]>>;
}

const SelectVerbs = ({ activeVerbs, setActiveVerbs }: ISelectVerbs) => {
    const [verbsList] = useState<IVerb[]>(Verbs)
    const [endVerb, setEndVerbs] = useState(activeVerbs.pop()?.base);
    const [message, setMessage] = useState<string | null>();

    const handleAction = (verb: IVerb) => {
        let newEndVerb = verb.base;
        let newActiveVerbs = verbsList.filter((v) => !!v)
            .filter((v) => v.base.localeCompare(verb.base) <= 0)
            .map((a) => a);

        // Minimum 10 verbs
        if (newActiveVerbs.length < 10) {
            newEndVerb = verbsList[10].base;
            newActiveVerbs = verbsList.slice(0, 10);
            setMessage("Minimum 10 verbes");
        } else {
            setMessage(null);
        }
        setEndVerbs(newEndVerb);
        setActiveVerbs(newActiveVerbs);
    };

    return (
        <div>
            {message && <div style={{ marginBottom: "2rem" }}>{message}</div>}
            <div className="verbs-list">
                {verbsList.map((verb) => (
                    <DisplayVerb
                        key={verb.base}
                        verb={verb}
                        endVerb={endVerb}
                        handleAction={handleAction}
                    />
                ))}
            </div>
        </div>
    );
};

interface IDisplayVerb {
    verb: IVerb;
    endVerb?: string;
    handleAction: (verb: IVerb) => void;
}

const DisplayVerb = ({ verb, endVerb, handleAction }: IDisplayVerb) => {
    const active = endVerb ? verb.base.localeCompare(endVerb) > 0 : false;
    const className = active ? "verb-item" : "verb-item-active";

    const _handleClick = () => {
        handleAction(verb);
    };

    return (
        <div className={className} onClick={_handleClick}>
            <span>{verb.base}</span>
        </div>
    );
};

export default SelectVerbs;
