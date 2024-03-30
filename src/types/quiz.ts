import { Question } from "./question";

export interface QuizItem{
    created: string;
    description: string;
    id: number;
    modified: string;
    score: number|null;
    title: string;
    url: string;
    questions_answers:Question[]

}