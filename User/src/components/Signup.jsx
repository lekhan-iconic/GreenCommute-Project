import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import eyeOpenImage from "../assets/eye-open.png";
import eyeCloseImage from "../assets/eye-close.png";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        } else {
          // setErrorMessage("Email Already Registered");
        }
      })
      .catch((err) => {
        setErrorMessage("Email Already Registered");
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            onChange={(e) => setUserName(e.target.value)}
            onFocus={clearErrorMessage}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearErrorMessage}
          />
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              onFocus={clearErrorMessage}
            />
            <img
              src={showPassword ? eyeOpenImage : eyeCloseImage}
              alt="toggle password visibility"
              id="eyeicon"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit">Sign up</button>
          <p>
            Already Registered?{" "}
            <Link className="link fw-bold" to="/login">
              Login
            </Link>
          </p>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
