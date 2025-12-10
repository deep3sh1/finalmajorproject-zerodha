import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center text-center">

        {/* Heading */}
        <div className="col-lg-8">
          <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
            Open a Zerodha account
          </h1>

          {/* Description */}
          <p className="mb-4" style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.7" }}>
            Modern platforms and apps, ₹0 account opening, and flat ₹20 intraday and F&O trades.
          </p>

          {/* Call-to-Action Button */}

          <Link to="/signup">
            <button
              className="btn btn-primary btn-lg"
              style={{ padding: "12px 40px", borderRadius: "6px" }}
            >
              Sign Up Now
            </button>

          </Link>



        </div>

      </div>
    </div>
  );
}

export default OpenAccount;
