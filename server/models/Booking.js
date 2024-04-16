import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  pickuploc: { type: String, required: true },
  destinationloc: { type: String, required: true },
});

const BookingModel = mongoose.model("Bookingscar", BookingSchema);

export { BookingModel as Booking };
