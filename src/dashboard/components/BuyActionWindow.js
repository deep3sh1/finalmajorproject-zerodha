import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const OrderActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);

  const handleOrderClick = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      console.log("TOKEN BEING SENT:", token);

      if (!token) {
        alert("You must be logged in to buy");
        return;
      }

      const res = await axios.post(
        "https://finalmajorproject-zerodha-backend.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
      generalContext.closeBuyWindow();
    } catch (err) {
      console.error("Buy order error:", err);
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong while placing the order");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleOrderClick} disabled={loading}>
            {loading ? "Placing Order..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderActionWindow;
