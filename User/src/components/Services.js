import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1 className="text-center p-3 fs-12 fw-bold">Our Services</h1>
      <br />
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <div className="card h-100">
              <center>
                {" "}
                <img
                  style={{ width: "250px" }}
                  src="car (1).png"
                  className="card-img-top"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title bg-success p-2 text-white ">
                    Car Service
                  </h5>{" "}
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>{" "}
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/carbooking">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Book a Ride
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
                  src="moto.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title bg-success p-2 text-white">
                    Electric Motorcycle Service
                  </h5>{" "}
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>{" "}
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/bikebooking">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Book a Ride
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
                    Bike Service
                  </h5>
                </center>
                <center>
                  {" "}
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </center>
                <br />
                <center>
                  {" "}
                  <Link to="/bicyclebooking">
                    {" "}
                    <button type="button" class="btn bg-success text-light">
                      Book a Ride
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

export default Services;
