import mongoose from "mongoose";

//defining schema
const bookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  autherName: { type: String, required: true },
  imageUrl: { type: String, required: false },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookCategoryModel", // Reference to the Book Category model
    required: true,
  },
  // category: { type: String },

  description: { type: String },
  bookPdf: { type: String, required: false },
});

// creating a model using schema
const Book = mongoose.model("Book", bookSchema);
export default Book;

// yesko controller banaune
