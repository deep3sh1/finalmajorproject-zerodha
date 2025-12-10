import React from "react";

function Brockerage() {
  return (
    <div className="container mt-5">

      <div className="row p-5 mt-5 border-top">

        {/* LEFT COLUMN */}
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <h2 className="fw-bold mb-4">Brokerage Calculator</h2> {/* Bigger heading */}
          </a>

          <ul
            className="text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "16px", // Increased font size for li items
              marginLeft: "20px",
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-4 p-4 d-flex align-items-start justify-content-center">
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <h2 className="fw-bold">List of Charges</h2> {/* Bigger heading */}
          </a>
        </div>

      </div>

    </div>
  );
}

export default Brockerage;
