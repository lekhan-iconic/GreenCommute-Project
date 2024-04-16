import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className="text-center p-3 fs-12 fw-bold">Our Features</h1>
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <div className="card h-100">
              <center>
                {" "}
                <img
                  style={{ width: "250px" }}
                  src="emission.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title bg-success p-2 text-white ">
                    Emission Tracking
                  </h5>{" "}
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    Emission tracking is the process of measuring, monitoring,
                    and recording the amount of carbon dioxide (CO2) and other
                    greenhouse gases (GHGs). It's important for understanding
                    and addressing climate change.
                  </p>{" "}
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/Emissiontracking">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Tracking
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container">
            <div className="card h-100">
              <center>
                {" "}
                <img
                  style={{
                    width: "250px",
                    height: "250px",
                  }}
                  src="weather.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title bg-success p-2 text-white">
                    Weather App
                  </h5>{" "}
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    The day-to-day conditions of the atmosphere at a place with
                    respect to elements like humidity, temperature, wind speed,
                    rainfall, etc. is called the weather of that place. Weather
                    can be cloudy, sunny, rainy, stormy or clear.
                  </p>{" "}
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/weatherapp">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Check Weather
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container">
            <div className="card h-100">
              <center>
                {" "}
                <img
                  style={{ width: "250px" }}
                  src="bike (1).jpg"
                  className="card-img-top"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title bg-success p-2 text-white">
                    Public Transportation
                  </h5>
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    Public transportation is a system of group travel services
                    that are available for the general public to use.Public
                    transportation typically operates on established routes, has
                    a schedule, and charges a fee for each trip.
                  </p>
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/publictransportation">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Check routes
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
