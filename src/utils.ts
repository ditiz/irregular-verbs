import Verbs from './data/verbs.js';
import { ITypeQuiz, IVerb } from './types';

export const randNumber = (length: number) => Math.floor(Math.random() * Math.floor(length));

export const getRandomVerb = (activeVerbs: IVerb[], verb?: IVerb) => {
    let res;
    do {
        res = randNumber(activeVerbs.length);
    } while (activeVerbs.length > 2 && activeVerbs[res] === verb);

    return res;
};

export const initHint = (word: string) => [...Array(word.length)].reduce((acc) => (acc ? acc + '-' : '-')) + '-';

export const sortQuiz = (a: ITypeQuiz, b: ITypeQuiz) => ('' + a.id).localeCompare(b.id);

export const getVerbs = () => Verbs;
