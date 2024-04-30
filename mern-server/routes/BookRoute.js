import express from "express";
// Import the controller class
import BookController from "../controllers/bookController.js";
const router = express.Router();

router.post("/books", BookController.createBook);

// Optional route to get all books
router.get("/books", BookController.getBooks);

// Route to update a book by its ID
router.put("/update/:bookId", BookController.updateBook);

// Route to delete a book by its ID
router.delete("/delete/:bookId", BookController.deleteBook);

export default router;
