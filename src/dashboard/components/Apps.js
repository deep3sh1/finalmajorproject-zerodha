import React from "react";

const Apps = () => {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div
        className="card shadow-sm text-center p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {/* Logo */}
        <div className="mb-3">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "120px" }}
          />
        </div>

        {/* Shoutout / Description */}
        <h5 className="mb-2">Inspired by Zerodha Kite</h5>
        <p className="text-muted mb-4">
          This dashboard experience is inspired by the original Zerodha Kite
          trading platform. Created for learning and educational purposes.
        </p>

        {/* Open Account Button */}
        <a
          href="https://kite.zerodha.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open Zerodha Account
        </a>
      </div>
    </div>
  );
};

export default Apps;
