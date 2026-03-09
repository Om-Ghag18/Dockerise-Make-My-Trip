const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  destination: String,
  date: Date,
  price: Number
});

module.exports = mongoose.model("Booking", bookingSchema);
