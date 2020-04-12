import React, { useState, useEffect } from "react";
import RandomVerb from "../RandomVerb/RandomVerb";
import SelectTypeQuizz from "./SelectTypeQuizz/SelectTypeQuizz";
import ChooseFr from "../Choose/ChooseFr/ChooseFr";
import ChooseParticiple from "../Choose/ChooseParticiple/ChooseParticiple";
import ChoosePast from "../Choose/ChoosePast/ChoosePast";
import WriteParticiple from "../Write/WriteParticiple/WriteParticiple";
import WritePast from "../Write/WritePast/WritePast";
import { ITypeQuizz } from "../types";
import { sortQuizz } from "../utils";

interface IMenuSelectProps {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    resetScore: () => void;
}

interface IQuizzElement {
    id: string;
    element: JSX.Element;
}

const MenuSelect = ({ score, setScore, resetScore }: IMenuSelectProps) => {
    const [showVerb, setShowVerb] = useState<boolean>(false);
    const [reload, setReload] = useState(false);

    const [quizz] = useState<IQuizzElement[]>([
        {
            id: "ChoosePast",
            element: (
                <ChoosePast
                    score={score}
                    setScore={setScore}
                    resetScore={resetScore}
                    setReload={setReload}
                />
            ),
        },
        {
            id: "ChooseParticiple",
            element: (
                <ChooseParticiple
                    score={score}
                    setScore={setScore}
                    resetScore={resetScore}
                    setReload={setReload}
                />
            ),
        },
        {
            id: "ChooseFr",
            element: (
                <ChooseFr
                    score={score}
                    setScore={setScore}
                    resetScore={resetScore}
                    setReload={setReload}
                />
            ),
        },
        {
            id: "WritePast",
            element: (
                <WritePast
                    setScore={setScore}
                    resetScore={resetScore}
                    setReload={setReload}
                />
            ),
        },
        {
            id: "WriteParticiple",
            element: (
                <WriteParticiple
                    setScore={setScore}
                    resetScore={resetScore}
                    setReload={setReload}
                />
            ),
        },
    ]);

    const [typesQuizz, setTypesQuizz] = useState<ITypeQuizz[]>(
        [
            {
                id: "ChoosePast",
                name: "Choix prétérit",
                use: true,
            },
            {
                id: "ChooseParticiple",
                name: "Choix participe passée",
                use: true,
            },
            {
                id: "ChooseFr",
                name: "Choix Traduction",
                use: true,
            },
            {
                id: "WritePast",
                name: "Écrire prétérit",
                use: true,
            },
            {
                id: "WriteParticiple",
                name: "Écrire participe passé",
                use: true,
            },
        ].sort(sortQuizz)
    );

    const [elements, setElements] = useState<JSX.Element[]>(
        quizz.map((q) => q.element)
    );

    useEffect(() => {
        const tq: (JSX.Element | undefined)[] = typesQuizz
            .filter((tq) => tq.use)
            .map((tq) => quizz.find((q) => q.id === tq.id)?.element)
            .filter((e) => e);

        setElements(tq as JSX.Element[]);
    }, [typesQuizz, quizz]);

    if (showVerb) {
        return (
            <RandomVerb
                score={score}
                elements={elements}
                setShowVerb={setShowVerb}
                reload={reload}
                setReload={setReload}
            />
        );
    }

    return (
        <SelectTypeQuizz
            setShowVerb={setShowVerb}
            typesQuizz={typesQuizz}
            setTypesQuizz={setTypesQuizz}
        />
    );
};

export default MenuSelect;
