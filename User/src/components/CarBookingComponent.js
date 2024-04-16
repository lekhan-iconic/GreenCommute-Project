import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function CarBookingComponent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getcarbookings")
      .then((response) => setBookings(response.data))
      .catch((err) => console.log(err));
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="booking">
      <Navbar />
      <h1>Car Bookings</h1>
      <table className=" table table-secondary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Pickup Location</th>
            <th>Destination Location</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each booking */}
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.mobile}</td>
              <td>{booking.pickuploc}</td>
              <td>{booking.destinationloc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarBookingComponent;
