import React, { useEffect, useRef, useState } from "react";
import Message from "../Message/Message";
import { IVerb, VerbAttribute } from "../types";
import { getRandomVerb, initHint, randNumber } from "../utils";

interface IWrite {
	activeVerbs: IVerb[];
	setScore: React.Dispatch<React.SetStateAction<number>>;
	resetScore: () => void;
	setReload: React.Dispatch<React.SetStateAction<boolean>>;
	use: VerbAttribute;
	title: JSX.Element;
}

function Write({
	activeVerbs,
	setScore,
	resetScore,
	setReload,
	use,
	title,
}: IWrite) {
	const [verb, setVerb] = useState(activeVerbs[getRandomVerb(activeVerbs)]);

	const [messageStatus, setMessageStatus] = useState<
		"truth" | "wrong" | "ignore"
	>("ignore");
	const [inputValue, setInputValue] = useState("");
	const [hint, setHint] = useState<string>(initHint(verb[use]));
	const [triggered, setTriggered] = useState<boolean>(false);
	const [failAttempts, setFailAttempts] = useState<number>(0);

	const refInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setHint((h) => {
			if (verb[use] !== h) {
				return initHint(verb[use]);
			}
			return h;
		});
	}, [verb, use]);

	useEffect(() => {
		refInput.current?.focus();
	}, [verb]);

	const truth = () => {
		setMessageStatus("truth");

		if (!triggered) {
			setScore((s) => s + 1);
			setTriggered(true);
		}
	};

	const wrong = () => {
		setMessageStatus("wrong");
		resetScore();

		addHint();
	};

	const addHint = () => {
		setHint((h) => {
			if (h === verb[use]) {
				return h;
			}

			let index = randNumber(h.length);
			let result = h;

			if (verb[use].length !== activeVerbs.length) {
				result = h.substr(0, index) + verb[use][index] + h.substr(index + 1);
			}

			while (h[index] !== "-") {
				index = randNumber(h.length);
				result = h.substr(0, index) + verb[use][index] + h.substr(index + 1);
			}

			return result;
		});
	};

	const next = () => {
		const newVerb = activeVerbs[getRandomVerb(activeVerbs, verb)];
		setMessageStatus("ignore");
		setVerb(newVerb);
		setReload(true);
		setHint(initHint(verb[use]));
		setInputValue("");
		setTriggered(false);
		setFailAttempts(0);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value);

	const check = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = inputValue.trim().toLowerCase();
		if (value === verb[use]) {
			truth();
		} else if (failAttempts > 2) {
			wrong();
		} else {
			addHint();
			setFailAttempts((f) => f + 1);
		}
	};

	return (
		<div className="content">
			<h2>{verb.base}</h2>
			<Message title={title} status={messageStatus} next={next} verb={verb} />
			<div className="hint">
				<small>indice:</small> {hint}
			</div>
			<div>
				{failAttempts && !triggered ? (
					<small>Chance: {3 - failAttempts}</small>
				) : null}
			</div>
			<form onSubmit={check} className="response">
				<input
					type="text"
					autoFocus
					ref={refInput}
					value={inputValue}
					onChange={handleChange}
				/>
				<input type="submit" value="Valider" />
			</form>
		</div>
	);
}

export default Write;
