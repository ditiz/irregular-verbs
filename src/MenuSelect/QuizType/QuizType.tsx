import React from 'react';
import { FaBan, FaCheck } from 'react-icons/fa';
import { ITypeQuiz } from '../../types';

interface IQuizTypeProps {
    typeQuiz: ITypeQuiz;
    handleQuizSelection: (typeQuiz: ITypeQuiz) => void;
}

const QuizType = ({ typeQuiz, handleQuizSelection }: IQuizTypeProps) => {
    const _handleQuizSelection = () => handleQuizSelection(typeQuiz);

    return (
        <div className="multiple-choice" onClick={_handleQuizSelection}>
            <span>{typeQuiz.name}</span>
            <span>{typeQuiz.use ? <FaCheck /> : <FaBan />}</span>
        </div>
    );
};

export default QuizType;
