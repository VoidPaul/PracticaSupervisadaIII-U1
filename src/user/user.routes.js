import { Router } from "express"
import { getUserById, updateUser, updatePassword } from "./user.controller.js"
import {
  getUserByIdValidator,
  updateUserValidator,
  updatePasswordValidator,
} from "../middleware/user-validator.js"

const router = Router()

router.get("/:uid", getUserByIdValidator, getUserById)

router.put("/update/:uid", updateUserValidator, updateUser)

router.patch("/update/password/:uid", updatePasswordValidator, updatePassword)

export default router
