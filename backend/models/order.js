const mongoose = require("mongoose");
const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    // ref: "users", //that single s cause the major issue
    // but "user" is also working and only with this admin get-all-orders is working
    ref: "user",
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "books",
  },
  status: {
    type: String,
    default: "Order Placed",
    enum: ["Order Placed","Out for delivery", "Deliverved", "Canceled"],
  },
},
{timestamps: true}
);

module.exports = mongoose.model("order", order);