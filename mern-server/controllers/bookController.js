import Book from "../models/Books.js"; // Import the Book model
import BookCategoryModel from "../models/BookCategory.js";

class BookController {
  // Create a new book
  static async createBook(req, res) {
    console.log(req.body, 16);
    try {
      const {
        bookTitle,
        autherName,
        imageUrl,
        category,
        description,
        bookPdf,
      } = req.body;

      // Create a new book document
      const newBook = new Book({
        bookTitle,
        autherName,
        imageUrl,
        category,
        description,
        bookPdf,
      });

      // Save the new book
      const savedBook = await newBook.save();

      // Respond with the created book
      res.status(201).json({
        status: "success",
        message: "Book added Successfully",
        savedBook,
      });
    } catch (error) {
      console.error("Error creating book:", error);
      res.status(500).json({ error: "Failed to create book" });
    }
  }

  // Get all books (optional additional method)
  static async getBooks(req, res) {
    try {
      const books = await Book.find(); // Fetch all books from the database
      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Failed to fetch books" });
    }
  }

  // Update a book
  static async updateBook(req, res) {
    try {
      const { bookId } = req.params;
      const {
        bookTitle,
        autherName,
        imageUrl,
        category,
        description,
        bookPdf,
      } = req.body;

      // check if the book is exists
      const book = await Book.findById(bookId);
      if (!book) {
        return res
          .status(404)
          .json({ status: "failed", message: "Book not found" });
      }

      // update a book
      (book.bookTitle = bookTitle || book.bookTitle),
        (book.autherName = autherName || book.autherName),
        (book.imageUrl = imageUrl || book.imageUrl),
        (book.category = category || book.category),
        (book.description = description || book.description),
        (book.bookPdf = bookPdf || book.bookPdf);
      await book.save();
      res
        .status(200)
        .json({ message: "Book updated successfully", data: book });
    } catch (error) {
      res
        .status(500)
        .send({ status: "failed", message: "server error", error });
    }
  }

  // Delete a book by ID
  static async deleteBook(req, res) {
    try {
      const { bookId } = req.params;
      const book = await Book.findByIdAndDelete(bookId);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }

      res
        .status(200)
        .json({ message: "Book deleted successfully", data: book });
    } catch (error) {
      res
        .status(500)
        .send({ status: "failed", message: "server error", error });
    }
  }
}

export default BookController;
