// Module imports
import React, { Component } from 'react';
import {
  Navbar, Nav, Form, Button, Container
} from 'react-bootstrap';

// Asset imports
import icon from 'assets/img/icon.png';
// import logo from 'assets/img/logo.png';

// Start && Export Component
export default class Header extends Component {
  render = () => {
    const host = 'localhost:3000';

    return (
      <header id="header">
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <picture>
                <source media="(min-width:576px)" srcSet={`http://${host}/logo.png  1x`} />
                <source srcSet={`http://${host}/icon50.png 1x`} />
                <img src={icon} alt="KoFoundMe Logo" className="d-inline-block align-top" />
              </picture>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mr-3">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#how-it-works">How it Works</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant="primary" className="mr-2 btn-primary-kofoundme">
                  Login
                </Button>
                <Button variant="danger">Register</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
}
