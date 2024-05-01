import React, { useCallback, useEffect, useState } from "react";
import SelectTypeQuiz from "../MenuSelect/SelectTypeQuiz/SelectTypeQuiz";
import SelectVerbs from "../MenuSelect/SelectVerbs/SelectVerbs";
import RandomVerb from "../RandomVerb/RandomVerb";
import getQuiz from "../data/getQuiz";
import getTypesQuiz from "../data/getTypesQuiz";
import Verbs from "../data/verbs";
import { ITypeQuiz, IVerb } from "../types";

interface IMenuSelectProps {
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
	resetScore: () => void;
}

interface IQuizElement {
	id: string;
	element: JSX.Element;
}

const MenuSelect = ({ score, setScore, resetScore }: IMenuSelectProps) => {
	const [showVerb, setShowVerb] = useState<boolean>(false);
	const [reload, setReload] = useState(false);

	const [activeVerbs, setActiveVerbs] = useState<IVerb[]>(Verbs);

	const [typesQuiz, setTypesQuiz] = useState<ITypeQuiz[]>(getTypesQuiz());

	const [quiz] = useState<IQuizElement[]>(
		getQuiz({
			activeVerbs: Verbs,
			score,
			setScore,
			resetScore,
			setReload,
			typesQuiz,
		}),
	);

	const [elements, setElements] = useState<JSX.Element[]>(
		quiz.map((q) => q.element),
	);

	const updateElements = useCallback(() => {
		const tq = getQuiz({
			activeVerbs,
			score,
			setScore,
			resetScore,
			setReload,
			typesQuiz,
		});

		setElements(tq.map((el) => el.element));
	}, [activeVerbs, resetScore, score, setScore, typesQuiz]);

	useEffect(() => {
		updateElements();
	}, [
		updateElements,
		typesQuiz,
		activeVerbs,
		score,
		setScore,
		resetScore,
		setReload,
	]);

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

	const _handleClick = () => {
		setShowVerb((s) => !s);
	};

	return (
		<div className="menu">
			<div className="menu-items">
				<SelectTypeQuiz typesQuiz={typesQuiz} setTypesQuiz={setTypesQuiz} />

				<SelectVerbs
					activeVerbs={activeVerbs}
					setActiveVerbs={setActiveVerbs}
				/>
			</div>
			<button type="button" onClick={_handleClick} className="button-menu">
				Passer au test
			</button>
		</div>
	);
};

export default MenuSelect;
