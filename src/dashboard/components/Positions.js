import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title text-dark fw-semibold">
        Positions ({positions.length})
      </h3>

      <div className="order-table border rounded bg-white">
        <table className="table table-bordered table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td className="fw-semibold">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={`fw-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`fw-semibold ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
