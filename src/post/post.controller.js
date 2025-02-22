import Post from "./post.model.js"

export const newPost = async (req, res) => {
  try {
    const data = req.body
    const category = req.category
    const user = req.user

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      })
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      })
    }

    const post = new Post({ ...data, category: category, author: user })

    await post.save()

    return res.status(201).json({
      success: true,
      message: "Post made successfuly.",
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making post.",
      error: err.message,
    })
  }
}

export const getPosts = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error getting posts.",
      error: err.message,
    })
  }
}

export const getPostById = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error getting post.",
      error: err.message,
    })
  }
}

export const updatePost = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating post.",
      error: err.message,
    })
  }
}

export const removePost = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error removing post.",
      error: err.message,
    })
  }
}
