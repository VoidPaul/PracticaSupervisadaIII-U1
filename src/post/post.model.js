import { Schema, model } from "mongoose"

const postSchema = Schema(
  {
    title: {
      type: String,
      minLength: 5,
      required: [true, "Title required."],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    content: {
      type: String,
      reqruired: [true, "Post cannot be empty."],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timeStamps: true,
  }
)

postSchema.methods.toJSON = function () {
  const { author, _id, ...post } = this.toObject()
  post.id = _id
  return post
}

export default model("Post", postSchema)
