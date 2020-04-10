import React, { useState, useEffect } from "react";

interface IChoice {
    response: string;
    handleClick: (trigger: boolean) => void;
}
function Choice({ response, handleClick }: IChoice) {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        setTrigger(false);
    }, [response, setTrigger]);

    const _handleClick = () => {
        handleClick(trigger);
        setTrigger(true);
    };
    return (
        <button className="choice" onClick={_handleClick}>
            {response}
        </button>
    );
}

export default Choice;
