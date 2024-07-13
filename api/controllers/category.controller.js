import Category from "../models/category.model.js";
import { errorHandler } from "../utils/error.js";

export const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return next(errorHandler(400, "Category name is required"));
    }

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return next(errorHandler(400, "Category already exists"));
    }

    const newCategory = new Category({ name });
    await newCategory.save();
    
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
