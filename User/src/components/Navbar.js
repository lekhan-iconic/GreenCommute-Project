import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg rounded bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/home">
            MERN
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-warning fs-5 fw-bold" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/features"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/" className="btn btn-outline-warning">
                Logout
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
