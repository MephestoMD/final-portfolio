import React from "react";
import { Col, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <Container
      id="footer"
      fluid
      className="d-flex flex-wrap-reverse justify-content-between text-center py-2"
    >
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      ></Col>
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      >
        <h5 className="footer-text">Copyright &copy; {year} Maxson Green</h5>
      </Col>
      <Col
        xs={12}
        lg={4}
        className="d-flex align-items-center justify-content-center py-1"
      >
        <ListGroup horizontal className="footerList">
          <ListGroup.Item className="footer-item">
            <a
              className="footer-text"
              href="https://www.linkedin.com/in/max-green-nm//"
            >
              <FaLinkedin id="footer-icon" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footer-item">
            <a className="footer-text" href="https://github.com/MephestoMD">
              <FaGithubSquare id="footer-icon" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footer-item">
            <a className="footer-text" href="">
              <FaPhone
                id="footer-icon"
                href="#"
                onClick={(e) => {
                  window.location = "tel:+19376233880";
                  e.preventDefault();
                }}
              />
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="footer-item">
            <a
              className="footer-text"
              href="#"
              onClick={(e) => {
                window.location =
                  "mailto:maxson.green@gmail.com?subject=Portfolio";
                e.preventDefault();
              }}
            >
              <SiGmail />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Container>
  );
};

export default Footer;
