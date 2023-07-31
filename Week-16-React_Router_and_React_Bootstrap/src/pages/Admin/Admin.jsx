import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Atable from "../../components/Atable";
import Btable from "../../components/Btable";
import Ctable from "../../components/Ctable";
import Dtable from "../../components/Dtable";

export default function Admin({ chores, getChores, Chores_Api_URL }) {
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const [uuser, setUuser] = useState("");
  const [utask, setUtask] = useState("");
  const [udate, setUdate] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Chores_Api_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user,
          task: task,
          date: date,
        }),
      });
      const data = await response.json();
      //logic when the Post is successful
      console.log(data);
      getChores();
      setUser("");
      setTask("");
      setDate("");
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };
  const deleteTask = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Chores_Api_URL}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      //logic when the delete is successful
      console.log(data);
      getChores();
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };
  const updatedTask = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Chores_Api_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: uuser,
          task: utask,
          date: udate,
        }),
      });
      const data = await response.json();
      //logic when the Put is successful
      console.log(data);
      getChores();
      setUuser("");
      setUtask("");
      setUdate("");
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="m-4 p-4">
        <Col xs={1} md={3}></Col>
        <Col xs={10} md={6} id="form-area" className="m-3 p-3">
          <h1 id="text-header">Add New Task:</h1>
          <Form>
            <Form.Label id="text-header">User Name:</Form.Label>
            <Form.Select
              className="mb-3"
              aria-label="Select User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            >
              <option>Select User</option>
              <option value="Ayla">Ayla</option>
              <option value="Braiden">Braiden</option>
              <option value="Callan">Callan</option>
              <option value="Delaney">Delaney</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label id="text-header">Task:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Form.Label id="text-header">Date Assigned:</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" onClick={(e) => addTask(e)}>
              Add New Task
            </Button>
          </Form>
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
      <Row className="m-4 p-3">
        <Col className="m-3">
          <div className="round-corners">
            <Atable
              chores={chores}
              deleteTask={deleteTask}
              uuser={uuser}
              utask={utask}
              udate={udate}
              setUuser={setUuser}
              setUtask={setUtask}
              setUdate={setUdate}
              updatedTask={updatedTask}
            />
          </div>
        </Col>
        <Col className="m-3">
          <div className="round-corners">
            <Btable
              chores={chores}
              deleteTask={deleteTask}
              uuser={uuser}
              utask={utask}
              udate={udate}
              setUuser={setUuser}
              setUtask={setUtask}
              setUdate={setUdate}
              updatedTask={updatedTask}
            />
          </div>
        </Col>
      </Row>
      <Row className="m-4 p-3">
        <Col className="m-3">
          <div className="round-corners">
            <Ctable
              chores={chores}
              deleteTask={deleteTask}
              uuser={uuser}
              utask={utask}
              udate={udate}
              setUuser={setUuser}
              setUtask={setUtask}
              setUdate={setUdate}
              updatedTask={updatedTask}
            />
          </div>
        </Col>
        <Col className="m-3">
          <div className="round-corners">
            <Dtable
              chores={chores}
              deleteTask={deleteTask}
              uuser={uuser}
              utask={utask}
              udate={udate}
              setUuser={setUuser}
              setUtask={setUtask}
              setUdate={setUdate}
              updatedTask={updatedTask}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
