import { body, param } from "express-validator"
import { categoryExists, categoryNameExists } from "../helpers/database-validator.js"
import { validateFields } from "./field-error-handler.js"
import { handleErrors } from "./error-handler.js"

export const newCategoryValidator = [
  body("name", "Name required.").notEmpty(),
  body("name").custom(categoryNameExists),
  validateFields,
  handleErrors,
]

export const updateCategoryValidator = [
  param("id", "Invalid MongoDB ID.").isMongoId(),
  param("id").custom(categoryExists),
  validateFields,
  handleErrors,
]

export const removeCategoryValidator = [
  param("id", "Invalid MongoDB ID.").isMongoId(),
  param("id").custom(categoryExists),
  validateFields,
  handleErrors,
]
