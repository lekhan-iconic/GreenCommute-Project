import React from "react";
import "../App.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <h2 className="text-center fs-20 fw-bold">Contact Me</h2>
      <form action="https://formspree.io/f/xkndrkaq" method="POST">
        <div class="contact-container container">
          <div class="contact-content">
            <div class="inputs">
              <input type="text" name="Name" placeholder="Name" />
              <input type="email" name="Email" placeholder="Email" />
            </div>
            <input type="text" name="Info" placeholder="Info" />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit" class="btn">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
