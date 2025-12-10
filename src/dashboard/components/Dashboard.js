import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    // ✅ Check localStorage for user and token
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      // Not logged in, redirect to login
      window.location.href = "/login";
    } else {
      setUserLoaded(true);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
