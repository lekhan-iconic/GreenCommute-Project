import express from "express";
import { Booking } from "../models/Booking.js";

const router = express.Router();

router.post("/booking", async (req, res) => {
  try {
    const { name, mobile, pickuploc, destinationloc } = req.body;

    const newUser = new Booking({
      name,
      mobile,
      pickuploc,
      destinationloc,
    });

    await newUser.save();
    return res.json({ status: true, message: "Record registered" });
  } catch (error) {
    console.error("Error signing up:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
router.get("/getcarbookings", async (req, res) => {
  Booking.find()
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

export { router as BookingRouter };
