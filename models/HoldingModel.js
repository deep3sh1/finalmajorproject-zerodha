const mongoose = require("mongoose");
const HoldingSchema = require("../Schemas/HoldingSchemas"); // make sure the path is correct

const HoldingModel = mongoose.model("Holding", HoldingSchema);

module.exports = HoldingModel; // export directly
