// making routes for the bookcategory
import mongoose from "mongoose";
import express from "express";
//making the router object
const router = express.Router();

import BookCategoryController from "../controllers/BookCategoryController.js";
import checkUserAuth from "../middleware/auth-middleware.js";

//making the protected route for anonymous can not access add category

// yo book category add garne url banyo
router.post("/addcategory", BookCategoryController.bookcategoryRegister);
router.get("/addcategory", BookCategoryController.getBookCategory);

export default router;

// yo routes lai index.js file ma mention garnu parxa
