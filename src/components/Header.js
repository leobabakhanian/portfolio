import React from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./images/logo-wide.png";

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="60"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link className="nav-link" href="/more">
                More
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                About Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
