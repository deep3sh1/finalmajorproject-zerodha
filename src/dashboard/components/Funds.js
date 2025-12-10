import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Instant, zero-cost fund transfers with UPI</h5>
      </div>

      {/* Main Row */}
      <div className="row g-4 align-items-start">
        {/* ✅ Equity Card */}
        <div className="col-lg-8 col-md-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-primary mb-3">Equity</h5>

              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>Available Margin</td>
                      <td className="fw-bold text-success">₹4,043.10</td>
                    </tr>
                    <tr>
                      <td>Used Margin</td>
                      <td>₹3,757.30</td>
                    </tr>
                    <tr>
                      <td>Available Cash</td>
                      <td>₹4,043.10</td>
                    </tr>
                    <tr>
                      <td>Opening Balance</td>
                      <td>₹4,043.10</td>
                    </tr>
                    <tr>
                      <td>Closing Balance</td>
                      <td>₹3,736.40</td>
                    </tr>
                    <tr>
                      <td>Payin</td>
                      <td>₹4,064.00</td>
                    </tr>
                    <tr>
                      <td>SPAN</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>Delivery Margin</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>Exposure</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>Options Premium</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr className="border-top">
                      <td>Collateral (Liquid Funds)</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>Collateral (Equity)</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Total Collateral</td>
                      <td className="fw-bold">₹0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Commodity Card + Buttons aligned beside it */}
        <div className="col-lg-4 col-md-12 d-flex flex-column justify-content-between">
          <div className="card shadow-sm text-center p-4 mb-3">
            <h5 className="text-primary mb-3">Commodity</h5>
            <p className="mb-3">You don't have a commodity account yet</p>
            <Link className="btn btn-primary">Open Account</Link>
          </div>

          {/* ✅ Buttons slightly UP and aligned neatly */}
          <div className="d-flex justify-content-end gap-3 mt-1 me-4">
            <Link className="btn btn-success">Add Funds</Link>
            <Link className="btn btn-primary">Withdraw</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
