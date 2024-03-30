import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreateQuiz({ handleCloseModal,isOpen }: {
    handleCloseModal: VoidFunction;
    isOpen:boolean
}) {
   
  return (
      <Modal
          size="lg"
          onHide={handleCloseModal}
          show={isOpen}
      aria-labelledby="create-task-modal"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="create-task-modal">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}