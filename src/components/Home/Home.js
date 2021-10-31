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

function Home() {
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("https://scary-barrow-52373.herokuapp.com/addService/")
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
            src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Let's Discover the Country together!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_960_720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Let's Discover the Country together!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Let's Discover the Country together!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3">
        <h1>Main Offering Plans</h1>
        <p>We are offering so many services.</p>
      </div>

      {services &&
        services.map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Image className="service-img" src={item.image} />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h2>{item.serviceName}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Ticket Price: {item.serviceCharge}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Description : {item.serviceDescription}
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                  <div className="add-member-btn">
                    <Link to={`/service/${i}`}>
                      <Button>Book Now</Button>
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
              Our goal is to sure<br></br> safety travel among the country.
            </h2>
            <Button variant="outline-warning" className="button-choose">
              More about Travelling
            </Button>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <Image
              className="why-choose-us-img"
              src="https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg"
            />
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
