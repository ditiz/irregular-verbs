import React, { useEffect, useState } from "react";
import { randNumber } from "../utils";

interface IRandomVerbProps {
    score: number;
    elements: JSX.Element[];
    setShowVerb: React.Dispatch<React.SetStateAction<boolean>>;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function RandomVerb({
    score,
    elements,
    setShowVerb,
    reload,
    setReload,
}: IRandomVerbProps) {
    const [render, setRender] = useState<JSX.Element>(
        elements[randNumber(elements.length)]
    );

    useEffect(() => {
        if (reload) {
            setRender(elements[randNumber(elements.length)]);
            setReload(false);
        }
    }, [elements, setRender, score, reload, setReload]);

    const goMenu = () => {
        setShowVerb(false);
    };

    return (
        <>
            <div className="go-menu">
                <button className="button-menu" onClick={goMenu}>
                    Retourner au menu
                </button>
            </div>
            {render}
        </>
    );
}

export default RandomVerb;
