import { Router } from "express"
import { register, login } from "./auth.controller.js"
import { registerValidator, loginValidator } from "../middleware/user-validator.js"
import { uploadProfilePicture } from "../middleware/multer-uploads.js"

const router = Router()

router.post()

router.post()

export default router
