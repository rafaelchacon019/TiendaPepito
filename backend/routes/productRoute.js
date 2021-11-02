import express from "express";
import product from "../controllers/productController.js";
const router = express.Router();

router.post("/registerProduct", product.registerProduct);

export default router;