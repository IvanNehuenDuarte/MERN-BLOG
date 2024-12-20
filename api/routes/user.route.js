import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  signOut,
  test,
  updateUser,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", verifyToken, signOut);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", verifyToken, getUser);

export default router;
