import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "../../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav
  className={`navbar navbar-expand-lg fixed-top pill-navbar ${
    scrolled ? "navbar-scrolled" : ""
  }`}
>

      <div className="container-fluid align-items-center">

        {/* Brand (routes to Home) */}
        <Link to="/" className="pill-brand d-flex align-items-center gap-2">
          <FaLeaf className="pill-brand-icon" />
          <span className="pill-brand-text">WeCaRe</span>
        </Link>

        {/* Mobile toggler */}
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

        {/* Nav content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto pill-nav-links">

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/therapy" className="dropdown-item">
                    Therapy
                  </Link>
                </li>
                <li>
                  <Link to="/physiotherapy" className="dropdown-item">
                    Physiotherapy
                  </Link>
                </li>
                <li>
                  <Link to="/spa" className="dropdown-item">
                    WeCare Spa
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/resources" className="nav-link">
                Resources
              </Link>
            </li>
          </ul>

          {/* CTA */}
      
          <a className="pill-cta" href="#Appointment-section"> Book Appointment</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
