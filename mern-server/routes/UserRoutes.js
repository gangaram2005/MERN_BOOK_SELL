import express from "express";
const router = express.Router();

import UserController from "../controllers/userController.js";
import checkUserAuth from "../middleware/auth-middleware.js";

// Route level middleware - To protect Route
router.use("/changepassword", checkUserAuth);
router.get("/loggeduser", checkUserAuth);

// Public Routes
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.post("/sent-reset-password-email", UserController.sendUserPasswordEmail);
router.post("/reset-password/:id/:token", UserController.userPasswordReset);

// Private Route or Protected Route
router.post("/changepassword", UserController.changePassword);
router.get("/loggeduser", UserController.loggedUser);

export default router;

// yo routes lai index.js file ma mention garnu parxa
