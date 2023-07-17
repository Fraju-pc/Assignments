import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
    //Api URL
    const Login_Api_URL = 'https://6489d1fc5fa58521cab04f75.mockapi.io/logins'

    //State for login Form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [logins, setLogins] = useState('[]');

    //Api Pull function
    async function getLogins() {
      const response = await fetch(Login_Api_URL)
      const data = await response.json();
      //console.log(data);
      setLogins(data)
      console.log(logins);
    };
     //Useeffect to populate the page on loadin
  useEffect(()=> {
    getLogins()
  }, [])

    const handleLogin = (e) => {
        e.preventDefault();

        //login authentication logic 
        let match = logins.find(function(existingUser) {
          return existingUser.name === username && existingUser.password === password;
          
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
function pageLogin(attempt){
  console.log(attempt.name);
  
  switch(attempt.name){
    case "Admin":
      navigate(`/Admin`);
    break;
    case "Ayla":
      navigate(`/ChildA`);
    break;
    case "Braiden":
      navigate(`/ChildB`);
    break;
    case "Callan":
      navigate(`/ChildC`);
    break;
    case "Delaney":
      navigate(`/ChildD`);
    break;
    //default for bad Username / Password Combo
    default:
      alert("Username or Password Not Found");
      //myModal.show();
      //location.reload();
      
  }
  };
    
    //HTML Output
    return (
      <Container>
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
                onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
}