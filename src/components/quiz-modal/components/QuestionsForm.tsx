import Form from "react-bootstrap/Form";
import { Question } from "../../../types/question";
import AnswerForm from "./AnswerForm";
import Button from "react-bootstrap/Button";
import useQuestions from "../hooks/useQuestions";

export default function QuestionForm({
	questionItem,
	itemIndex,
	setQuestionItem,
}: {
	questionItem: Question;
	itemIndex: number;
	setQuestionItem: (value: Question) => void;
}) {
	const { handleChangeAnswer, handleSubmit, validated } =
		useQuestions(questionItem,setQuestionItem);

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className='d-flex flex-column gap-3'>
				<h6> Question {itemIndex + 1}</h6>
				<Form.Control
					required
					type='text'
					value={questionItem.text}
					onChange={(e) =>
						setQuestionItem({ ...questionItem, text: e.target.value })
					}
					placeholder='Question Title'
				/>
				<Form.Control
					required
					type='text'
					value={questionItem.feedback_true}
					onChange={(e) =>
						setQuestionItem({ ...questionItem, feedback_true: e.target.value })
					}
					placeholder='feedback if true'
				/>
				<Form.Control
					required
					type='text'
					value={questionItem.feedback_false}
					onChange={(e) =>
						setQuestionItem({ ...questionItem, feedback_false: e.target.value })
					}
					placeholder='feedback if false'
				/>
				{questionItem.answers.map((item, index) => (
					<AnswerForm
						key={index}
						questionIndex={itemIndex}
						answerItem={item}
						index={index}
						setAnswer={(value) => {
							handleChangeAnswer(value, index);
						}}
					/>
				))}
				<div className='d-flex flex-column w-100 mt-3 align-items-end'>
					<Button onClick={handleSubmit}>Add Answer</Button>
				</div>
			</div>
		</Form>
	);
}
