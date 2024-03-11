// Import necessary modules
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

// Use middlewares
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Mongodb connection successful");
});

// Define the book schema
const bookSchema = new mongoose.Schema({
  bookName: String,
  bookId: Number,
  bookAuthor: String,
  status: { type: String, default: "Available" },
});

const Book = mongoose.model("Book", bookSchema);

// Routes

// Get all books
app.get("/getBooks", async (req, res) => {
  try {
    const allBooks = await Book.find({});
    res.json(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Add a new book
app.post("/post", async (req, res) => {
  const { bookName, bookId, bookAuthor } = req.body;

  const existingBook = await Book.findOne({ bookId });

  if (existingBook) {
    return res.status(400).send("Book with the same ID already exists");
  }

  const newBook = new Book({
    bookName,
    bookId,
    bookAuthor,
  });

  await newBook.save();
  console.log(newBook);
  res.send("Book added successfully");
});

// Update a book
app.put("/updateBook/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const { bookName, bookAuthor } = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { bookId },
      { $set: { bookName, bookAuthor } },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }

    res.json(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a book
app.delete("/deleteBook/:bookId", async (req, res) => {
  const { bookId } = req.params;

  try {
    const deletedBook = await Book.findOneAndDelete({ bookId });

    if (!deletedBook) {
      return res.status(404).send("Book not found");
    }

    res.json(deletedBook);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Borrow or return a book
app.put("/borrowReturn/:bookId/:status", async (req, res) => {
  const { bookId, status } = req.params;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { bookId },
      { $set: { status } },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }

    res.json(updatedBook);
  } catch (error) {
    console.error("Error updating book status:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
