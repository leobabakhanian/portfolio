import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer-container">
      <Container fluid>
        <Row id="footer-firstRow">
          <Col md="auto">
            <p id="footer-email">Email</p>
          </Col>
          <Col md="auto">
            <a href="mailto:babakhanianleo@gmail.com" id="footer-mailto">
              babakhanianleo@gmail.com
            </a>
          </Col>
        </Row>
        <hr id="divider" />
        <Row id="footer-secondRow">
          <Col md="auto">
            <p id="footer-social">Social</p>
          </Col>
          <Col md="auto">
            <a
              href="https://github.com/leobabakhanian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "#fff" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
