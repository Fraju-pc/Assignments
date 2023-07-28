import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AdminNavbar = () => {
    const { user, logout } = useUserContext();

    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate('/');
    };
  return (
    <Navbar id="nav" className="p-3" data-bs-theme="dark" expand="lg">
      <Navbar.Brand>
        House Chores
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
         
          <Nav.Link as={Link} to="/Admin">
            Task Management
          </Nav.Link>
          <Nav.Link as={Link} to="/Users">
            User Management
          </Nav.Link>
          <ButtonGroup size="sm">
            <Button variant="success" onClick={handleLogout}>Logout</Button>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavbar;