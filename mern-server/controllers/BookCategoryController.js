import BookCategoryModel from "../models/BookCategory.js";

class BookCategoryController {
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
