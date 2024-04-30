import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDB from "./db/connectdb.js";
// importing user routes
import userRoutes from "./routes/UserRoutes.js";

// importing book category add router
import BookCategoryRoutes from "./routes/BookCategoryRoutes.js";
import BookRoute from "./routes/BookRoute.js";
const app = express();
const port = process.env.PORT;

const DATABSE_URL = process.env.DATABSE_URL;
// Cors policy
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Database connection
connectDB(DATABSE_URL);

// yrI2KGoMxLHYNo0v  mern-book-store password

// JSON
app.use(express.json());

// load Routes
app.use("/api/user", userRoutes);
// Use the book category routes
app.use("/api/book-category", BookCategoryRoutes);
app.use("/api", BookRoute); // Prefix with /api to separate API routes

app.listen(port, () => {
  console.log(`Backend server Running at http://localhost:${port}`);
});
