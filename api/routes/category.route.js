import express from "express";
import { addCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.post("/addcategory", addCategory);

export default router;
