import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import "./App.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Website from "./components/Website.js";
import "./project.css";
import Services from "./components/Services.js";
import BookingForm from "./components/BookingForm.js";
import BikeForm from "./components/BikeForm.js";
import BicycleForm from "./components/BicycleForm.js";
import Features from "./components/Features.js";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Success from "./components/Success.js";
import CarBookingComponent from "./components/CarBookingComponent.js";
import SuccessBike from "./components/SuccessBike.js";
import BikeBookingComponent from "./components/BikeBookingComponent.js";
import Successbicycle from "./components/Successbicycle.js";
import BicycleBookingComponent from "./components/BicycleBookingComponent.js";
import EmissionCalculator from "./components/EmissionCalculator.js";
import Weather from "./components/Weather.js";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Website />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route
            path="/resetPassword/:token"
            element={<ResetPassword />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/carbooking" element={<BookingForm />}></Route>
          <Route path="/bikebooking" element={<BikeForm />}></Route>
          <Route path="/bicyclebooking" element={<BicycleForm />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/carbookings" element={<CarBookingComponent />}></Route>
          <Route path="/successbike" element={<SuccessBike />}></Route>
          <Route
            path="/bikebookings"
            element={<BikeBookingComponent />}
          ></Route>
          <Route path="/successbicycle" element={<Successbicycle />}></Route>
          <Route
            path="/bicyclebookings"
            element={<BicycleBookingComponent />}
          ></Route>
          <Route
            path="/Emissiontracking"
            element={<EmissionCalculator />}
          ></Route>
          <Route path="/weatherapp" element={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
