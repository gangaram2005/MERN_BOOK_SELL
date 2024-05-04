import UserModel from "../models/User.js";
import bcrypt from "bcrypt"; // for password hashing
import jwt from "jsonwebtoken"; // token generate garna ko lagi

class UserController {
  // get user
  static getUser = async (req, res) => {
    try {
      const users = await UserModel.find(); /// fetching all students
      res
        .status(200)
        .json({ status: "success", message: "Successfully fetching", users });
    } catch (error) {
      res.status(500).json({ error: "An occured while fetching error" });
    }
  };

  // user registration
  static userRegistration = async (req, res) => {
    const { name, email, password1, cpassword1 } = req.body;
    const user = await UserModel.findOne({ email: email }); // first ko email database ko ho ra last ko email user bata aako email ho
    if (user) {
      return res.status(401).json({ error: "Email already exists" });
    } else {
      if (name && email && password1 && cpassword1) {
        if (password1 === cpassword1) {
          try {
            const salt = await bcrypt.genSalt(10); // for password hashing
            const hashpassword = await bcrypt.hash(password1, salt);
            // saving the document
            const clientdata = {
              name,
              email,
              password: hashpassword,
              cpassword: hashpassword,
            };
            const doc = new UserModel(clientdata);
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
          } catch (error) {
            console.log(error);
            res.send({ status: "Failed", message: "Unable to register" });
          }
        } else {
          return res
            .status(402)
            .json({ error: "Password and confirm passowrd is not matched" });
        }
      } else {
        return res.status(400).json({ error: "All Fields are required" });
      }
    }
  };

  // user login
  static userLogin = async (req, res) => {
    try {
      const { email, password1 } = req.body;
      if (email && password1) {
        const user = await UserModel.findOne({ email: email });
        const userrole = user.role;
        console.log(userrole);
        if (user != null) {
          const isMatch = await bcrypt.compare(password1, user.password);
          if (user.email === email && isMatch) {
            // generate jwt token
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );

            return res
              .status(200)
              .json({ role: userrole, message: "Login success" });
          } else {
            return res
              .status(400)
              .json({ message: "Username and password is not matched" });
          }
        } else {
          return res
            .status(404)
            .json({ message: "Your are not a registered student" });
        }
      } else {
        return res.status(403).json({ message: "All fields are required" });
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
          st: "failed",
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
