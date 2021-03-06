export interface IVerb {
    base: string;
    past: string;
    participle: string;
    fr: string;
}

export enum VerbAttribute {
    'base' = 'base',
    'past' = 'past',
    'participle' = 'participle',
    'fr' = 'fr',
}

export interface ITypeQuiz {
    id: string;
    name: string;
    use: boolean;
}
