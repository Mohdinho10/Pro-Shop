import express from "express";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { admin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/top", getTopProducts);
router.route("/").get(getProducts).post(isAuthenticated, admin, createProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(isAuthenticated, admin, updateProduct)
  .delete(isAuthenticated, admin, deleteProduct);
router.route("/:id/reviews").post(isAuthenticated, createProductReview);

export default router;
