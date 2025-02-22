import { Router } from "express"
import { newPost, getPosts, getPostById, updatePost, removePost } from "./post.controller"
import {
  newPostValidator,
  getPostByIdValidator,
  updatePostValidator,
  removePostValidator,
} from "../middleware/validate-post"

const router = Router()

router.post("/new", newPostValidator, newPost)

router.get("/", getPosts)

router.get("/:id", getPostByIdValidator, getPostById)

router.put("/edit", updatePostValidator, updatePost)

router.delete("/remove", removePostValidator, removePost)

export default router
