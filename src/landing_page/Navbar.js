import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 border-bottom">
            <div className="container">

                {/* Logo */}
                <Link to="/">
                    <img src='media/images/logo.svg' style={{ width: "25%" }} alt='logo' />
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className=" ms-auto justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center" style={{ gap: "30px" }}>

                        {/* React Router Links */}
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productpage" className="nav-link">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricingpage" className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/supportpage" className="nav-link">Support</Link>
                        </li>

                        {/* CTA button */}
                        <li className="nav-item">
                            <Link to="/signup">
                                <button className="btn btn-primary" style={{ padding: "6px 18px" }}>
                                    Get Started
                                </button>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
