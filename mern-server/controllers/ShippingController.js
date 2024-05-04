import mongoose from "mongoose";
import ShippingModel from "../models/ShippingAddress.js";

class ShippingController {
  //get all shipping address of users
  static async getShipping(req, res) {
    try {
      const shipping = await ShippingModel.find();
      res.status(200).json({
        status: "success",
        message: "get all Shipping Address of User",
        shipping,
      });
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Can not fetched the data from the server",
      });
    }
  }

  // register shipping
  static async AddShipping(req, res) {
    try {
      const {
        username,
        country,
        firstname,
        lastname,
        address,
        contactNumber,
        address2,
        state,
        city,
        zipcode,
      } = req.body;

      // Create a new book document
      const newShipping = new ShippingModel({
        username,
        country,
        firstname,
        lastname,
        address,
        contactNumber,
        address2,
        state,
        city,
        zipcode,
      });

      // Save the new book
      const savedAddress = await newShipping.save();

      // Respond with the created book
      res.status(201).json({
        status: "success",
        message: "Book added Successfully",
        savedAddress,
      });
    } catch (error) {
      console.error("Error creating book:", error);
      res.status(500).json({ error: "Failed to create book" });
    }
  }

  // Update a Shipping Address
  //   static async UpdateShipping (req,res){
  //     try {

  //     } catch (error) {
  //         res.status(500).json({status:"failed",message:"Can not update a Shipping Address"})
  //     }
  //   }

  // Delete a Shipping Address

  static async DeleteShipping(req, res) {
    try {
      const { id } = req.params; // get a id by the url
      const shipping = ShippingModel.findByIdAndDelete(id);

      if (!shipping) {
        res
          .status(404)
          .json({ status: "failed", message: "Shipping Address fot found" });
      } else {
        res
          .status(200)
          .json({ status: "success", message: "You Deleted", shipping });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "failed", message: "Server Error" });
    }
  }
}

// aba yini haru ko route banaunu parxa
export default ShippingController;
