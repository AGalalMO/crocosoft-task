import { useEffect, useState } from "react";
import { EditableQuiz, QuizItem } from "../../../types/quiz";
import { Question } from "../../../types/question";

export default function useCreateQuiz(
	defaultQuiz: EditableQuiz,
	isOpen: boolean,
	addQuiz: (quiz: EditableQuiz) => void,
	handleCloseModal: VoidFunction
) {
	const [isAddDisabled, setIsAddDisabled] = useState(false);
	const [quiz, setQuiz] = useState<QuizItem>({ ...defaultQuiz.quiz });
	const [validated, setValidated] = useState(false);

	useEffect(() => {
		setIsAddDisabled(false);
	}, [quiz]);
	useEffect(() => {
		setQuiz({ ...defaultQuiz.quiz });
	}, [defaultQuiz]);

	const handleAddQuestion = () => {
		let newQuestion = {
			answer_id: null,
			answers: [],
			feedback_false: "",
			feedback_true: "",
			id: quiz.questions_answers.length + 1,
			text: "",
		};
		setQuiz({
			...quiz,
			questions_answers: [...quiz.questions_answers, newQuestion],
		});
	};
	const setQuestionItem = (value: Question, index: number) => {
		let questionList = quiz.questions_answers;
		questionList[index] = { ...value };
		setQuiz({ ...quiz, questions_answers: [...questionList] });
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
		event.stopPropagation();

		const form = event.currentTarget;
		setValidated(true);
		if (form.checkValidity() === true) {
			handleAddQuestion();
		}
	};
	const validateQuiz = () => {
		let disabled = false;
		if (
			!quiz.title ||
			!quiz.score ||
			!quiz.description ||
			quiz.questions_answers?.length === 0
		) {
			disabled = true;
			setIsAddDisabled(true);
			return true;
		}
		quiz.questions_answers.map((item) => {
			if (
				!item.text ||
				!item.feedback_false ||
				!item.feedback_true ||
				item.answers.length === 0
			) {
				disabled = true;
				setIsAddDisabled(true);
				return true;
			}
			item.answers.map((answer) => {
				if (!answer.text) {
					setIsAddDisabled(true);
					disabled = true;
					return true;
				}
			});
		});
		return disabled;
	};
	const handleSubmitQuiz = () => {
		let disabled = validateQuiz();
		if (disabled) {
			return;
		} else {
			addQuiz({
				index: defaultQuiz.index,
				isEdit: defaultQuiz.isEdit,
				quiz: quiz,
			});
			handleCloseModal();
		}
	};
	return {
		isAddDisabled,
		quiz,
		setQuestionItem,
		handleSubmit,
		handleSubmitQuiz,
		validated,
		setQuiz,
	};
}
