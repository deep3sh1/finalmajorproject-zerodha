import React from "react";

function Everythingprice() {
  return (
    <div className="container mt-5">

      {/* ------------------------------------ */}
      {/* SECTION 1: Charges for account opening */}
      {/* ------------------------------------ */}
      <h2 className="mb-4">Charges for account opening</h2>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>

      {/* ------------------------------------ */}
      {/* SECTION 2: Demat AMC Charges */}
      {/* ------------------------------------ */}
      <h2 className="mt-5 mb-4">Demat account AMC and other charges</h2>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Services</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demat account Annual Maintenance Charges (AMC)</td>
            <td>₹ 300 / year</td>
          </tr>
          <tr>
            <td>Dematerialisation</td>
            <td>₹ 150 per certificate</td>
          </tr>
          <tr>
            <td>Rematerialisation</td>
            <td>₹ 150 per certificate</td>
          </tr>
          <tr>
            <td>Courier charges for Demat requests</td>
            <td>₹ 100</td>
          </tr>
        </tbody>
      </table>

      <p className="text-muted" style={{ fontSize: "14px" }}>
        *AMC is charged quarterly.
      </p>

      {/* ------------------------------------ */}
      {/* SECTION 3: Brokerage Charges */}
      {/* ------------------------------------ */}
      <h2 className="mt-5 mb-4">Brokerage charges</h2>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Type</th>
            <th>Brokerage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equity Delivery</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Intraday</td>
            <td>₹ 20 or 0.03% (whichever is lower)</td>
          </tr>
          <tr>
            <td>Equity Futures</td>
            <td>₹ 20 per executed order</td>
          </tr>
          <tr>
            <td>Equity Options</td>
            <td>₹ 20 per executed order</td>
          </tr>
          <tr>
            <td>Currency Futures</td>
            <td>₹ 20 per executed order</td>
          </tr>
          <tr>
            <td>Currency Options</td>
            <td>₹ 20 per executed order</td>
          </tr>
          <tr>
            <td>Commodity</td>
            <td>₹ 20 per executed order</td>
          </tr>
        </tbody>
      </table>

      {/* ------------------------------------ */}
      {/* SECTION 4: Other Charges */}
      {/* ------------------------------------ */}
      <h2 className="mt-5 mb-4">Other charges</h2>

      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>Service</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auto-squareoff</td>
            <td>₹ 50 per order</td>
          </tr>
          <tr>
            <td>Call & Trade</td>
            <td>₹ 50 per order</td>
          </tr>
          <tr>
            <td>Physical contract note</td>
            <td>₹ 20 per contract</td>
          </tr>
          <tr>
            <td>Rejected/Failed instruction charges</td>
            <td>₹ 20</td>
          </tr>
        </tbody>
      </table>

      {/* ------------------------------------ */}
      {/* SECTION 5: Payment Related Charges */}
      {/* ------------------------------------ */}
      <h2 className="mt-5 mb-4">Payment gateway charges</h2>

      <table className="table table-bordered text-center mb-5">
        <thead className="table-light">
          <tr>
            <th>Payment Type</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UPI</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Net banking</td>
            <td>₹ 9</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default Everythingprice;
