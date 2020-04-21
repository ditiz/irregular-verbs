import React from 'react';
import { ITypeQuiz } from '../../types';
import { sortQuiz } from '../../utils';
import QuizType from '../QuizType/QuizType';

interface ISelectTypeQuizProps {
    typesQuiz: ITypeQuiz[];
    setTypesQuiz: React.Dispatch<React.SetStateAction<ITypeQuiz[]>>;
}

const SelectTypeQuiz = ({ typesQuiz, setTypesQuiz }: ISelectTypeQuizProps) => {
    const _handleQuizSelection = (typeQuiz: ITypeQuiz) => {
        setTypesQuiz((tqs) =>
            [...tqs.filter((t: ITypeQuiz) => t.id !== typeQuiz.id), { ...typeQuiz, use: !typeQuiz.use }].sort(sortQuiz),
        );
    };

    return (
        <div className="multiple-choices">
            {typesQuiz.map((typeQuiz) => (
                <QuizType key={typeQuiz.id} typeQuiz={typeQuiz} handleQuizSelection={_handleQuizSelection} />
            ))}
        </div>
    );
};

export default SelectTypeQuiz;
