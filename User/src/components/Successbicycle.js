import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Successbicycle = () => {
  return (
    <div className="success">
      <Navbar />
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <div className="text-center mb-4">
          <h1 className="text-white">You successfully booked a Bicycle</h1>
          <h1 className="text-white">
            With the help of Green Commute Transportation APP
          </h1>
          <div className="mt-4">
            <Link to="/services" className="btn btn-primary me-2">
              Go Back
            </Link>
            <Link to="/bicyclebookings" className="btn btn-primary ms-2">
              See your Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successbicycle;
