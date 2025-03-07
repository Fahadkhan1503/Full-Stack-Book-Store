const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Book = require("../models/book");
const { authenticateToken } = require("./userAuth");

//Add book --admin
router.post("/add-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if(user.role !== "admin") {
            return res.status(400).json({ message: "You are not authorized to add a book" });
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        });
        await book.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!!" });
    }
});

//Update book --admin
router.put("/update-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
          return res
            .status(400)
            .json({ message: "You are not authorized to add a book" });
        }
        const { bookid } = req.headers;
        await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        });
        
        return res.status(200).json({ message: "Book updated Successfully!!" });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: "An Error occurred!!" });
    }
});

//Delete book --admin
router.delete("/delete-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {
          return res
            .status(400)
            .json({ message: "You are not authorized to add a book" });
        }
        const { bookid } = req.headers;
        await Book.findByIdAndDelete(bookid);
        return res.status(200).json({ message: "Book deleted successfully!!" });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: "An Error occurred!!" });
    }
});

//Get all books
router.get("/get-all-books", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        return res.json({
            status: "success",
            data: books,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An Error occurred!!" });
    }
});

//get recent books
router.get("/get-recent-books", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 }).limit(4);
        return res.json({
            status: "success",
            data: books,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An Error occurred!!" });
    }
});

//get book by id
router.get("/get-book-by-id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.json({
            status: "success",
            data: book,
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: "An Error occurred!!" });
    }
});

module.exports = router;




// book
// {
//     "url":"Pic2",
//     "title":"Peer-e-kamil",
//     "author":"Umera ahmed",
//     "price":"800",
//     "desc":"The book is all about the fucking love story of umaima and the fucking salaar sikandar who's in the hearts of many pretty girls",
//     "language":"Urdu"
//   }