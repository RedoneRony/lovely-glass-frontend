import React, { useEffect, useState } from "react";
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
function Services() {
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/addService/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-5">
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
    </div>
  );
}

export default Services;
