const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./connection/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");


app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1", User)
app.use("/api/v1", Books)
app.use("/api/v1", Favourite)
app.use("/api/v1", Cart)
app.use("/api/v1", Order)

//Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`);
});



// app.get("/", (req, res) => {
//     res.send("Hello from Backend...");
// });
// useless mf maybe will be in use in future when debugging
// hehehe 