import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/forgot-password", {
        email,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Reset Password link sent Succesfully to " + email);
          navigate("/login");
        } else {
          setErrorMessage("Please Enter Registered Email");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          onFocus={clearErrorMessage}
          required
        />

        <button type="submit">Send</button>
        <p>
          New User?{" "}
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </p>
        <p className="error-message">{errorMessage}</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
