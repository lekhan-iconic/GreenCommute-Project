import express from "express";
import { BookingBike } from "../models/BookingBike.js";

const router = express.Router();

router.post("/bookingbike", async (req, res) => {
  try {
    const { name, mobile, pickuploc, destinationloc } = req.body;

    const newUser = new BookingBike({
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
router.get("/getbikebookings", async (req, res) => {
  BookingBike.find()
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

export { router as BookingBikeRouter };
