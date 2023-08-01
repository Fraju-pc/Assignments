//Imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../components/UserContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavBar from "../../components/NavBar";

//Login Page
export default function Login() {

  //Api URL
  const Login_Api_URL = "https://6489d1fc5fa58521cab04f75.mockapi.io/logins";

  //State for login Form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //User Context setup
  const { setUser } = useUserContext();

  //Navigate Setup
  const navigate = useNavigate();

  //State for Logins
  const [logins, setLogins] = useState([]);

  //State for Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Api Pull function
  async function getLogins() {
    const response = await fetch(Login_Api_URL);
    const data = await response.json();
    setLogins(data);
  }

  //Useeffect to populate the page on loadin
  useEffect(() => {
    getLogins();
  }, []);

  //Log-In logic
  const handleLogin = (e) => {
    e.preventDefault();

    //login authentication logic
    let match = logins.find(function (existingUser) {
      return (
        existingUser.name === username && existingUser.password === password
      );
    });

    if (match) {
      // Successful login
      pageLogin(match);
    } else {
      // Invalid credentials
      pageLogin("fail");
    }
  };

  //function to determine which page to log into
  function pageLogin(attempt) {
    switch (attempt.name) {
      case "Admin":
        setUser({ username: "admin", role: "admin" });
        navigate(`/Admin`);
        break;
      case "Ayla":
        setUser({ username: "ayla", role: "user" });
        navigate(`/ChildA`);
        break;
      case "Braiden":
        setUser({ username: "braiden", role: "user" });
        navigate(`/ChildB`);
        break;
      case "Callan":
        setUser({ username: "callan", role: "user" });
        navigate(`/ChildC`);
        break;
      case "Delaney":
        setUser({ username: "delaney", role: "user" });
        navigate(`/ChildD`);
        break;
      //default for bad Username / Password Combo
      default:
        handleShow();
      
    }
  }

  //HTML Output
  return (
    <>
      <NavBar />
      <Container className="p-4">
        <Row>
          <Col></Col>
          <Col>
            <h1>Login:</h1>
            <Form onSubmit={handleLogin}>
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
        <Offcanvas
          bg="dark"
          data-bs-theme="dark"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Error!</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>Invalid Username or Password.</Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}
