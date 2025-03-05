const router = require('express').Router();
const User = require('../models/user');
const { authenticateToken } = require('./userAuth');

//add book to favorites
router.put("/add-book-to-favourite", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if (isBookFavourite) {
            return res.status(200).json({ message: "Book is already in favorites" });
        } else {
            await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
            return res.status(200).json({ message: "Book added to favorites successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error!!" });
    }
})

//remove book from favorites

router.put("/remove-book-from-favourite", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if (!isBookFavourite) {
            return res.status(200).json({ message: "Book is not in favorites" });
        }
        else {
            await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
        }
        return res.status(200).json({ message: "Book removed from favorites successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error!!" });
    }
})

//get favorite books of a particular user

router.get("/get-favourite-books", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate('favourites');
        const favoriteBooks = userData.favourites;
        return res.json({
            status: "Success",
            data: favoriteBooks,
        });
    } 
    catch (error) {
        res.status(500).json({ message: "Internal server error!!" });
    }
});

module.exports = router;