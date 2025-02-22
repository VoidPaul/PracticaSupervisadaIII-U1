import { Router } from "express"
import { newCategory, updateCategory, removeCategory, getCategories } from "./category.controller.js"
import {
  newCategoryValidator,
  updateCategoryValidator,
  removeCategoryValidator,
} from "../middleware/validate-category.js"

const router = Router()

router.post("/add", newCategoryValidator, newCategory)

router.get("/", getCategories)

router.put("/update/:id", updateCategoryValidator, removeCategory)

router.delete("/remove/:id", removeCategoryValidator, removeCategory)
