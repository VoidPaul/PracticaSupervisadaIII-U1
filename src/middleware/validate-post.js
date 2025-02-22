import { body, param } from "express-validator"
import { validateJWT } from "./validate-jwt.js"
import { validateFields } from "./field-error-handler.js"
import { handleErrors } from "./error-handler.js"

export const newPostValidator = [
  validateJWT,
  body("category", "Category is required.").isEmpty(),
  body("title", "Title is required.").isEmpty(),
  body("content", "Post needs content.").isEmpty(),
]

export const getPostByIdValidator = [validateJWT]

export const updatePostValidator = [validateJWT]

export const removePostValidator = [validateJWT]
