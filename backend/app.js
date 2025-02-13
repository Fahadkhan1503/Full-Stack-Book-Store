const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./connection/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");

// app.get("/", (req, res) => {
//     res.send("Hello from Backend...");
// });



//routes
app.use("/api/v1", User)
app.use("/api/v1", Books)
app.use("/api/v1", Favourite)
app.use("/api/v1", Cart)

//Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${process.env.PORT}`);
});