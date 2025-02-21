import { Schema, model } from "mongoose"
import nodemon from "nodemon"

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name required."],
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

categorySchema.methods.toJSON = function () {
  const { name, _id, ...category } = this.toObject()
  category.id = _id
  return category
}

export default model("Category", categorySchema)
