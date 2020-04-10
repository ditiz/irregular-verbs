import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

interface IMessage {
    status: "truth" | "wrong" | "ignore";
    title: JSX.Element;
    next: () => void;
}
function Message({ status, title, next }: IMessage) {
    const refButton = useRef(null);
    if (status === "truth") {
        return (
            <div className="message">
                <p>{title}</p>
                <div className="truth">
                    <div></div>
                    Bonne response
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
