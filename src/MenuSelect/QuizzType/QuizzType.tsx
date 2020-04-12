import React from "react";
import { FaCheck, FaBan } from "react-icons/fa";
import { ITypeQuizz } from "../../types";

interface IQuizzTypeProps {
    typeQuizz: ITypeQuizz;
    handleQuizzSelection: (typeQuizz: ITypeQuizz) => void;
}

const QuizzType = ({ typeQuizz, handleQuizzSelection }: IQuizzTypeProps) => {
    const _handleQuizzSelection = () => handleQuizzSelection(typeQuizz);

    return (
        <div className="multiple-choice" onClick={_handleQuizzSelection}>
            <span>{typeQuizz.name}</span>
            <span>{typeQuizz.use ? <FaCheck /> : <FaBan />}</span>
        </div>
    );
};

export default QuizzType;
