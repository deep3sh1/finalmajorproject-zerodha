import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = ("https://finalmajorproject-zerodha-backend.onrender.com/allHoldings");

    axios
      .get(url)
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setError("Error fetching holdings");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-secondary fw-semibold">Loading holdings...</p>;
  if (error) return <p className="text-danger fw-semibold">{error}</p>;

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(13, 110, 253, 0.6)", // Zerodha-like blue
      },
    ],
  };

  return (
    <>
      <h3 className="title text-dark fw-semibold">
        Holdings ({allHoldings.length})
      </h3>

      <div className="order-table border rounded bg-white">
        <table className="table table-bordered table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td className="fw-semibold">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={`fw-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`fw-semibold ${profClass}`}>
                    {stock.net}
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

      {/* ✅ Summary Section (Only Colors Improved) */}
      <div className="row fw-semibold">
        <div className="col text-dark">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p className="text-secondary">Total investment</p>
        </div>

        <div className="col text-dark">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p className="text-secondary">Current value</p>
        </div>

        <div className="col text-success">
          <h5 className="fw-bold">1,553.40 (+5.20%)</h5>
          <p className="text-secondary">P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
