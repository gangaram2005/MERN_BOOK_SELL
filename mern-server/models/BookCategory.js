import mongoose from "mongoose";

//defining schema
const BookCategorySchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
});

// creating a model using schema
const BookCategoryModel = mongoose.model("BookCategory", BookCategorySchema);
export default BookCategoryModel;
