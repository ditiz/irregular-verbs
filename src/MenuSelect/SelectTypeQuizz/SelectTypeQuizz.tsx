import React from "react";
import QuizzType from "../QuizzType/QuizzType";
import { ITypeQuizz } from "../../types";
import { sortQuizz } from "../../utils";

interface ISelectTypeQuizzProps {
    typesQuizz: ITypeQuizz[];
    setTypesQuizz: React.Dispatch<React.SetStateAction<ITypeQuizz[]>>;
}

const SelectTypeQuizz = ({
    typesQuizz,
    setTypesQuizz,
}: ISelectTypeQuizzProps) => {
    const _handleQuizzSelection = (typeQuizz: ITypeQuizz) => {
        setTypesQuizz((tqs) =>
            [
                ...tqs.filter((t: ITypeQuizz) => t.id !== typeQuizz.id),
                { ...typeQuizz, use: !typeQuizz.use },
            ].sort(sortQuizz)
        );
    };

    return (
        <div className="multiple-choices">
            {typesQuizz.map((typeQuizz) => (
                <QuizzType
                    key={typeQuizz.id}
                    typeQuizz={typeQuizz}
                    handleQuizzSelection={_handleQuizzSelection}
                />
            ))}
        </div>
    );
};

export default SelectTypeQuizz;
