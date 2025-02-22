import Post from "./post.model.js"

export const newPost = async (req, res) => {
  try {
    const data = req.body
    const category = req.body
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
  const { limit = 10, from = 0 } = req.query
  const query = { status: true }

  try {
    const posts = await Post.find(query).skip(Number(from)).limit(Number(limit))

    const postsList = await Promise.all(
      posts.map(async (post) => {
        const postAuthor = await Post.findById(post.author)
        const postCategory = await Post.findById(post.category)

        return {
          ...pet.toObject(),
          author: postAuthor ? postAuthor.name : "Author not found.",
          category: postCategory ? postCategory.name : "Category not found.",
        }
      })
    )

    const total = await Post.countDocuments(query)

    res.status(200).json({
      success: true,
      total,
      posts: postsList,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error getting posts.",
      error: err.message,
    })
  }
}

export const getPostById = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findById(id)

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      })
    }

    const postAuthor = await User.findById(post.author)

    req.status(200).json({
      success: true,
      post: {
        ...post.toObject(),
        author: postAuthor ? postAuthor.name : "Author not found.",
      },
    })
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
    const { id } = req.params
    const user = req.user._id
    const data = req.body
    const category = req.body

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

    const post = new Post({ ...data, category: category })

    if (user == post.author) {
      await post.findByIdAndUpdate(id)
    }
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
