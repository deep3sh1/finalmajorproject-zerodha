import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Orders.css"; // optional styling

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // track error state

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://finalmajorproject-zerodha-backend.onrender.com/orders", {
          headers: {
            Authorization: `Bearer ${token}`, // Use Bearer format
          },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders", err);
        setError(true); // just set error state
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  if (error)
    return (
      <div className="no-orders">
        <p>Unable to fetch orders at the moment. Please try again later.</p>
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="no-orders">
        <p>You haven't placed any orders yet</p>
      </div>
    );

  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
              <td>{order.mode}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
