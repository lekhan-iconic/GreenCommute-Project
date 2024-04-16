// BookingForm.js

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden; /* To ensure border doesn't double up */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const BookingContainer = styled(ContentContainer)`
  border-right: 1px solid #ccc;
`;

const ImageContainer = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const BookingForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickuploc, setPickuploc] = useState("");
  const [destinationloc, setDestinatationloc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/booking", {
        name,
        mobile,
        pickuploc,
        destinationloc,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/success");
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
    <>
      <Navbar />

      <h1 className="text-center fs-20 fw-bold">Car Ride Booking</h1>

      <Container>
        <BookingContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                onFocus={clearErrorMessage}
                required
              />
              {/* {formErrors.name && (
                <span style={{ color: "red" }}>{formErrors.name}</span>
              )} */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="mobile">Mobile No:</Label>
              <Input
                type="number"
                id="number"
                name="mobile"
                onChange={(e) => setMobile(e.target.value)}
                onFocus={clearErrorMessage}
                required
              />
              {/* {formErrors.name && (
                <span style={{ color: "red" }}>{formErrors.name}</span>
              )} */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="pickupLocation">Pickup Location:</Label>
              <Input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                onChange={(e) => setPickuploc(e.target.value)}
                onFocus={clearErrorMessage}
                required
              />
              {/* {formErrors.pickupLocation && (
                <span style={{ color: "red" }}>
                  {formErrors.pickupLocation}
                </span>
              )} */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="destination">Destination:</Label>
              <Input
                type="text"
                id="destination"
                name="destination"
                onChange={(e) => setDestinatationloc(e.target.value)}
                onFocus={clearErrorMessage}
                required
              />
              {/* {formErrors.destination && (
                <span style={{ color: "red" }}>{formErrors.destination}</span>
              )} */}
            </FormGroup>
            <Button type="submit">Book Ride</Button>
          </form>
        </BookingContainer>
        <ImageContainer>
          <Image src="car.png" alt="Car Images" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default BookingForm;
