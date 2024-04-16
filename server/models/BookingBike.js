import mongoose from "mongoose";

const BookingBikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  pickuploc: { type: String, required: true },
  destinationloc: { type: String, required: true },
});

const BookingBikeModel = mongoose.model("BookingsBike", BookingBikeSchema);

export { BookingBikeModel as BookingBike };
