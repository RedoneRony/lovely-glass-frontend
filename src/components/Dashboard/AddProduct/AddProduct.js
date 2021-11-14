import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Image,
  Table,
} from "react-bootstrap";
import "./AddProduct.css";
import { Link } from "react-router-dom";
function AddProduct() {
  const serviceNameRef = useRef();
  const serviceChargeRef = useRef();
  const serviceDescriptionRef = useRef();
  const serviceImage = useRef();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://fierce-beach-56324.herokuapp.com/addService/")
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

    fetch("https://fierce-beach-56324.herokuapp.com/addService", {
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

  // DELETE AN Order
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://fierce-beach-56324.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = services.filter(
              (order) => order._id !== id
            );
            setServices(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <h2>Add a new Product</h2>
      </div>
      <Form onSubmit={handleAddService} className="addServiceForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Sunglass Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={serviceNameRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" required ref={serviceImage} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="price"
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

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th> Description</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((item, i) => (
              <tr>
                <td>{item.image}</td>
                <td>{item.serviceName}</td>
                <td>{item.serviceCharge}</td>
                <td>{item.serviceDescription}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(item._id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AddProduct;
