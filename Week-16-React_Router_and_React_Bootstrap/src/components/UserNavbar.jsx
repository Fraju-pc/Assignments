//Imports
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useUserContext } from "./UserContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//context state
const AdminNavbar = () => {
  const { user, logout } = useUserContext();

  //Navigate setup
  const navigate = useNavigate();

  //Logic for Logging Out
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  //Html Output
  return (
    <Navbar id="nav" className="p-3" data-bs-theme="dark" expand="lg">
      <Navbar.Brand>House Chores</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <ButtonGroup size="sm">
            <Button variant="success" onClick={handleLogout}>
              Logout
            </Button>
          </ButtonGroup>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavbar;
