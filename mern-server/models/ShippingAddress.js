import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  username: { type: String, trim: true, required: false },
  country: { type: String, required: true, default: "Nepal" },
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  address: { type: String, required: true },
  contactNumber: { type: Number, required: true },
  address2: { type: String, trim: true },
  state: { type: String, trim: true },
  city: { type: String, trim: true },
  zipcode: { type: String, trim: true },
});

// Make a model for the shippingSchema
const ShippingModel = mongoose.model("Shipping", shippingSchema);

export default ShippingModel;

// shippingModel ko aba controller banaunu parxa
