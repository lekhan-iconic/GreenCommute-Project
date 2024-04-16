import mongoose from "mongoose";

const BookingBicycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  pickuploc: { type: String, required: true },
  destinationloc: { type: String, required: true },
});

const BookingBicycleModel = mongoose.model(
  "BookingsBicycle",
  BookingBicycleSchema
);

export { BookingBicycleModel as BookingBicycle };
