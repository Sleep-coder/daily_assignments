const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

// Get a book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.json(book);
  } catch (error) {
    res.status(500).send("Error fetching book");
  }
});

// Create a book
router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).send("Error creating book");
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).send("Error updating book");
  }
});

// Borrow a book
router.put("/:id/borrow", async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user data is available from middleware
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    if (book.borrowedBy) {
      return res.status(400).send("This book is already borrowed");
    }
    book.borrowedBy = userId;
    await book.save();
    res.json({ message: "Book borrowed successfully" });
  } catch (error) {
    res.status(500).send("Error borrowing book");
  }
});

// Return a book
router.put("/:id/return", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    if (!book.borrowedBy) {
      return res.status(400).send("This book is not currently borrowed");
    }
    book.borrowedBy = null;
    await book.save();
    res.json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(500).send("Error returning book");
  }
});

module.exports = router;
