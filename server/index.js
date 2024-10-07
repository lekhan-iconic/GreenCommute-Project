import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import { UserRouter } from "./routes/user.js";
import { BookingRouter } from "./routes/booking.js";
import { BookingBikeRouter } from "./routes/bookingbike.js";
import { BookingBicycleRouter } from "./routes/bookingbicycle.js";
import { Booking } from "./models/Booking.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3001"], credentials: true }));
app.use("/auth", UserRouter);
app.use("/", BookingRouter);
app.use("/", BookingRouter);
app.use("/", BookingBikeRouter);
app.use("/", BookingBicycleRouter);

const uri = "mongodb://127.0.0.1:27017/auth";

mongoose.connect(uri);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running");
});
