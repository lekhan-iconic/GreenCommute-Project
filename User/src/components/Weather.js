import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changehandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39836d9730140d0e70deb176124769ef`
      )
      .then((response) => {
        const kelvin = response.data.main.temp;
        const celsius = kelvin - 273.15;
        setResult(Math.round(celsius));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="weather-container">
        <div className="text-center">
          <h1 className="text-success-emphasis fs-12 fw-bold">Weather-App</h1>
          <h2 className="text-info fs-8 fw-bold">
            The Temperature of {city} is {result + "deg"}{" "}
          </h2>

          <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter City Name"
                value={city}
                onChange={changehandler}
              />
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-primary rounded-pill form-control form-control-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Weather;
