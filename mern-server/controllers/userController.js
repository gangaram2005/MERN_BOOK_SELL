import UserModel from "../models/User.js";
import bcrypt from "bcrypt"; // for password hashing
import jwt from "jsonwebtoken"; // token generate garna ko lagi

class UserController {
  // user registration
  static userRegistration = async (req, res) => {
    const { name, email, password, password_confirmation, tc } = req.body;
    const user = await UserModel.findOne({ email: email }); // first ko email database ko ho ra last ko email user bata aako email ho
    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (name && email && password && password_confirmation && tc) {
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(10); // for password hashing
            const hashpassword = await bcrypt.hash(password, salt);
            // saving the document
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashpassword,
              tc: tc,
            });
            await doc.save();
            // enable jwt authentication
            const saved_user = await UserModel.findOne({ email: email });
            // generate jwt token
            const token = jwt.sign(
              { userId: saved_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.status(201).send({
              status: "Success",
              message: "Registration Success",
              token: token,
            });
            document.getElementById("register-form").reset();
          } catch (error) {
            console.log(error);
            res.send({ status: "Failed", message: "Unable to register" });
          }
        } else {
          res.send({
            status: "Failed",
            message: "Password and confirm password does not matched",
          });
        }
      } else {
        res.send({ status: "Failed", message: "All Field are required" });
      }
    }
  };

  // user login
  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            // generate jwt token
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            // login
            res.send({
              status: "success",
              message: "Login Success",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Email or password is not matched",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not a register user",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fields are required" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // change password
  static changePassword = async (req, res) => {
    const { password, password_confirmation } = req.body;
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.send({
          status: "failed",
          message: "new password and confirm password does not matched",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHashpassword = await bcrypt.hash(password, salt);
        //console.log(req.user)
        await UserModel.findByIdAndUpdate(req.user._id, {
          $set: { password: newHashpassword },
        });

        // middleware ko throw
        res.send({
          status: "success",
          message: "password changed successfully",
        });
      }
    } else {
      res.send();
    }
  };

  // view profile
  static loggedUser = async (req, res) => {
    res.send({ user: req.user });
  };

  // send email to user
  static sendUserPasswordEmail = async (req, res) => {
    const { email } = req.body;
    if (email) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userId: user._id }, secret, {
          expiresIn: "40m",
        });
        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;
        console.log(link);
        res.send({
          status: "Success",
          message: "Password Reset Email Sent... Please Check Your Email",
        });
      } else {
        res.send({ status: "failed", message: "Email doesn't exists" });
      }
    } else {
      res.send({ status: "failed", message: "Please fulfill the Email" });
    }
  };

  // user Password Reset
  static userPasswordReset = async (req, res) => {
    const { password, password_confirmation } = req.body;
    const { id, token } = req.params;
    const user = await UserModel.findById(id);
    const new_secret = user._id + process.env.JWT_SECRET_KEY;
    try {
      jwt.verify(token, new_secret);
      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          res.send({
            status: "failed",
            message: "New Password and confirm password doesn't matched",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);
          await UserModel.findByIdAndUpdate(user._id, {
            $set: { password: newHashPassword },
          });
          res.send({
            status: "success",
            message: "Password Reset Successfully",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Field are required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Invalid Token" });
    }
  };
}

export default UserController;

// aba yesko routes banaunu parxa UserRoutes.js
