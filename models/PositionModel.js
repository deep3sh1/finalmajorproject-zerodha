const mongoose = require("mongoose");
const PositionSchema = require("../Schemas/PositionSchema");

const PositionModel = mongoose.model("Position", PositionSchema);

module.exports = PositionModel; // export the model directly
