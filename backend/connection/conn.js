const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Congratulations!!!! Database is Connected Successfully...");
    } catch (error) {
        console.log(error);
    }
};
conn();