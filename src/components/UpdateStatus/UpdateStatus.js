import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./UpdateStatus.css";
const UpdateStatus = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  console.log(order);

  useEffect(() => {
    const url = `https://scary-barrow-52373.herokuapp.com/order/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // Update User
  const handleStatusChange = (e) => {
    const updatedStatus = e.target.value;
    const updated = {
      costbook: order.costbook,
      datebook: order.datebook,
      placeName: order.placeName,
      servicedescription: order.servicedescription,
      status: updatedStatus,
      username: order.username,
    };
    setOrder(updated);
  };

  const handleUpdateUser = (e) => {
    const url = `https://scary-barrow-52373.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setOrder({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className="updateStatus">
      <h2 style={{ textAlign: "center" }}>Update Status</h2>

      <form onSubmit={handleUpdateUser} className="updateStatusForm">
        <input
          type="text"
          onChange={handleStatusChange}
          value={order.status || ""}
        />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateStatus;
