import express from "express";
const router = express.Router();
import UserModel from "../models/User.js";

import UserController from "../controllers/userController.js";
import checkUserAuth from "../middleware/auth-middleware.js";

// Route level middleware - To protect Route
router.use("/changepassword", checkUserAuth);
router.get("/loggeduser", checkUserAuth);

// Public Routes
router.get("/getalluser", UserController.getUser);
router.post("/register", UserController.userRegistration);
// router.post("/register", async (req, res) => {
//   const { name, email, password1, cpassword1 } = req.body;
//   const ok = { name, email, password: password1, cpassword: cpassword1 };
//   const model = new UserModel(ok);
//   const s = await model.save();
//   console.log(s);
// });
router.post("/login", UserController.userLogin);
router.post("/sent-reset-password-email", UserController.sendUserPasswordEmail);
router.post("/reset-password/:id/:token", UserController.userPasswordReset);

// Private Route or Protected Route
router.post("/changepassword", UserController.changePassword);
router.get("/loggeduser", UserController.loggedUser);

export default router;

// yo routes lai index.js file ma mention garnu parxa
