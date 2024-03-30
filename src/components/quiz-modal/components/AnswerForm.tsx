import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
import { Answer } from "../../../types/answer";

export default function AnswerForm({
	answerItem,
	index,
	questionIndex,
	setAnswer,
}: {
	answerItem: Answer;
	index: number;
	questionIndex: number;
	setAnswer: (answer: Answer) => void;
}) {
	return (
		<Form noValidate>
			<div className='d-flex flex-column gap-3 mx-2'>
				<h6> Answer {index + 1}</h6>
				<Form.Control
					required
					type='text'
					value={answerItem.text}
					onChange={(e) => setAnswer({ ...answerItem, text: e.target.value })}
					placeholder='Answer Title'
				/>

				<ButtonGroup>
					<ButtonGroup>
						<ToggleButton
							key={`radio-${questionIndex}-${index}-true`}
							id={`radio-${questionIndex}-${index}-true`}
							type='radio'
							variant={"outline-success"}
							name={`radio-${questionIndex}-${index}-true`}
							value={1}
							checked={answerItem.is_true}
							onChange={(e) => {
								setAnswer({
									...answerItem,
									is_true: true,
								});
							}}>
							Is True
						</ToggleButton>
						<ToggleButton
							key={`radio-${questionIndex}-${index}-false`}
							id={`radio-${questionIndex}-${index}-false`}
							type='radio'
							variant={"outline-danger"}
							name={`radio-${questionIndex}-${index}-false`}
							value={0}
							checked={!answerItem.is_true}
							onChange={(e) => {
								setAnswer({
									...answerItem,
									is_true: false,
								});
							}}>
							Is False
						</ToggleButton>
					</ButtonGroup>
				</ButtonGroup>
			</div>
		</Form>
	);
}
