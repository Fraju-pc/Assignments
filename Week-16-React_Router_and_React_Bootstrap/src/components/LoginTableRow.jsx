import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";


export default function DisplayTableRow({ log, deleteUser, username, password,  
  setUsername, setPassword, updatedUser}) {
  

  //Modal State
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <tr>
      <td>{log.name}</td>
      <td>{log.password}</td>
      
      <td>
      <Button variant="warning" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={log.name}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={log.password}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={(e) => updatedUser(e, log.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
      </td>
      <td>
        <Button variant="danger" onClick={(e) => deleteUser(e, log.id)}>Delete</Button>
      </td>
    </tr>
  );
}