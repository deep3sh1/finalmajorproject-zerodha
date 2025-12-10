const mongoose = require("mongoose");

const HoldingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number, required: true },
  price: { type: Number, required: true },
  net: { type: String, required: true }, // not Number — your data has "+0.58%"
  day: { type: String, required: true },
  isLoss: { type: Boolean, default: false },
});

module.exports = HoldingSchema;
