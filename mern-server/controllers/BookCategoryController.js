import BookCategoryModel from "../models/BookCategory.js";

class BookCategoryController {
  // get all book category
  // Get all books (optional additional method)
  static async getBookCategory(req, res) {
    try {
      const books = await BookCategoryModel.find(); // Fetch all books from the database
      res
        .status(200)
        .json({ status: "success", message: "Successfully fetched", books });
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Failed to fetch books" });
    }
  }

  //register book category controller
  static bookcategoryRegister = async (req, res) => {
    try {
      const { title } = req.body;

      //check the category the already exists
      const existCategory = await BookCategoryModel.findOne({ title });
      if (existCategory) {
        return res.status(400).json({ message: "category already exists" });
      }

      // create new category
      const newBookCategory = BookCategoryModel({ title });
      await newBookCategory.save();
      res.status(201).json({
        message: "Category added successfully",
        data: newBookCategory,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
}

export default BookCategoryController;
