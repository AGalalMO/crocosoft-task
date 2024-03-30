import { Question } from "../../../types/question";
import Button from "react-bootstrap/Button";

import { QuizItem } from "../../../types/quiz";
export default function Quiz({
	quizItem,
	index,
	editQuiz,
}: {
	quizItem: QuizItem;
	index: number;
	editQuiz: VoidFunction;
}) {
	return (
		<div className='d-flex  flex-column align-items-start justify-content-start gap-3  p-4 border-bottom border-dark'>
			<div className='d-flex flex-row align-items-center justify-content-between w-100'>
				<h3 className=''>
					quiz {index + 1} title : {quizItem?.title}
				</h3>
				<Button onClick={editQuiz}>Edit Quiz</Button>
			</div>
			<h6>quiz description : {quizItem?.description}</h6>

			{quizItem.questions_answers?.map((question: Question) => {
				return (
					<div className='gap-2 d-flex align-items-start flex-column border-bottom border-color-gray w-100 pb-3'>
						<h4>question text: {question?.text}</h4>
						{question?.answers?.map((answer, index) => {
							return (
								<>
									<h5 key={answer.id}>
										{`answer ${index + 1} - ${answer.text}`}
									</h5>
									<h6 key={answer.id}>
										answer value: {answer.is_true ? "Valid" : "Not Valid"}
									</h6>
								</>
							);
						})}
					</div>
				);
			})}
			<h6>Score : {quizItem.score} </h6>
		</div>
	);
}
