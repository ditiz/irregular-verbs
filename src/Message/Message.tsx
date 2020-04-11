import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IVerb } from "../types";

interface IMessage {
    status: "truth" | "wrong" | "ignore";
    title: JSX.Element;
    next: () => void;
    verb: IVerb;
}
function Message({ status, title, next, verb }: IMessage) {
    const refButton = useRef(null);

    if (status === "truth") {
        return (
            <div className="message">
                <p>{title}</p>
                <div className="truth">
                    <div className="message-content">
                        <p>Bonne response</p>
                        <div className="message-response">
                            <div>
                                Verbe: <span>{verb.base}</span>
                            </div>
                            <div>
                                Prétérit: <span>{verb.past}</span>
                            </div>
                            <div>
                                Participe passée: <span>{verb.participle}</span>
                            </div>
                            <div>
                                Traduction: <span>{verb.fr}</span>
                            </div>
                        </div>
                    </div>
                    <div className="message-button-wrapper">
                        <button
                            ref={refButton}
                            autoFocus
                            className="message-button"
                            onClick={next}
                        >
                            <FaAngleRight className="next" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (status === "wrong") {
        return (
            <div className="message">
                <p>{title}</p>
                <div className="wrong">Mauvaise response</div>
            </div>
        );
    }

    return (
        <div className="message">
            <p>{title}</p>
        </div>
    );
}

export default Message;
