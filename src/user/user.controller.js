import { hash } from "argon2"
import User from "./user.model.js"

export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params

    const user = await User.findById(uid)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      })
    }

    return res.status(200).json({
      success: true,
      user,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error getting user.",
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { uid } = req.params
    const data = req.body

    const user = await User.findByIdAndUpdate(uid, data, { new: true })

    return res.status(200).json({
      success: true,
      message: "User updated.",
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating user.",
    })
  }
}

export const updatePassword = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error changing password.",
    })
  }
}
