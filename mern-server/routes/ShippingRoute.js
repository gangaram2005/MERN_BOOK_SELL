import express from "express";
import ShippingController from "../controllers/ShippingController.js";
const router = express.Router();

// routes
router.get("/shipping", ShippingController.getShipping);
router.post("/shipping", ShippingController.AddShipping);
router.delete("/shipping/:id", ShippingController.DeleteShipping);

// yeslai index.js file ma integrate garne

export default router;
