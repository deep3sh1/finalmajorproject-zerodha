import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) setUser(JSON.parse(loggedUser));
  }, []);

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
  };

  const menuClass = "menu ps-1";
  const activeMenuClass = "menu selected ps-1";

  return (
    <div className="menu-container">
      <div className="logo mb-0 d-flex align-items-center" style={{ cursor: "default" }}>
        <FaChartLine size={34} className="me-2 text-primary" />
        <span className="h5 m-0 text-primary fw-bold">Zerodha</span>
      </div>

      <div className="menus">
        <ul className="list-unstyled mt-4">

          <li>
            <Link
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/apps"
              onClick={() => handleMenuClick(5)}
              className="text-decoration-none"
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>

        </ul>

        <hr />

        <div className="profile position-relative" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="d-flex align-items-center gap-2">
            <div
              className="mb-0 avatar rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px", fontSize: "14px" }}
            >
              {user ? user.username[0].toUpperCase() : "U"}
            </div>
            <p className="mb-0 fw-semibold">{user ? user.username : "User"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown position-absolute bg-white shadow rounded"
              style={{
                top: "160%",
                right: "0",
                zIndex: 1000,
                minWidth: "160px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="px-3 py-2 border-bottom text-truncate">
                <strong>{user ? user.username : "User"}</strong>
              </div>
              <button
                className="btn btn-danger w-100 rounded-0 text-center"
                style={{ borderRadius: 0 }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
