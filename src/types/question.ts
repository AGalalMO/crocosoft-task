import { Answer } from "./answer";

export interface Question {
	answer_id: number | null;
	answers: Answer[];
	feedback_false: string;
	feedback_true: string;
	id: number | null;
	text: string;
}
