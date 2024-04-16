import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";
import eyeOpenImage from "../assets/eye-open.png";
import eyeCloseImage from "../assets/eye-close.png";

const Login = () => {
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

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/home");
        } else {
          setErrorMessage("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="">
        <div className="sign-up-container">
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h1>Login</h1>
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
            <button type="submit">Login</button>
            <Link className="link  fw-bold" to="/forgotPassword">
              Forgot Password?
            </Link>
            <p className="text-white">
              New User?{" "}
              <Link className="link fw-bold" to="/signup">
                Sign up
              </Link>
            </p>
            <p className="error-message">{errorMessage}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
