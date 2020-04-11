import React, { useState } from "react";
import Choices from "../Choices/Choices";
import verbs from "../data/verbs.json";
import Message from "../Message/Message";
import { VerbAttribute } from "../types";
import { getRandomVerb } from "../utils";

interface IChoose {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
    use: VerbAttribute;
    title: JSX.Element;
}

function Choose({
    score,
    setScore,
    resetScore,
    setReload,
    use,
    title,
}: IChoose) {
    const [messageStatus, setMessageStatus] = useState<
        "truth" | "wrong" | "ignore"
    >("ignore");
    const [verb, setVerb] = useState(verbs[getRandomVerb()]);
    const [triggerNext, setTriggerNext] = useState(false);

    const truth = (trigger: boolean) => {
        setMessageStatus("truth");
        if (!trigger) {
            setScore((s) => s + 1);
        }
    };

    const wrong = () => {
        setMessageStatus("wrong");
        resetScore();
    };

    const next = () => {
        setTriggerNext(true);
        setReload(true);
        setMessageStatus("ignore");
        setVerb(verbs[getRandomVerb()]);
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
            <Choices
                verbResponse={verb}
                handleTruth={truth}
                handleWrong={wrong}
                score={score}
                use={use}
                triggerNext={triggerNext}
                setTriggerNext={setTriggerNext}
            />
        </div>
    );
}

export default Choose;
