import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import LoginTableRow from "../../components/LoginTableRow";

export default function Users() {
  //Api URL
  const Login_Api_URL = "https://6489d1fc5fa58521cab04f75.mockapi.io/logins";

  //State for Form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //State for the Logins Array
  const [logs, setLogs] = useState([]);


  //Api Pull function
  async function getLogs() {
    const response = await fetch(Login_Api_URL);
    const data = await response.json();
    //console.log(data);
    setLogs(data);
    console.log(logs);
  }
  //Use effect to populate the page on loadin
  useEffect(() => {
    getLogs();
  }, []);

  //Add User Function
  const addUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Login_Api_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });
      const data = await response.json();
      //logic when the Post is successful
      console.log(data);
      getLogs();
      setUsername("");
      setPassword("");
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };

  //Delete User Function
  const deleteUser = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Login_Api_URL}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      //logic when the delete is successful
      console.log(data);
      getLogs();
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };
  //Update User Function
  const updatedUser = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`${Login_Api_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });
      const data = await response.json();
      //logic when the Put is successful
      console.log(data);
      getLogs();
      setUsername("");
      setPassword("");
    } catch (error) {
      //logic for when there is an error
      console.log(error);
    }
  };

  //HTML Output
  return (
    <>
      <Container className="p-4">
        <Row className="m-4 p-1">
          <Col></Col>
          <Col>
            <h1>Add New User:</h1>
            <Form onSubmit={addUser}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row className="m-4 p-1">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>User:</th>
                <th>Password:</th>
                <th>Update:</th>
                <th>Delete:</th>
              </tr>
            </thead>
            <tbody>
                 {logs.map((log, index) => (
                    <LoginTableRow
                    key={index}
                    log={log}
                    deleteUser={deleteUser}
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    updatedUser={updatedUser}
                  />
                ))} 
              
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
