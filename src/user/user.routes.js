import { Router } from "express"
import { getUserById, updateUser, updatePassword, updateProfilePicture } from "./user.controller.js"
import {
  getUserByIdValidator,
  updateUserValidator,
  updatePasswordValidator,
  updateProfilePictureValidator,
} from "../middleware/validate-user.js"
import { uploadProfilePicture } from "../middleware/multer-uploads.js"

const router = Router()

router.get("/:uid", getUserByIdValidator, getUserById)

router.put("/update/:uid", updateUserValidator, updateUser)

router.patch("/update/password/:uid", updatePasswordValidator, updatePassword)

router.patch(
  "/update/picture/:uid",
  uploadProfilePicture.single("profilePicture"),
  updateProfilePictureValidator,
  updateProfilePicture
)

export default router
