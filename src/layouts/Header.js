import React from 'react'
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button, FormControl, NavDropdown } from "react-bootstrap";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  cursor: "pointer"
};

const bLinkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
  cursor: "pointer"
};

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
          <div className="title">
            <h1>Pizza Joint</h1>
          </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link><Link to="/" style={linkStyle}>Home</Link></Nav.Link>

                <NavDropdown title="Framer Motion" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/motion" style={bLinkStyle}>Slider</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    
  )
}
