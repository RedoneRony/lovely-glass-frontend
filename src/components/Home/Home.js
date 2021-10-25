import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/brandon-holmes-GofYo51GQ_4-unsplash.jpg";
import image2 from "../../assets/images/national-cancer-institute-701-FJcjLAQ-unsplash.jpg";
import image3 from "../../assets/images/piron-guillaume-U4FyCp3-KzY-unsplash.jpg";
import image4 from "../../assets/images/pexels-evg-culture-1170979.jpg";
function Home() {
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    // home page design
    <div className="home mt-5 pt-2">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Care Whenever you need it</h3>
            <p>
              We provides Medical, Doctor, Dental, Dentst, Pharmecy, Health and
              any related medical care field.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best Doctor & Medical Care</h3>
            <p>
              We provides Medical, Doctor, Dental, Dentst, Pharmecy, Health and
              any related medical care field.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>We take care your healthy life</h3>
            <p>
              We provides Medical, Doctor, Dental, Dentst, Pharmecy, Health and
              any related medical care field.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3">
        <h1>Our Medical Services</h1>
        <p>We are offering so many services.</p>
      </div>

      {services &&
        services.map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.img} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h2>{item.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Doctor visit Fee:$ {item.servicePrice}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Description : {item.description}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="add-member-btn">
                    <Link to={`/service/${i}`}>
                      <Button>Service Details</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ))}
      <Container className="square border border-dark why-choose-us">
        <Row>
          <Col sm={12} md={6} lg={6} xl={6}>
            <h2 className="chooseus-header">
              <span className="why">I Why</span>{" "}
              <span className="choose">Choose Us</span>
            </h2>
            <h2 className="our-goal">
              Our goal is to make<br></br> sure with advances in technology
            </h2>
            <Button variant="outline-warning" className="button-choose">
              More about practice
            </Button>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Image className="why-choose-us-img" src={image4} />
          </Col>
        </Row>
      </Container>

      <Container className="square border support">
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className="support">
            <h2 className="support-h2">We provide 24/7 customer support.</h2>
            <h5 className="support-h5">
              Please feel free to contact us at for emergency case.
            </h5>
            <Button variant="warning" className="support-button">
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
