import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "./AddService.css";
import { Link } from "react-router-dom";
function AddService() {
  const serviceNameRef = useRef();
  const serviceChargeRef = useRef();
  const serviceDescriptionRef = useRef();
  const serviceImage = useRef();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://scary-barrow-52373.herokuapp.com/addService/")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  // handle add service
  const handleAddService = (e) => {
    const serviceName = serviceNameRef.current.value;
    const serviceCharge = serviceChargeRef.current.value;
    const serviceDescription = serviceDescriptionRef.current.value;
    const image = serviceImage.current.value;

    const newUser = { serviceName, image, serviceCharge, serviceDescription };

    fetch("https://scary-barrow-52373.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the Service.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <h2>Add a New Plan</h2>
      </div>
      <Form onSubmit={handleAddService} className="addServiceForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Plan Name"
            ref={serviceNameRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" required ref={serviceImage} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ticket Cost</Form.Label>
          <Form.Control
            type="text"
            placeholder="Total Cost"
            ref={serviceChargeRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            ref={serviceDescriptionRef}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

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
    </div>
  );
}

export default AddService;
