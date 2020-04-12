import verbs from "./data/verbs.json";
import { ITypeQuizz } from "./types";

export const randNumber = (length: number) =>
    Math.floor(Math.random() * Math.floor(length));

export const getRandomVerb = () => randNumber(verbs.length);

export const initHint = (word: string) =>
    [...Array(word.length)].reduce((acc) => (acc ? acc + "-" : "-")) + "-";

export const sortQuizz = (a: ITypeQuizz, b: ITypeQuizz) =>
    ("" + a.id).localeCompare(b.id);
