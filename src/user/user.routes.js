import { Router } from "express"
import { getUserById, updateUser, updatePassword, updateProfilePicture } from "./user.controller.js"
import {
  getUserByIdValidator,
  updateUserValidator,
  updatePasswordValidator,
  //updateProfilePictureValidator
} from "../middleware/user-validator.js"

const router = Router()

router.get("/:uid", getUserByIdValidator, getUserById)

router.put("/update/:uid", updateUserValidator, updateUser)

router.patch("/update/password/:uid", updatePasswordValidator, updatePassword)

router.patch(
  "/picture/:uid",
  updateProfilePicture.single("profilePicture")
  /**updateProfilePictureValidator, updateProfilePicture */
)

export default router
