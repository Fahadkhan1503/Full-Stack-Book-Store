const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require('../models/book');
const Order = require("../models/order");
const User = require("../models/user");

//place order
router.post("/place-order", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;
    // console.log("Received Order Data:", order);

    for (const orderData of order) {
      const newOrder = new Order({ user: id, book: orderData._id });
      const orderDataFromDb = await newOrder.save();

      //saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDb._id },
      });

      //clearing cart
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }
    return res.json({
      status: "Success",
      message: "Order placed successfully",
    });
  } catch (error) {
      //  console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//get order history of a particular user
router.get("/get-order-history", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const ordersData = userData.orders.reverse();
    return res.json({
      status: "Success",
      data: ordersData,
    });
  } catch (error) {
    return res.status(500).json({ message: "An Error occurred" });
  }
});

//get-all-orders --admin
router.get("/get-all-orders", authenticateToken, async (req, res) => {
  try {
    // if (req.user.role!== 'admin') {
    //     return res.status(403).json({ message: "Forbidden" });
    // }
    const userData = await Order.find()
      .populate({
        path: "book",
      })
      .populate({
        path: "user",
      })
      .sort({ createdAt: -1 });
    console.log("Orders fetched:", userData);
    return res.json({
      status: "Success",
      data: userData,
    });
  } catch (error) {
    console.log(error)
    return res.status(570).json({ message: "An Error occurred" });
  }
});



//update order status --admin
router.put("/update-order-status/:id", authenticateToken, async (req, res) => {
  try {
    // if (req.user.role !== "admin") {
    //   return res.status(403).json({ message: "Forbidden" });
    // }
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { status: req.body.status });
    return res.json({
      status: "Success",
      message: "Status updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "An Error occurred" });
  }
});

module.exports = router;
