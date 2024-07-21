import express from "express";
import {
  authUser,
  deleteUser,
  getUserByID,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { admin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(isAuthenticated, admin, getUsers);
router.post("/login", authUser);

router.use(isAuthenticated);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

router.use(admin);
router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
