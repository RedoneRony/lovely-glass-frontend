import React from "react";
import "./About.css";
import { Col, Row, Container } from "react-bootstrap";
import aboutLogo from "../../assets/images/piron-guillaume-U4FyCp3-KzY-unsplash.jpg";
import aboutlogo1 from "../../assets/images/adhy-savala-zbpgmGe27p8-unsplash.jpg";
function About() {
  return (
    // doctor secrect page information
    <div className="about-us">
      <Container>
        <Row className="about-row mb-5">
          <div>
            <h1>Doctors Secrect</h1>
            <p className="paragraph">
              Faithful to our tradition, we provide the highest possible
              standard of care and treatment in a <br></br>
              professional and compassionate manner to every person who avails
              of our services.
            </p>
          </div>
        </Row>

        <Row className="about-second-row">
          <Col sm={12} md={6}>
            <img className="about-img" src={aboutLogo} alt="" />
          </Col>

          <Col sm={12} md={6}>
            <img className="about-img" src={aboutlogo1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
