import { useState } from "react";
import { Question } from "../../../types/question";
import { Answer } from "../../../types/answer";

export default function useQuestions(
	questionItem: Question,
	setQuestionItem: (value: Question) => void
) {
	const [validated, setValidated] = useState(false);
	const handleSubmit = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		setValidated(true);
		form.checkValidity();
		if (form.checkValidity() === true) {
			handleAddAnswer();
		}
	};
	const handleAddAnswer = () => {
		let newAnswer = {
			id: questionItem.answers.length + 1,
			is_true: false,
			text: "",
		};
		let newQuestion = {
			...questionItem,
			answers: [...questionItem.answers, newAnswer],
		};
		setQuestionItem(newQuestion);
	};
	const handleChangeAnswer = (value: Answer, index: number) => {
		let answers = questionItem.answers;
		answers[index] = value;
		let newQuestion = {
			...questionItem,
			answers: answers,
		};
		setQuestionItem(newQuestion);
	};

	return {
		handleChangeAnswer,
		handleSubmit,
		validated,
	};
}
