import React from "react";
import QuizzType from "../QuizzType/QuizzType";
import { ITypeQuizz } from "../../types";
import { sortQuizz } from "../../utils";

interface ISelectTypeQuizzProps {
    setShowVerb: React.Dispatch<React.SetStateAction<boolean>>;
    typesQuizz: ITypeQuizz[];
    setTypesQuizz: React.Dispatch<React.SetStateAction<ITypeQuizz[]>>;
}

const SelectTypeQuizz = ({
    setShowVerb,
    typesQuizz,
    setTypesQuizz,
}: ISelectTypeQuizzProps) => {
    const _handleClick = () => {
        setShowVerb((s) => !s);
    };

    const _handleQuizzSelection = (typeQuizz: ITypeQuizz) => {
        setTypesQuizz((tqs) =>
            [
                ...tqs.filter((t: ITypeQuizz) => t.id !== typeQuizz.id),
                { ...typeQuizz, use: !typeQuizz.use },
            ].sort(sortQuizz)
        );
    };

    return (
        <div className="menu">
            <div className="multiple-choices">
                {typesQuizz.map((typeQuizz) => (
                    <QuizzType
                        key={typeQuizz.id}
                        typeQuizz={typeQuizz}
                        handleQuizzSelection={_handleQuizzSelection}
                    />
                ))}
            </div>
            <button onClick={_handleClick} className="button-menu">
                Passer au test
            </button>
        </div>
    );
};

export default SelectTypeQuizz;
