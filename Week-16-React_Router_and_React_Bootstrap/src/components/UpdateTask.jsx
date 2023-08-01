//Imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

//Function to Call Update Task Modal
export default function UpdateTask(props) {
  
  //Html Output
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Update User Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Label>User Name:</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Select User"
            value={props.uuser}
            onChange={(e) => props.setUuser(e.target.value)}
          >
            <option>{props.chore.name}</option>
            <option value="Ayla">Ayla</option>
            <option value="Braiden">Braiden</option>
            <option value="Callan">Callan</option>
            <option value="Delaney">Delaney</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Task:</Form.Label>
            <Form.Control
              type="text"
              placeholder={props.chore.task}
              value={props.utask}
              onChange={(e) => props.setUtask(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Date Assigned:</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="date"
              value={props.udate}
              onChange={(e) => props.setUdate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
        <Button
          onClick={(e) => props.updatedTask(e, props.chore.id)}
          variant="primary"
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
