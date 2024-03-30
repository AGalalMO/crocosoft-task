import Quizes from "../../data/quizes.json";
import { useEffect, useState } from "react";
import { EditableQuiz, QuizItem } from "../../types/quiz";
import CreateQuiz from "../quiz-modal";
import Header from "./components/ListHeader";
import Quiz from "./components/QuizComponent";
import { editableQuizInitValue } from "./utils";
import { writeInJson } from "../../utils";
export default function QuizList() {
	let defaultQuiz = Quizes as QuizItem;
	const [quizItems, setQuizItems] = useState<QuizItem[]>([{ ...defaultQuiz }]);
	const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
	const [editableQuiz, setEditableQuiz] = useState<EditableQuiz>({
		...editableQuizInitValue,
	});
	const handleOpenModal = () => {
		setIsQuizModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsQuizModalOpen(false);
	};

	useEffect(() => {
		return () => {
			writeInJson(quizItems);
		};
	}, []);
	return (
		<>
			<Header handleOpenModal={handleOpenModal} />
			{quizItems?.map((quiz, index) => (
				<Quiz
					quizItem={quiz}
					index={index}
					editQuiz={() => {
						setEditableQuiz({
							isEdit: true,
							index: index,
							quiz: quiz,
						});
						setIsQuizModalOpen(true);
					}}
				/>
			))}
			{isQuizModalOpen ? (
				<CreateQuiz
					addQuiz={({ isEdit, index, quiz }) => {
						if (isEdit) {
							let quizes = [...quizItems];
							quizes[index as number] = quiz;
							setQuizItems([...quizes]);
						} else setQuizItems([...quizItems, quiz]);
					}}
					defaultQuiz={editableQuiz}
					isOpen={isQuizModalOpen}
					handleCloseModal={() => {
						handleCloseModal();
						setEditableQuiz({ ...editableQuizInitValue });
					}}
				/>
			) : (
				""
			)}
		</>
	);
}
