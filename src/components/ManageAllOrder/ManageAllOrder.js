import React, { useEffect, useState, useRef } from "react";
import "./ManageAllOrder.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function ManageAllOrder() {
  const [allOrder, setAllOrder] = useState("");
  console.log(allOrder);
  useEffect(() => {
    fetch("https://scary-barrow-52373.herokuapp.com/order/")
      .then((response) => response.json())
      .then((data) => {
        setAllOrder(data);
      });
  }, []);
  // DELETE AN Order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://scary-barrow-52373.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = allOrder.filter(
              (order) => order._id !== id
            );
            setAllOrder(remainingOrders);
          }
        });
    }
  };
  return (
    // appointment page design
    <div className="pt-4 pb-4">
      <Container>
        <div className="membership mb-3">
          <h2 style={{ textAlign: "center" }}>All Orders</h2>
        </div>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Place Name</th>
            <th>Cost</th>
            <th>Date</th>
            <th>Place Description</th>
            <th>Order Status</th>
            <th>Update Status</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {allOrder &&
            allOrder.map((item, i) => (
              <tr>
                <td>{item.username}</td>
                <td>{item.placeName}</td>
                <td>{item.costbook}</td>
                <td>{item.datebook}</td>
                <td>{item.servicedescription}</td>
                <td>{item.status}</td>
                <td>
                  <Link to={`/order/update/${item._id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteOrder(item._id)}>X</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageAllOrder;
