import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5 me-2">
      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-6">
          <h2 className="mb-3 fs-2">Unbeatable pricing</h2>

          <p style={{ lineHeight: "1.8", fontSize: "17px" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              fontWeight: "500",
              fontSize: "17px",
            }}
          >
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* RIGHT SIDE – 3 Tight Cards */}
        <div 
          className="col-4 d-flex justify-content-end mb-8 ms-1" // push cards to right
          style={{ gap: "40px" }} // space between cards
        >

          {/* CARD 1 */}
          <div className="text-center" style={{ padding: "0 4px" }}>
            <h1 style={{ color: "#ff9800", fontSize: "50px", marginBottom: "3px" }}>₹0</h1>
            <p style={{ fontSize: "13px", margin: 0 }}>Free account<br />opening</p>
          </div>

          {/* CARD 2 */}
          <div className="text-center" style={{ padding: "0 4px" }}>
            <h1 style={{ color: "#ff9800", fontSize: "50px", marginBottom: "3px" }}>₹0</h1>
            <p style={{ fontSize: "13px", margin: 0 }}>
              Free equity delivery<br />& mutual funds
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center" style={{ padding: "0 4px" }}>
            <h1 style={{ color: "#ff9800", fontSize: "50px", marginBottom: "3px" }}>₹20</h1>
            <p style={{ fontSize: "13px", margin: 0 }}>
              Intraday<br />and F&O
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
