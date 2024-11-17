import express from "express";
import {
  addCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/getcategories", getCategories);
router.post("/addcategory", addCategory);

export default router;