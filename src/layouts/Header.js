import React from 'react'
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/" style={ linkStyle }>Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" style={ linkStyle }>About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
