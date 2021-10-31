import React, { useEffect, useState, useRef } from "react";
import "./MyOrder.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Table,
} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
function MyOrder() {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState("");
  console.log(myOrder);
  useEffect(() => {
    fetch("https://scary-barrow-52373.herokuapp.com/order/")
      .then((response) => response.json())
      .then((data) => {
        setMyOrder(data);
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
            const remainingOrders = myOrder.filter((order) => order._id !== id);
            setMyOrder(remainingOrders);
          }
        });
    }
  };
  return (
    // appointment page design
    <div className="pt-4 pb-4">
      <Container>
        <div className="membership mb-3">
          <h2 style={{ textAlign: "center" }}>My Orders</h2>
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
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {myOrder &&
            myOrder
              .filter((order) => order.username === user.displayName)
              .map((item, i) => (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.placeName}</td>
                  <td>{item.costbook}</td>
                  <td>{item.datebook}</td>
                  <td>{item.servicedescription}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => handleDeleteOrder(item._id)}>
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

export default MyOrder;
