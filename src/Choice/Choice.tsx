import React from 'react';

interface IChoice {
    response: string;
    handleClick: () => void;
}
function Choice({ response, handleClick }: IChoice) {
    return (
        <button className="choice" onClick={handleClick}>
            {response}
        </button>
    );
}

export default Choice;
