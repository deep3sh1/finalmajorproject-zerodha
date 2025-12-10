const { model } = require("mongoose"); // import model
const { OrderSchema } = require("../Schemas/OrderSchema"); // correct relative path

const OrderModel = model("Order", OrderSchema); // define model

module.exports =  OrderModel ; // export properly
