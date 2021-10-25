import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Service.css";
import { Col, Image, Row, Button, Container, ListGroup } from "react-bootstrap";
function Service() {
  const { serviceId } = useParams();
  const [servicePage, setServicePage] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServicePage(data);
      });
  }, []);
  return (
    // service page
    <div>
      <Container>
        <h1 className="service">Service Details</h1>
      </Container>
      {servicePage &&
        servicePage
          .filter((service) => service.id === serviceId)
          .map((item, i) => (
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
                          Doctor visit charge Charge:$ {item.servicePrice}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p style={{ float: "left" }}>
                          Description : {item.description}
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                    <div className="add-member-btn">
                      <Button>More</Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </>
          ))}
    </div>
  );
}

export default Service;
