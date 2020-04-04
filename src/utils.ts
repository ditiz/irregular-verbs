import verbs from './data/verbs.json';

export const randNumber = (length: number) => Math.floor(Math.random() * Math.floor(length));

export const getRandomVerb = () => randNumber(verbs.length);
