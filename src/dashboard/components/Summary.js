import React from "react";

const Summary = () => {
  // ✅ Get logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "Trader"; // fallback to Trader if username is not found

  return (
    <div className="bg-light">

      {/* USER HEADER */}
      <div className="bg-white border-bottom p-3">
        <h6 className="fw-semibold text-dark mb-1">
          Hi, {username} 👋
        </h6>
        <small className="text-muted">Welcome back to your dashboard</small>
      </div>

      {/* EQUITY SECTION */}
      <div className="bg-white border my-3 p-3">
        <p className="text-secondary fw-semibold mb-2">Equity</p>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="text-primary fw-bold mb-0">₹3.74k</h3>
            <small className="text-muted">Margin available</small>
          </div>

          <div className="text-end">
            <p className="mb-1 text-dark">
              Margins used <span className="fw-semibold">0</span>
            </p>
            <p className="mb-0 text-dark">
              Opening balance <span className="fw-semibold">₹3.74k</span>
            </p>
          </div>
        </div>
      </div>

      {/* HOLDINGS SECTION */}
      <div className="bg-white border my-3 p-3">
        <p className="text-secondary fw-semibold mb-2">Holdings (13)</p>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="fw-bold text-success mb-0">
              ₹1.55k <small className="fs-6">+5.20%</small>
            </h3>
            <small className="text-muted">P&amp;L</small>
          </div>

          <div className="text-end">
            <p className="mb-1 text-dark">
              Current Value <span className="fw-semibold">₹31.43k</span>
            </p>
            <p className="mb-0 text-dark">
              Investment <span className="fw-semibold">₹29.88k</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Summary;
