import React, { useState } from "react";
import { IVerb } from "../../types";
import { getVerbs } from "../../utils";

interface ISelectVerbs {
	activeVerbs: IVerb[];
	setActiveVerbs: React.Dispatch<React.SetStateAction<IVerb[]>>;
}

const SelectVerbs = ({ activeVerbs, setActiveVerbs }: ISelectVerbs) => {
	const [verbsList] = useState<IVerb[]>(getVerbs());
	const [endVerb, setEndVerbs] = useState(
		activeVerbs[activeVerbs.length - 1]?.base,
	);
	const [message, setMessage] = useState<string | null>();

	const handleAction = (verb: IVerb) => {
		let newEndVerb = verb.base;
		let newActiveVerbs = verbsList
			.filter((v) => !!v)
			.filter((v) => v.base.localeCompare(verb.base) <= 0)
			.map((a) => a);

		// Minimum verbs
		const minimumVerb = 3;
		if (newActiveVerbs.length < minimumVerb) {
			newEndVerb = verbsList[minimumVerb].base;
			newActiveVerbs = verbsList.slice(0, minimumVerb);
			setMessage(`Minimum ${minimumVerb} verbes`);
		} else {
			setMessage(null);
		}
		setEndVerbs(newEndVerb);
		setActiveVerbs(newActiveVerbs);
	};

	return (
		<div className="verbs-list-wrapper">
			{message && <div style={{ marginBottom: "2rem" }}>{message}</div>}
			<div className="verbs-list">
				<div className="verbs-list-inner">
					{verbsList.map((verb) => (
						<DisplayVerb
							key={verb.base}
							verb={verb}
							endVerb={endVerb}
							handleAction={handleAction}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

interface IDisplayVerb {
	verb: IVerb;
	endVerb?: string;
	handleAction: (verb: IVerb) => void;
}

const DisplayVerb = ({ verb, endVerb, handleAction }: IDisplayVerb) => {
	const active = endVerb ? verb.base.localeCompare(endVerb) > 0 : false;
	const className = active ? "verb-item" : "verb-item-active";

	const _handleClick = () => {
		handleAction(verb);
	};

	return (
		<div className={className} onClick={_handleClick}>
			<span>{verb.base}</span>
		</div>
	);
};

export default SelectVerbs;
