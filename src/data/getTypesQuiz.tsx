import { sortQuiz } from '../utils';

const getTypesQuiz = () =>
    [
        {
            id: 'ChoosePast',
            name: 'Choix prétérit',
            use: true,
        },
        {
            id: 'ChooseParticiple',
            name: 'Choix participe passé',
            use: true,
        },
        {
            id: 'ChooseFr',
            name: 'Choix Traduction',
            use: true,
        },
        {
            id: 'WritePast',
            name: 'Écrire prétérit',
            use: true,
        },
        {
            id: 'WriteParticiple',
            name: 'Écrire participe passé',
            use: true,
        },
    ].sort(sortQuiz);

export default getTypesQuiz;
