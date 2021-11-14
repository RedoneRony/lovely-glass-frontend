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
import ReactStarRating from "react-star-ratings-component";
function Home() {
  const [services, setServices] = useState([]);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://fierce-beach-56324.herokuapp.com/addService/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://fierce-beach-56324.herokuapp.com/review/")
      .then((response) => response.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    // home page design
    <div className="home mt-5 pt-2">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Stylies Sunglass in town!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2016/11/29/01/33/beach-1866568_960_720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best Stylies Sunglass in town!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdn.pixabay.com/photo/2016/03/27/19/33/sunset-1283872_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Best Stylies Sunglass in town!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="mt-3">
        <h1>See Our Glasses</h1>
        <p>We are offering so many attractive glasses.</p>
      </div>

      {services &&
        services.slice(0, 6).map((item, i) => (
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
                        Price: {item.serviceCharge}
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
                      <Button>Buy Now</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ))}
      <h1
        style={{ textAlign: "center", fontWeight: "bold", paddingTop: "50px" }}
      >
        Customer Product Rating
      </h1>
      {review &&
        review.map((item, i) => (
          <>
            <Container key={i}>
              <Row className="pb-4">
                <Col sm={12} md={6} lg={6} xl={6} className="right-column">
                  <ListGroup vertical>
                    <ListGroup.Item>
                      <h4> Customer Name: {item.username}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Product Name: {item.productname}
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={{ float: "left" }}>
                        Rating
                        <ReactStarRating
                          numberOfStar={5}
                          numberOfSelectedStar={item.Rating}
                          colorFilledStar="red"
                          colorEmptyStar="black"
                          starSize="20px"
                          spaceBetweenStar="10px"
                          disableOnSelect={false}
                          onSelectStar={(val) => {
                            console.log(val);
                          }}
                        />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </>
        ))}

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
