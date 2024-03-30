import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { EditableQuiz } from "../../types/quiz";
import { Question } from "../../types/question";
import useCreateQuiz from "./hooks/useCreateQuiz";
import QuestionForm from "./components/QuestionsForm";
import { useMemo } from "react";

export default function CreateQuiz({
	handleCloseModal,
	isOpen,
	addQuiz,
	defaultQuiz,
}: {
	handleCloseModal: VoidFunction;
	isOpen: boolean;
	addQuiz: (quiz: EditableQuiz) => void;
	defaultQuiz: EditableQuiz;
}) {
	const {
		isAddDisabled,
		quiz,
		setQuestionItem,
		handleSubmit,
		handleSubmitQuiz,
		validated,
		setQuiz,
	} = useCreateQuiz(defaultQuiz, isOpen, addQuiz, handleCloseModal);


	return (
 <Modal
			size='lg'
			onHide={handleCloseModal}
			show={isOpen}
			aria-labelledby='create-task-modal'
			style={{ overflowY: "auto", maxHeight: "700px" }}
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='create-task-modal'>
					{defaultQuiz.isEdit ? "Edit" : "Create"} Quiz
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<div className='d-flex flex-column gap-3'>
						<Form.Control
							required
							type='text'
							value={quiz.title}
							onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
							placeholder='Quiz Title'
						/>
						<Form.Control
							required
							as='textarea'
							type='text'
							value={quiz.description}
							onChange={(e) =>
								setQuiz({ ...quiz, description: e.target.value })
							}
							placeholder='Question Description'
							style={{ height: "100px" }}
						/>
						<Form.Control
							required
							type='text'
							value={quiz.score ?? ""}
							onChange={(e) => {
								var reg = /^\d+$/;
								if (reg.test(e.target.value) || e.target.value === "") {
									setQuiz({
										...quiz,
										score: Number(e.target.value),
									});
								}
							}}
							placeholder='Quiz Score'
						/>

						{quiz.questions_answers.map((item, indx) => (
							<QuestionForm
								questionItem={item}
								setQuestionItem={(value: Question) => {
									setQuestionItem(value, indx);
								}}
								itemIndex={indx}
							/>
						))}
					</div>
					<div className='d-flex flex-column w-100 mt-3 align-items-end'>
						<Button type='submit'>Add Question</Button>
					</div>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleSubmitQuiz} disabled={isAddDisabled}>
					Submit Quiz
				</Button>
			</Modal.Footer>
		</Modal>
    );
}

