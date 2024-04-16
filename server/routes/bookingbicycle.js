import express from "express";
import { BookingBicycle } from "../models/BookingBicycle.js";

const router = express.Router();

router.post("/bookingbicycle", async (req, res) => {
  try {
    const { name, mobile, pickuploc, destinationloc } = req.body;

    const newUser = new BookingBicycle({
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
router.get("/getbicyclebookings", async (req, res) => {
  BookingBicycle.find()
    .then((booking) => res.json(booking))
    .catch((err) => res.json(err));
});

export { router as BookingBicycleRouter };
