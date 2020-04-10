import React, { useState, useEffect, useCallback } from "react";

interface IChoice {
    response: string;
    handleClick: (trigger: boolean) => void;
    keyTrigger: boolean;
}
function Choice({ response, handleClick, keyTrigger }: IChoice) {
    const [trigger, setTrigger] = useState(false);
    const [className, setClassName] = useState<string>("");

    const _handleClick = useCallback(() => {
        handleClick(trigger);
        setTrigger(true);
    }, [handleClick, trigger]);

    useEffect(() => {
        setTrigger(false);
    }, [response, setTrigger]);

    useEffect(() => {
        if (keyTrigger) {
            setClassName("choice-active");
            _handleClick();
        } else {
            setClassName("");
        }
    }, [keyTrigger, _handleClick, trigger]);

    return (
        <button className={`choice ${className}`} onClick={_handleClick}>
            {response}
        </button>
    );
}

export default Choice;
