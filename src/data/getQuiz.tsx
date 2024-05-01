import React from "react";
import ChooseFr from "../Choose/ChooseFr/ChooseFr";
import ChooseParticiple from "../Choose/ChooseParticiple/ChooseParticiple";
import ChoosePast from "../Choose/ChoosePast/ChoosePast";
import WriteParticiple from "../Write/WriteParticiple/WriteParticiple";
import WritePast from "../Write/WritePast/WritePast";
import { ITypeQuiz, IVerb } from "../types";

interface IGetQuizProps {
	activeVerbs: IVerb[];
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
	resetScore: () => void;
	setReload: React.Dispatch<React.SetStateAction<boolean>>;
	typesQuiz: ITypeQuiz[];
}

const getQuiz = ({
	activeVerbs,
	score,
	setScore,
	resetScore,
	setReload,
	typesQuiz,
}: IGetQuizProps) => {
	const quizzs = [
		{
			id: "ChoosePast",
			element: (
				<ChoosePast
					activeVerbs={activeVerbs}
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
					activeVerbs={activeVerbs}
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
					activeVerbs={activeVerbs}
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
					activeVerbs={activeVerbs}
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
					activeVerbs={activeVerbs}
					setScore={setScore}
					resetScore={resetScore}
					setReload={setReload}
				/>
			),
		},
	];

	return quizzs.filter((q) => typesQuiz.find((tq) => tq.id === q.id)?.use);
};

export default getQuiz;
